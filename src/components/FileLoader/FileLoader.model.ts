import { TProductNames, TStyleTypes, TThemeNames, TUploadFileTypes } from '../../types';

export interface FileLoaderResult {
  /** Имя файла */
  fileName?: string;
  /** Формат файла */
  fileType?: string;
  /** Содержимое файла в Base64 */
  source?: string | ArrayBuffer | null | File;
  /** Прошел ли файл валидацию */
  isValid?: boolean;
  /** Временная ссылка на файл */
  tmpURL?: string;
}

export interface FileLoaderProps {
  /** Функция, вызывающаяся после добавления файла */
  onChange: (
    { fileName, fileType, source, isValid, tmpURL }: FileLoaderResult,
    arrFiles?: FileLoaderResult[],
    event?: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  /** Описание под формой */
  description?: string;
  /** Содержимое файла в Base64 */
  fileBase64?: string;
  /** Имя файла */
  filename?: string;
  /** Допустимые форматы файла */
  accepts?: string[];
  /** Максимальный размер файла в килобайтах */
  maxSize?: number;
  /** Сообщение c предупреждением  */
  warningMsg?: string;
  /** Сообщение об ошибке */
  errorMsg?: string;
  /** Отключение формы */
  isDisabled?: boolean;
  /** Кастомная функция валидации файла */
  customValidationFn?: (file: File) => boolean;
  /** Текст для кнопки */
  label?: string;
  /** Выходной формат файла */
  outputFormat?: TUploadFileTypes;
  /* Определяет стиль лоадера(с фоном или без, есть граница или нет) */
  styleType?: TStyleTypes;
  /* Продукт лоадера определяет основной цвет */
  product?: TProductNames;
  /* Тема лоадера определяет основной цвет внутренней иконки и текста */
  theme?: TThemeNames;
  /* multiple позволяет загружать несколько файлов одновременно */
  multiple?: boolean;
}
