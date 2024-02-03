import React, { FC, memo, useCallback, useEffect } from 'react';
import cn from 'classnames';

import Button from '../Button/Button';
import Icon from '../Icon/Icon';

import { FileLoaderProps, FileLoaderResult } from './FileLoader.model';
import { checkValidation, getFileData, getOutputFormat } from './FileLoader.utils';

import s from './FileLoader.module.scss';

const FileLoader: FC<FileLoaderProps> = memo((props) => {
  const {
    onChange,
    filename,
    description,
    accepts,
    maxSize,
    warningMsg,
    errorMsg,
    isDisabled = false,
    customValidationFn,
    label = 'Загрузить изображение',
    outputFormat = 'base64',
    product = 'ofd',
    styleType = 'default',
    theme = 'common',
    multiple = false,
  } = props;

  const hiddenFileInput = React.useRef<HTMLInputElement>(null);

  const clearInput = useCallback(() => {
    if (!hiddenFileInput.current?.value || isDisabled) return;
    hiddenFileInput.current.value = '';
  }, [isDisabled]);

  const handleButtonClick = useCallback(() => {
    if (!hiddenFileInput.current || isDisabled) return;
    hiddenFileInput.current.click();
  }, [isDisabled]);

  const handleDeleteFile = useCallback(() => {
    if (isDisabled) return;
    onChange(
      {
        fileName: '',
        fileType: '',
        source: '',
        isValid: true,
      },
      [],
    );
    clearInput();
  }, [isDisabled, clearInput, onChange]);

  const fileChange = useCallback(
    async (file: File) => ({
      ...getFileData(file),
      source: await getOutputFormat(outputFormat, file),
      tmpURL: URL.createObjectURL(file),
      isValid: customValidationFn ? customValidationFn(file) : checkValidation({ file, maxSize, accepts }),
    }),
    [outputFormat, customValidationFn, maxSize, accepts],
  );

  const handleInputChange = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!event.target.files?.length) return;
      if (multiple) {
        const promFiles: Promise<FileLoaderResult>[] = [];
        const files = Array.from(event.target.files);
        files.forEach((file) => {
          promFiles.push(fileChange(file));
        });
        const promFilesUpdate = Promise.all(promFiles);
        const filesUpdate = await promFilesUpdate;
        onChange({}, filesUpdate, event);
        handleDeleteFile();
      }
      if (!multiple) {
        const files = Array.from(event.target.files);
        files.forEach(async (file) => {
          const result = await fileChange(file);
          onChange(result, [], event);
        });
      }
    },
    [onChange, multiple, handleDeleteFile, fileChange],
  );

  useEffect(() => {
    if (!filename) clearInput();
  }, [filename, clearInput]);

  return (
    <div
      className={cn(s.fileLoader, {
        [s.disabled]: isDisabled,
      })}
    >
      <input
        type="file"
        multiple={multiple}
        ref={hiddenFileInput}
        style={{ display: 'none' }}
        onChange={handleInputChange}
        accept={accepts?.map((accept) => `.${accept}`).join(', ')}
      />

      <Button
        disabled={false}
        label={label}
        onClick={handleButtonClick}
        product={product}
        theme={theme}
        size="large"
        styleType={styleType}
        type="button"
        leftIcon="download"
        iconFill
      />

      {description && <div className={s.description}>{description}</div>}

      {warningMsg && <div className={s.warning}>{warningMsg}</div>}

      {errorMsg && <div className={s.error}>{errorMsg}</div>}

      {filename && (
        <div className={s.file}>
          <div className={s.fileName}>
            <div className={s.fileIcon}>
              <Icon iconStroke name="file_default" product={product} styleType="borderless" />
            </div>
            <div className={s.fileText}>{filename}</div>
          </div>

          <button type="button" className={s.fileButton} onClick={handleDeleteFile}>
            <div className={s.fileButtonIcon}>
              <Icon iconStroke name="plus" product="gosotchet" theme="error" />
            </div>
            <div className={s.fileButtonText}>Удалить</div>
          </button>
        </div>
      )}
    </div>
  );
});

FileLoader.displayName = 'FileLoader';

export default FileLoader;
