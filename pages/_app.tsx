import "styles/globals.css";
import "semantic-ui-css/semantic.min.css";

import Main from "src/components/main/Main";

function MyApp({ Component, pageProps }) {
  return (
    <Main>
      <Component {...pageProps} />
    </Main>
  );
}

export default MyApp;
