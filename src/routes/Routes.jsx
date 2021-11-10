import { Route, Switch } from "react-router-dom";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        Homepage component
      </Route>
    </Switch>
  );
}
