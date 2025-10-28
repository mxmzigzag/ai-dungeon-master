interface IApiResponse<T> {
  data: T;
  status: string;
  code: number;
}

export type { IApiResponse };