import { Route, Switch } from "react-router-dom";
import Homepage from "../components/Homepage";
import Error from "../components/Error";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact>
                <Navbar />
                <Homepage />
                <Footer />
            </Route>
            <Route path="/:articleId"></Route>
            <Route>
                <Error />
            </Route>
        </Switch>
    );
}
