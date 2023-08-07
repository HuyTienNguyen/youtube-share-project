import { ListParams, ListResponse } from "../store/common";
import { IVideo } from "../store/videos/type";
import axiosClient from "./auth-client";

const videoApi = {
  getAll(params: ListParams): Promise<ListResponse<IVideo>> {
    const url = "/students";
    return axiosClient.get(url, { params });
  },
  updateInteractVideo(videoId: number): Promise<any> {
    const url = `/like/${videoId}`;
    return axiosClient.post(url);
  },
};

export default videoApi;
