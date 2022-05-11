import { createModel } from "@rematch/core";
import { RootModel } from ".";
import { useSelector, useDispatch } from "react-redux";
// types
import { User } from "@/common/types/user";

// API
import * as API from "@/api";
export const user = createModel<RootModel>()({
  state: {} as User,
  reducers: {
    loaded(state, payload: User) {
      return { ...state, ...payload };
    },
    remove(state, payload) {
      return payload;
    },
  },
  effects: (dispatch) => ({
    async getUserInfo() {
      const [error, response] = await API.getUser();
      if (response) {
        this.loaded(response.data);
      }
    },
  }),
});
