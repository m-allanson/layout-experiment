import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { RouteTransition } from 'react-router-transition';

import Chapter from '../Chapter';
import ScrollToTop from '../ScrollToTop';

const App = () =>
  <Router>
      <Route render={({location, history, match}) => {
        return (
          <RouteTransition
            pathname={location.pathname}
            atEnter={{ translateY: 100 }}
            atLeave={{ translateY: -100 }}
            atActive={{ translateY: 0 }}
            mapStyles={styles => ({ transform: `translateY(${styles.translateY}vh)` })}
          >
            <ScrollToTop>
              <Switch key={location.key} location={location}>
                <Route
                  exact
                  path="/"
                  render={() => <Chapter nextChapter={2} title="Chapter 1" fades={[1, 2, 3]} />}
                />
                <Route
                  path="/1"
                  render={() => <Chapter nextChapter={2} title="Chapter 1" fades={[1, 2, 3]} />}
                />
                <Route
                  path="/2"
                  render={() => <Chapter nextChapter={3} title="Chapter 2" fades={[3, 4, 5]} />}
                />
                <Route
                  path="/3"
                  render={() => <Chapter nextChapter={1} title="Chapter 3" fades={[5, 6, 7]} />}
                />
              </Switch>
            </ScrollToTop>
          </RouteTransition>
        );
      }} />
  </Router>



export default App;


