import * as React from "react";
import {render} from "react-dom";
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './reducers'
import App from "./components/app/app";

import "./fonts/fontawesome-5.11.2/css/all.css";

const store = createStore(rootReducer);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
