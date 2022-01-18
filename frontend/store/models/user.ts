import { createModel } from "@rematch/core";
import { RootModel } from ".";
// types
import { User } from "@/common/types/user";

export const user = createModel<RootModel>()({
  state: {} as User,
  reducers: {
    loaded(state, payload: User) {
      return { ...state, ...payload };
    },
  },
});
