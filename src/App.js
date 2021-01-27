import './App.css';
import Pricing from './components/pricing/Pricing'
import PricingTwo from './components/pricing2/PricingTwo'
import Main from './components/main/Main'
import {  } from "module";
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import Login from './components/login/Login'
import Error404 from './components/Error404/Error404'
import About from './components/about/About';
import Team from "./components/team/Team";
import Signup from "./components/signup/Signup";
import Teamprofile from './components/team/teamProfile/Teamprofile';
import LoginTwo from './components/login2/LoginTwo';
import SignupTwo from "./components/signup/signuptwo/SignupTwo"

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={'/'}>
                <Switch>
                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={Main}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/pricing`} component={PricingTwo}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/error404`} component={Error404} />
                    <Route exact path={`${process.env.PUBLIC_URL}/team`} component={Team} />
                    <Route exact path={`${process.env.PUBLIC_URL}/about`} component={About} />
                    <Route exact path={`${process.env.PUBLIC_URL}/signup`} component={Signup} />
                    <Route exact path={`${process.env.PUBLIC_URL}/teamprofile`} component={Teamprofile} />
                    <Route exact path={`${process.env.PUBLIC_URL}/logintwo`} component={LoginTwo} />
                    <Route exact path={`${process.env.PUBLIC_URL}/signuptwo`} component={SignupTwo} />
                </Switch>
            </BrowserRouter>
    </div>
  );
}

export default App;
