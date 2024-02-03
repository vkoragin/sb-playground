import type { Meta, StoryObj } from '@storybook/react';
import FileLoader from './FileLoader';
import React, { useState } from 'react';
import { FileLoaderResult } from './FileLoader.model';

const meta = {
  title: 'FileLoader',
  component: FileLoader,
} satisfies Meta<typeof FileLoader>;

export default meta;

type Story = StoryObj<typeof meta>;

const wrapperStyle: React.CSSProperties = {
  display: 'flex',
  width: '340px',
};

const FileLoaderWithHooks = () => {
  const [filename, setFilename] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = ({ fileName, isValid }: FileLoaderResult, arrFiles?: FileLoaderResult[]) => {
    if (arrFiles?.length) {
      const isNotValid = arrFiles.some((file) => !file.isValid);
      setErrorMsg(isNotValid ? 'Файлы не соответствуют формату' : '');
    } else {
      if (!isValid) {
        setErrorMsg('Файл не соответсвует формату');
        setFilename('');
        return;
      }
      if (fileName) {
        setFilename(fileName);
        setErrorMsg('');
      }
    }
  };

  return (
    <div style={{ ...wrapperStyle }}>
      <FileLoader
        filename={filename}
        description="Формат — JPG, PDF. Размер — до 500 KB."
        accepts={['pdf', 'jpg']}
        maxSize={500}
        errorMsg={errorMsg}
        onChange={handleChange}
      />
    </div>
  );
};

export const WithControl: Story = {
  args: {
    filename: '',
    description: `Формат — gif, pdf, jpg. Размер — до 100 KB.`,
    accepts: ['gif', 'pdf', 'jpg'],
    maxSize: 100,
    onChange: () => null,
    warningMsg: ``,
    errorMsg: ``,
    isDisabled: false,
    multiple: false,
  },
};

export const WithParent: Story = {
  render: () => <FileLoaderWithHooks />,
};

export const EPDFileLoader: Story = {
  args: {
    filename: '',
    description: `Формат — xml. Размер — до 50 KB.`,
    accepts: ['xml'],
    maxSize: 50,
    onChange: () => null,
    warningMsg: ``,
    errorMsg: ``,
    isDisabled: false,
    product: 'edo',
    styleType: 'aside-secondary',
    theme: 'white',
    outputFormat: 'file',
    label: 'Загрузить документ',
    multiple: false,
  },
};
