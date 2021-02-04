import React, { useContext } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  RouteProps,
  Redirect,
} from "react-router-dom";

import AuthContext, { AuthProvider } from "../contexts/Auth.context";

import SplashScreen from "../screens/Splash";
import StartScreen from "../screens/Start";
import LoginScreen from "../screens/Login";
import OpenAccountScreen from "../screens/OpenAccount";
import HomeScreen from "../screens/Home";
import ApplyScreen from "../screens/Apply";
import ProfileScreen from "../screens/Profile";
import Loading from "../components/Loading";

interface PrivateRouteProps extends RouteProps {
  component: any;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { user } = useContext(AuthContext);

  const onRender = (props: RouteProps) =>
    user?._id ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: "/", state: { from: props.location } }} />
    );

  return <Route {...rest} render={onRender} />;
};

export default function Routes() {
  return (
    <Router>
      <Switch>
        <AuthProvider>
          <Loading />
          <Route exact path="/" component={SplashScreen} />
          <Route exact path="/start" component={StartScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/open-account" component={OpenAccountScreen} />
          <PrivateRoute exact path="/home" component={HomeScreen} />
          <PrivateRoute exact path="/aplly" component={ApplyScreen} />
          <PrivateRoute exact path="/profile" component={ProfileScreen} />
        </AuthProvider>
      </Switch>
    </Router>
  );
}
