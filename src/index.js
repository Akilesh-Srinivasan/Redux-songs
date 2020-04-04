import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import App from './components/App';
import reducers from './reducers';


ReactDOM.render(
    // provider helps in connecting reac and redux
    <Provider store={createStore(reducers)}>
        <App/>
    </Provider>
    , document.getElementById('root')
);
