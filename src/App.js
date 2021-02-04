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
import Expense from './components/expense/Expense'
import Acquisition from "./components/acquisition/Acquisition";
import Property from "./components/mainProperty/property/Property";
import Financing from "./components/financing/Financing";
import Renovation from "./components/renovation/Renovation";
import Expense2 from "./components/expense/Expense2";
import Assumptions from "./components/assumptions/Assumptions";
import Report from "./components/report/Report";
import Contact from "./components/contact/Contact";
import Profile from "./components/profile/Profile";
import PaymentDetails from "./components/payment_details/PaymentDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={'/'}>
                <Switch>
                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={Main}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/pricing`} component={PricingTwo}/>
                    {/* <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login}/> */}
                    <Route exact path={`${process.env.PUBLIC_URL}/error404`} component={Error404} />
                    <Route exact path={`${process.env.PUBLIC_URL}/team`} component={Team} />
                    <Route exact path={`${process.env.PUBLIC_URL}/about`} component={About} />
                    {/* <Route exact path={`${process.env.PUBLIC_URL}/signup`} component={Signup} /> */}
                    <Route exact path={`${process.env.PUBLIC_URL}/teamprofile`} component={Teamprofile} />
                    <Route exact path={`${process.env.PUBLIC_URL}/login`} component={LoginTwo} />
                    <Route exact path={`${process.env.PUBLIC_URL}/signup`} component={SignupTwo} />
                    <Route exact path={`${process.env.PUBLIC_URL}/property`} component={Property} />

                    <Route exact path={`${process.env.PUBLIC_URL}/expense`} component={Expense} />
                    <Route exact path={`${process.env.PUBLIC_URL}/acquisition`} component={Acquisition} />
                    <Route exact path={`${process.env.PUBLIC_URL}/financing`} component={Financing} />
                    <Route exact path={`${process.env.PUBLIC_URL}/renovation`} component={Renovation} />
                    <Route exact path={`${process.env.PUBLIC_URL}/expense2`} component={Expense2} />
                    <Route exact path={`${process.env.PUBLIC_URL}/assumptions`} component={Assumptions} />
                    <Route exact path={`${process.env.PUBLIC_URL}/report`} component={Report} />
                    <Route exact path={`${process.env.PUBLIC_URL}/contact_us`} component={Contact} />
                    <Route exact path={`${process.env.PUBLIC_URL}/profile`} component={Profile} />
                    <Route exact path={`${process.env.PUBLIC_URL}/payment_details`} component={PaymentDetails} />



                </Switch>
            </BrowserRouter>
    </div>
  );
}

export default App;
