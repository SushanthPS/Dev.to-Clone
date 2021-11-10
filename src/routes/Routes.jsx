import { Route, Switch } from "react-router-dom";
import Homepage from "../components/Homepage";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact>
                <Homepage />
            </Route>
        </Switch>
    );
}
