import { ListParams, PaginationParams } from "../common";
import { EActionStatus } from "../type";

export interface IVideo {
  id?: string;
  name: string;
  age: number;
  mark: number;
  gender: "male" | "female";
  city: string;

  createdAt?: number;
  updatedAt?: number;
}

export interface IGetAllDataQuery {
  page: number;
  limit: number;
}

export interface IVideosState {
  status: EActionStatus;
  videosList: IVideo[];
  filter: ListParams;
  pagination: PaginationParams;
}
