import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import useStyles from './index.style';
import MainPage from '../MainPage';

const App = (): React.ReactElement => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
        <Switch>
          <Route path="*">
            <MainPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
