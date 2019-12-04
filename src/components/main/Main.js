import React from "react";
import { Route, Switch } from "react-router-dom";
import PageHome from "../pageHome/PageHome";
import PagePromise from "../pagePromise/PagePromise";

const Main = () => {
  return (
    <main className="p-4">
      <Switch>
        <Route exact path="/" component={PageHome} />
        <Route path="/promise" component={PagePromise} />
      </Switch>
    </main>
  );
};

export default Main;
