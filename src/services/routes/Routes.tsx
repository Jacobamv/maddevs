import { Routes as Switch, Route } from "react-router-dom";
import { Intro, TeamDisplay } from "pages";

export function Routes() {
  return (
    <Switch>
      <Route path='/' element={<Intro />} />
      <Route path='/team-display' element={<TeamDisplay />} />
    </Switch>
  );
}
