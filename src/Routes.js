import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import coinPage from "./coinPage";
import Cryptochart from "./Cryptochart";


export default ({coins,coin}) => (
    <Router>
        <Switch>
            <Route exact path='/'> 
              <Cryptochart coins={coins}
                coin={coin}/>
            </Route>
            <Route path={`/coinPage/:coin`} component={coinPage} />
        </Switch>
  </Router>

)