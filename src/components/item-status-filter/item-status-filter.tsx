import * as React from "react";
import {VisibilityFilters} from "../../actions";
import FilterLink from "../../containers/filter-link/filter-link";

import "./item-status-filter.css";

const ItemStatusFilter = () => {
    return (
        <div className='button-group'>
            <FilterLink filter={VisibilityFilters.SHOW_ALL}>
                All
            </FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
                Active
            </FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_DONE}>
                Completed
            </FilterLink>
        </div>
    )
};

export default ItemStatusFilter
