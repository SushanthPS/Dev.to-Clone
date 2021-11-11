import { Route, Switch } from "react-router-dom";

import Article from "../components/Article";

import Homepage from "../components/Homepage";


export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact>
              <Homepage />
            </Route>
            <Route path="/article/:id" exact>
              <Article/>
            </Route>
           
        </Switch>
    );
}
