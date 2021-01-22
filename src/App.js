import './App.css';
import Pricing from './components/pricing/Pricing'
import PricingTwo from './components/pricing2/PricingTwo'
import Main from './components/main/Main'
import {  } from "module";
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import Login from './components/login/Login'
import Error404 from './components/Error404/Error404'

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={'/'}>
                <Switch>
                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={Main}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/pricing`} component={PricingTwo}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/error404`} component={Error404} />

                </Switch>
            </BrowserRouter>
    </div>
  );
}

export default App;
