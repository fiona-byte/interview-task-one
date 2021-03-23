import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PersonalInfo from "./views/PersonalInfo/personal-info";
import ConfirmPayment from "./views/ConfirmPayment/confirm-payment";
import Billing from "./views/Billing/billing";
import FinishPayment from "./views/FinishPayment/finish-payment";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={PersonalInfo} />
          <Route path="/confirm-payment" exact component={ConfirmPayment} />
          <Route path="/billing" exact component={Billing} />
          <Route path="/finish-payment" exact component={FinishPayment} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
