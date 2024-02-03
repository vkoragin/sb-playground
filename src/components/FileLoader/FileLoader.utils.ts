import { TUploadFileTypes } from '../../types';

const getFileName = (file: File) => file.name;

const getFileType = (file: File) => getFileName(file).split('.').pop() || '';

const isAccept = (accepts: string[], file: File) => accepts.includes(getFileType(file));

const isValidSize = (maxSize: number, file: File) => file.size / 1024 <= maxSize;

export const toBase64 = (file: File): Promise<string | ArrayBuffer | null> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export const getFileData = (file: File) => {
  const fileName = file.name;
  const fileType = fileName.split('.').pop() || '';
  return { fileName, fileType };
};

export const checkValidation = ({ file, accepts, maxSize }: { file: File; accepts?: string[]; maxSize?: number }) => {
  const accept = accepts ? isAccept(accepts, file) : true;
  const size = maxSize ? isValidSize(maxSize, file) : true;
  return accept && size;
};

export const getOutputFormat = async (format: TUploadFileTypes, file: File) => {
  let output: string | ArrayBuffer | null | File = file;

  switch (format) {
    case 'base64':
      output = await toBase64(file);
      break;
    default:
      break;
  }

  return output;
};
