import type { AppProps } from "next/app";
import { Layout } from "../layouts";
import { Grid } from "../components/Grid";
import { ProjectsGrid } from "../components/ProjectsGrid";
import {
  Card,
  CardCSSImage,
  CardDescription,
  CardReactImage,
  CardTitle,
  CardTypeScriptImage,
} from "../components/Card";

import "../styles/index.css";
import Blog from "./blog";
import Contact from "./contact";
import { Separator } from "../components/Separator";
import About from "./about";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
      <About />
      <div className="space-y-8">
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
      </div>
      <ProjectsGrid />
      <Grid />
      <Blog />
      <Separator />
      <Contact />
    </Layout>
  );
};

export default App;
