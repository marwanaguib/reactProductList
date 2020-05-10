import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Loader } from "../assets/styles/common";

const Home = lazy(() => import("./Home"));
const Products = lazy(() => import("./Products"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact render={() => <Home />}></Route>
          <Route path="/products" render={() => <Products />}></Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
