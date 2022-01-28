import type { AppProps } from "next/app";
import { Page } from "../layouts";
import { Grid } from "../components/Grid";

import Image from "next/image";
import profilePic from "../../public/avatar.png";

import "../styles/index.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Page>
      <Image src={profilePic} alt="Picture of the author" width={200} height={200} />
      <Component {...pageProps} />
      <Grid />
    </Page>
  );
};

export default App;
