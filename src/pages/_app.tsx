import type { AppProps } from "next/app";
import { Page } from "../layouts";
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

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Page>
      <Component {...pageProps} />
      <div id="about" className="mt-96 space-y-8">
        <h2 className="text-left text-5xl">About Me...</h2>
        <p className="max-w-screen-sm text-indigo12 text-center p-4">
          Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to
          corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow
          the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring to the table
          win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal
          that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User
          generated content in real-time will have multiple touchpoints for offshoring.
        </p>
      </div>
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
    </Page>
  );
};

export default App;
