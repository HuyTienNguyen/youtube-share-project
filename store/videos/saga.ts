import { PayloadAction } from "@reduxjs/toolkit";
import { call, debounce, put, takeLeading } from "redux-saga/effects";
import videoApi from "../../api-client/videoApi";
import { ListParams, ListResponse } from "../common";
import {
  getAllVideosFailed,
  getAllVideosRequest,
  getAllVideosSuccess,
} from "./slice";
import { IVideo } from "./type";

function* getAllVideosWorker(action: PayloadAction<ListParams>) {
  try {
    const response: ListResponse<IVideo> = yield call(
      videoApi.getAll,
      action.payload
    );
    if (response) {
      yield put({
        type: getAllVideosSuccess.toString(),
        payload: response,
      });
    }
  } catch (error: any) {
    yield put({ type: getAllVideosFailed.toString() });
  }
}

function* videosWacher() {
  yield takeLeading(getAllVideosRequest.toString(), getAllVideosWorker);
}

export default videosWacher;
