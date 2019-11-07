import * as React from "react";
import {useLocation} from "react-router-dom";

const NoMatch = () => {
    let location = useLocation();
    return (<div>
            <p>404 not found. </p>
            <p>The requested URL <code>{location.pathname}</code> was not found on this server.</p>
        </div>
    )
};

export default NoMatch;