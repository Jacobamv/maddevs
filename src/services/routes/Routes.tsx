import { Routes as Switch, Route } from "react-router-dom";
import { IntroPage, TeamDisplay } from "pages";

export function Routes() {
  return (
    <Switch>
      <Route path='/' element={<IntroPage />} />
      <Route path='/team-display' element={<TeamDisplay />} />
    </Switch>
  );
}
