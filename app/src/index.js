import React from 'react';
import { render } from 'react-snapshot';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

injectTapEventPlugin();
render(React.createElement(App), document.getElementById('root'));
registerServiceWorker();
