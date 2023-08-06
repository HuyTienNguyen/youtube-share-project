import axiosClient from "../api-client/auth-client";
import { ListParams, ListResponse } from "../store/common";
import { IGetAllDataReponse } from "../store/response.tye";
import { IGetAllDataQuery, IVideo } from "../store/videos/type";

const serviceVideo = {
  getAllVideo: async (paramQuery: ListParams) => {
    console.log("check", paramQuery);
    try {
      const response = await axiosClient.get<ListResponse<IVideo>>(
        "/students",
        {
          params: paramQuery,
        }
      );
      console.log("callapi: ", response);
      return response;
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  },
};

export default serviceVideo;
