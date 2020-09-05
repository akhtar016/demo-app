import React, { useEffect } from "react";
import Register from "./Components/Register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  useEffect(() => {
    window.analytics.page({
      userId: "qprma1ds",
      route: "/",
    });
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div>
            <h1 className="text-center my-5">This is Homepage</h1>
          </div>
          <Link to="/register">
            <div className="text-center my-5">
              <a className="btn btn-success" href>
                Register Now
              </a>
            </div>
          </Link>
        </Route>

        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
