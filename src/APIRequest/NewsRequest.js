//Internal Import
import ToastMessage from "../helper/ToastMessage";
import {
  SetTotalNews,
  SetNewsLists,
  SetNewsDetails,
} from "../redux/slices/NewsSlice";
import store from "../redux/store/store";
import RestClient from "./RestClient";

class NewsRequest {
  static async NewsCreate(postBody) {
    const { data } = await RestClient.postRequest("/NewsCreate", postBody);

    if (data.status === "success") {
      ToastMessage.successMessage("Class List Create Successful");
      return true;
    }
  }

  static async NewsList(pageNumber, perPage, searchKey) {
    const { data } = await RestClient.getRequest(
      `NewsList/${pageNumber}/${perPage}/${searchKey}`,
    );

    if (data.status === "success") {
      const total = data?.data[0]?.Total[0]?.count;
      store.dispatch(SetNewsLists(data?.data?.[0]?.Data));
      store.dispatch(SetTotalNews(total || 0));
    }
  }

  static async NewsDetails(id, postBody) {
    const { data } = await RestClient.getRequest(`/NewsDetails/${id}`);

    if (data.status === "success") {
      store.dispatch(SetNewsDetails(data?.data?.[0]));
      return true;
    }
  }

  static async NewsUpdate(id, postBody) {
    const { data } = await RestClient.updateRequest(
      `/NewsUpdate/${id}`,
      postBody,
    );

    if (data.status === "success") {
      ToastMessage.successMessage("Class List Update Successful");
      return true;
    }
  }

  static async NewsDelete(id) {
    const { data } = await RestClient.deleteRequest(`/NewsDelete/${id}`);

    if (data.status === "success") {
      ToastMessage.successMessage("Class List Delete Successful");
      return true;
    }
  }
}

export default NewsRequest;
