import * as React from 'react';
import PropsTypes from 'prop-types';
import MainScreen from '../main-screen/main-screen';

const App = ({offersCount}) => <MainScreen offersCount={offersCount} />;

App.propTypes = {
  offersCount: PropsTypes.number.isRequired,
};

export default App;
