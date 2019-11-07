import * as React from "react";

const FilterButton = ({active, children, onClick}) => {

    const classBtn: string = active ? "button-active" : "button-secondary";

    return (
        <button
            className={`button ${classBtn}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
};

export default FilterButton
