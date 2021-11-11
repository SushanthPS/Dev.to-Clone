import { Route, Switch } from "react-router-dom";
import Article from "../components/Article";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact>
            <Article/>
            </Route>
            
        </Switch>
    );
}
