import './App.scss';
import 'react-image-lightbox/style.css';
import Nav from './component/Navigation/Nav';
import Weather from './component/Weather/Weather';
import OTP from './component/OTP/OTP';
import {
   BrowserRouter as Router,
   Switch,
   Route,
} from "react-router-dom";


const App = () => {
   return (
      <Router>
         <Nav />
         <Switch>

            <Route exact={true} path="/">
               <Weather />
            </Route>

            <Route path="/weather">
               <Weather />
            </Route>
            <Route path="/otp">
               <OTP />
            </Route>
            <Route path="/about">
               <div>Hello I'm Quanzu</div>
            </Route>
            <Route path="*">
               <div>404 Not Found</div>
            </Route>
         </Switch>

      </Router>
   );
};

export default App;
