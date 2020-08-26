import React, { useEffect } from "react";
import Analytics from "npm-vineet";
import Register from "./Components/Register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  // useEffect(() => {
  //   const analytics = new Analytics("5c18c2dc-826d-4b3d-9e4a-f7557e2090f9");
  //   analytics.page("",{});
  // }, []);

  // useEffect(() => {
  //   window.analytics.page();
  // });

  useEffect(() => {
    const analytics = new Analytics("5bf1a145-812c-487e-9b27-14af504bfd27");
    analytics.page({
      userId: "test",
      pageTitle: "HomePage",
      route: "/",
    });
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div>
            <h1 className="text-center my-5">This is Homepage</h1>
            <Link to="/register">
              <div className="text-center my-5">
                <a className="btn btn-success" href>
                  Register Now
                </a>
              </div>
            </Link>
          </div>
        </Route>

        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
