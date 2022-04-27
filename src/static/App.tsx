import * as React from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomePage } from "./components/Home";
import { IUser, User } from "../models/User";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer";
import SotongGuidePage from "./components/SotongGuide";
import VisaGuidePage from "./components/SotongGuideDropdown/VisaGuide";
import PredeparturePage from "./components/SotongGuideDropdown/PredepartureGuide";
import OnCampusGuidePage from "./components/SotongGuideDropdown/OnCampusGuide";
import AcademicsGuidePage from "./components/SotongGuideDropdown/AcademicsGuide";
import SettlingInPage from "./components/SotongGuideDropdown/SettlingInGuide";
import GeneralGuidePage from "./components/SotongGuideDropdown/GeneralGuide";
import PrivacyPolicyPage from "./components/PrivacyPolicy";
import UserViewPage from "./components/UserView";
import TestBank from "./components/TestBank";
import UserProfilePage from "./components/UserProfile";
import PCP from "./components/PCP";
import ArbitraryPage from "./components/ArbitraryPage/ArbitraryPage";

interface IAppState {
  userData?: IUser;
}

interface IRequiresAppState {
  appState: IAppState;
}

const initialAppState: IAppState = {
  userData: undefined
};

class App extends React.Component<{}, Readonly<IAppState>> {
  constructor(props) {
    super(props);
    this.state = initialAppState;
  }

  componentWillMount() {
    axios
      .get<{ user: IUser }>("/api/users/current")
      .then(res => {
        this.setState({
          userData: res.data.user
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const GreetOrSignIn = () => {
      const userData = this.state.userData;
      if (userData) {
        return (
          <div>
            <p>Hello {userData.firstName}</p>
            <img src={userData.image} />
          </div>
        );
      } else {
        return <a href="/auth/facebook">Sign in</a>;
      }
    };

    return (
      <BrowserRouter>
        <div className="app">
          <Navbar appState={this.state} />
          <div className="container">
            {/* <Sidebar /> */}
            <main role="main">
              {/* <GreetOrSignIn /> */}
              <Switch>
                {/* <Route
                  render={() => <SotongGuidePage appState={this.state} />}
                  path="/guide"
                /> */}
                <Route
                  render={() => <VisaGuidePage appState={this.state} />}
                  path="/Visa"
                />
                <Route
                  render={() => <SettlingInPage appState={this.state} />}
                  path="/SettlingIn"
                />
                <Route
                  render={() => <PredeparturePage appState={this.state} />}
                  path="/Predeparture"
                />
                <Route
                  render={() => <OnCampusGuidePage appState={this.state} />}
                  path="/OnCampus"
                />
                <Route
                  render={() => <AcademicsGuidePage appState={this.state} />}
                  path="/Academics"
                />
                <Route
                  render={() => <GeneralGuidePage appState={this.state} />}
                  path="/General"
                />
                <Route
                  render={() => <ArbitraryPage appState={this.state} />}
                  path="/events"
                />
                <Route
                  render={() => <ArbitraryPage appState={this.state} />}
                  path="/sponsorships"
                />
                <Route
                  render={() => <ArbitraryPage appState={this.state} />}
                  path="/newsletters"
                />
                <Route
                  render={() => <ArbitraryPage appState={this.state} />}
                  path="/joinUs"
                />
                <Route
                  render={() => <UserViewPage appState={this.state} />}
                  path="/users"
                />
                <Route
                  render={() => <TestBank appState={this.state} />}
                  path="/testbank"
                />
                <Route
                  render={() => <UserProfilePage appState={this.state} />}
                  path="/profile"
                />
                <Route
                  render={() => <PCP appState={this.state} />}
                  path="/pcp"
                />
                <Route
                  component={PrivacyPolicyPage}
                  path="/privacy"
                />
                <Route component={HomePage} path="/" />
              </Switch>
            </main>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export { IAppState, IRequiresAppState, App };
