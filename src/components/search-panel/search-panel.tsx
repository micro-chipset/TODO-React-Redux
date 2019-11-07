import * as React from "react";
import {connect} from 'react-redux'
import {setVisibilitySearch} from "../../actions";
import {bindActionCreators} from 'redux';

import "./search-panel.css";

const SearchPanel = ({value, setVisibilitySearch}) => {

    return (
        <input
            className="search-input"
            placeholder="search"
            onChange={(e) => setVisibilitySearch(e.target.value)}
            value={value}
        />
    )
};

const mapStateToProps = state => ({
    value: state.visibilitySearch
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators({setVisibilitySearch}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel)
