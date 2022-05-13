import { useMemo } from "react";
import loadingPlugin, { ExtraModelsFromLoading } from "@rematch/loading";
import { init, RematchDispatch, RematchRootState } from "@rematch/core";
import { models, RootModel } from "./models";
import * as API from "@/api";
// import { User } from "@/common/types/user";
let store;

// const exampleInitialState = {
//   users: [],
// };
export const getInitialState = async () => {
  const [error, response] = await API.getUser();
  if (error) {
    return { user: {} };
  }
  const user = response.data;
  return { user };
};

type FullModel = ExtraModelsFromLoading<RootModel, { type: "full" }>;

export const initStore = (initialState = getInitialState()) =>
  init<RootModel, FullModel>({
    models,
    plugins: [loadingPlugin({ type: "full" })],
    redux: {
      initialState,
    },
  });

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  // console.log(preloadedState);
  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel, FullModel>;
