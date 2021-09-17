import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Footer from "./components/layout/Footer";
import AssignmentOne from './pages/AssignmentOne';
import AssignmentTwo from './pages/AssignmentTwo';
import AssignmentThree from './pages/AssignmentThree';
import AssignmentFour from './pages/AssignmentFour';
import AssignmentFive from './pages/AssignmentFive';

function App() {
  return (
    <div className="">
      <Layout />      
      <Switch>
        <Route path="/" exact={true}>
          {/* Display Static Data [ Header, body, footer ] */}
          <AssignmentOne />
        </Route>
        <Route path="/assignment-two" exact={true}>
          {/* Create form using formik */}
          <AssignmentTwo />
        </Route>
        <Route path="/assignment-three" exact={true}>
          {/* Hos to create Route */}
          <AssignmentThree />
        </Route>
        <Route path="/assignment-four" exact={true}>
          {/* Display API data in custom format */}
          <AssignmentFour />
        </Route>
        <Route path="/assignment-five" exact={true}>
          {/* Counter using react redux */}
          <AssignmentFive />
        </Route>
      </Switch>
      <Footer /> 
    </div>
  );
}

export default App;
