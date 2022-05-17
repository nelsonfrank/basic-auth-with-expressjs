import "@/themes/styles.scss";
import { Provider } from "react-redux";
import { useStore } from "@/store";
import { getInitialState } from "@/store";

function App({ Component, pageProps, initialStore }) {
  const store = useStore(initialStore);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

// export const getInitialProps = async (appContext) => {
//   const appProps = await App.getInitialProps(appContext);
//   return { ...appProps };
// };

App.getInitialProps = async (appContext) => {
  const initialStore = await getInitialState();
  return {
    initialStore,
  };
};
export default App;
