//external import
import { createSlice } from "@reduxjs/toolkit";


// Internal Import
import climet from "../../assets/images/climet-report-1667232205.jpg";

let demoNewsLists = [
  {
    title:'ঘূর্ণিঝড়ে বছরে ক্ষতি ১০ হাজার কোটি টাকা, কৃষি জিডিপি কমার (ভিডিও)',
    videoThumb: climet,
  },
  {
    title:'ঘূর্ণিঝড়ে বছরে ক্ষতি ১০ হাজার কোটি টাকা, কৃষি জিডিপি কমার (ভিডিও)',
    videoThumb: climet,
  },
  {
    title:'ঘূর্ণিঝড়ে বছরে ক্ষতি ১০ হাজার কোটি টাকা, কৃষি জিডিপি কমার (ভিডিও)',
    videoThumb: climet,
  },
   {
    title:'ঘূর্ণিঝড়ে বছরে ক্ষতি ১০ হাজার কোটি টাকা, কৃষি জিডিপি কমার (ভিডিও)',
    videoThumb: climet,
  }
]



const NewsSlice = createSlice({
  name: "News",
  initialState: {
    NewsLists:demoNewsLists,
    NewsDropDown: [],
    TotalNews: 0,
  },
  reducers: {
    SetNewsLists(state, action) {
      state.NewsLists = action.payload;
    },
    SetTotalNews(state, action) {
      state.TotalNews = action.payload;
    },
    SetNewsDropDown(state, action) {
      state.NewsDropDown = action.payload;
    },
    SetNewsDetails(state, action) {
      state.FormValue = action.payload;
    },
  },
});

export const { SetNewsLists, SetTotalNews, SetNewsDropDown, SetNewsDetails } =
  NewsSlice.actions;
export default NewsSlice.reducer;
