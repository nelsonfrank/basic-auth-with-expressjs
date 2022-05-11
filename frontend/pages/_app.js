import "@/themes/styles.scss";
import { Provider } from "react-redux";
import Layout from "@/components/layout";
import { useStore } from "@/store";
import { getInitialState, Dispatch } from "@/store";
import { useSelector, useDispatch } from "react-redux";

function App({ Component, pageProps, initialStore }) {
  const store = useStore(initialStore);

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
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
