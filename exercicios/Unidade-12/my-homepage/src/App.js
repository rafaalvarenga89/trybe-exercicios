import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import HowTo from './components/HowTo';
import Profile from './components/Profile';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/howto" component={HowTo} />
          <Route path="/profile/:phrase" render={(props) => <Profile {... props }name="Palmeiras não tem Mundial!" />} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
