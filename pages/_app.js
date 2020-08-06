//Node Modules
import wrapper from "../store";
import {Provider, useSelector} from 'react-redux';

//Styles
import '../styles/globals.css'

//Actions
import { updateAppTheme } from "../store/actions/themeActions";

const MyApp = ({ Component, pageProps }) => {
  const store = useSelector(state => state);
  console.log("store", store);
  return <Component {...pageProps} />
};

MyApp.getInitialProps = ({ctx}) => {
  const pageProps = {someValue: "blah"};
  ctx.store.dispatch(updateAppTheme());
  return {pageProps: {...pageProps}}
};

export default wrapper.withRedux(MyApp);
