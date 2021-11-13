import { Route, Switch } from "react-router-dom";
import Article from "../components/Article";
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
      <Route path="/article/:id" exact>
        <Navbar />
        <Article />
        <Footer />
      </Route>
      <Route>
        <Error />
      </Route>
    </Switch>
  );
}
