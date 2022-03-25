import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Calendar from '../pages/Calendar';
import LiveLectures from '../pages/LiveLectures';
import Solutions from '../pages/Solutions';
import TrybeTalks from '../pages/TrybeTalks';
import NotFound from '../pages/NotFound';
import Solution from '../pages/Solution';

const allSolutions = [
  {
    slug: 'hello-world-no-react',
    name: 'Hello World no React',
  },
  {
    slug: 'componentes-react',
    name: 'Componentes React',
  },
  {
    slug: 'componentes-com-estado',
    name: 'Componentes com Estado',
  },
];

class Content extends React.Component {
  render() {
    localStorage.setItem('token', 'userToken');
    return (
      <main className="content">
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/calendar" component={ Calendar } />
          <Route path="/live-lectures" component={ LiveLectures } />
          <Route path="/trybe-talks" component={ TrybeTalks } />
          <Route exact path="/solutions">
            <Solutions solutions={ allSolutions } />
          </Route>
          <Route
            path="/solutions/:slug"
            render={ (propsRoute) => (
              <Solution { ...propsRoute } solutions={ allSolutions } />
            ) }
          />
          <Route path="*" component={ NotFound } />
        </Switch>
      </main>
    );
  }
}

export default Content;
