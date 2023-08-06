export interface IUserLoginResponse {
  accessToken: string;
  expiredAt: any;
}

export interface IGetAllDataReponse<T> {
  items: T[];
}
