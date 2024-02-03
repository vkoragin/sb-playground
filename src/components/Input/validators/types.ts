export type TInnType = 'person' | 'organisation';

export type TValError = {
  code: number;
  message: string;
};
export type TValResult = {
  success: boolean;
  error: TValError;
};

export type TOgrnType = 'person' | 'organisation';
