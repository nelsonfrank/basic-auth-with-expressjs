import "@/themes/styles.scss";
import { Provider } from "react-redux";
import Layout from "@/components/layout";
import { useStore } from "@/store";

function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default App;
