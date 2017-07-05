import React from 'react';
import ReactDOM from 'react-dom';
import App from './modules/main/js/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import registerServiceWorker from './registerServiceWorker';
import './css/index.css';

injectTapEventPlugin();

ReactDOM.render(
<MuiThemeProvider>
  <App />
</MuiThemeProvider>
  ,document.getElementById('root'));
registerServiceWorker();
