import React from 'react';
import ReactDOM from 'react-dom';
import LOGO from '../static/Logo.jpg';

import DataChat from './components/DataChat';

const Index = () => {
  return <div className='container'><h1>YassineAMG</h1>
  	<DataChat />
  </div>;
};
ReactDOM.render(<Index />, document.getElementById('root'));