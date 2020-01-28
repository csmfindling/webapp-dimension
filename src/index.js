import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types'
import './index.css';
import Intro from "./components/Intro/Intro";
import Board from "./components/Board/Board";
//import Block from "./components/Block/Block";


const RefreshRoute = ({ component: Component, isDataAvailable, ...rest }) => (    
  <Route
    {...rest}
    render={props =>
       (props.location.state!=undefined) ? ( // if props location state is defined return page, else return to intro
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/"
          }}
        />
      )
    }
  />
);

export default RefreshRoute;  

const App = () => {
    return (
        <BrowserRouter>
            <Switch>                
                <Route path="/" component={Intro} exact />
                <RefreshRoute path="/Board" component={Board} exact />
                //<RefreshRoute path="/Block" component={Block} exact />
            </Switch>
        </BrowserRouter>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
