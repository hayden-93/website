import type { AppProps } from "next/app";
import { Page } from "../layouts";
import { Grid } from "../components/Grid";
import { Avatar } from "../components/Avatar";

import "../styles/index.css";
import { Card, CardCSSImage, CardDescription, CardReactImage, CardTitle, CardTypeScriptImage } from "../Card/Card";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Page>
      <Avatar />
      <Component {...pageProps} />
      <Card>
        <CardReactImage src="" alt="" />
        <div>
          <CardTitle />
          <CardDescription />
        </div>
      </Card>
      <Card className="justify-end">
        <div>
          <CardTitle />
          <CardDescription />
        </div>
        <CardTypeScriptImage src="" alt="" />
      </Card>
      <Card>
        <CardCSSImage src="" alt="" />
        <div>
          <CardTitle />
          <CardDescription />
        </div>
      </Card>

      <Grid />
    </Page>
  );
};

export default App;
