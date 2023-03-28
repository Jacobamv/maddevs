import { Routes as Switch, Route } from "react-router-dom";
import { IntroPage, ProblemDefinition, TeamDisplay } from "pages";
import { ProblemResolution } from "components/modules";

export function Routes() {
  return (
    <Switch>
      <Route path='/' element={<IntroPage />} />
      <Route path='/team-display' element={<TeamDisplay />} />
      <Route path='/problem-definition' element={<ProblemDefinition />} />
      <Route path='/problem-resolution' element={<ProblemResolution />} />
    </Switch>
  );
}
