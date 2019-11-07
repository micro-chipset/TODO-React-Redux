import * as React from "react";
import {connect} from 'react-redux'
import {toggleAdd} from '../../actions'

import "./item-add-form.css";

const ItemAddForm = ({dispatch}) => {
    let input;

    const onSubmitNewItem = (event: React.SyntheticEvent<EventTarget>) => {
        event.preventDefault();

        if (!input.value.trim()) return;

        dispatch(toggleAdd(input.value));
        input.value = '';
    };

    return (
        <form className="item-add-form"
              onSubmit={onSubmitNewItem}>

            <div className="form-field">
                <input type='text'
                       className='form-add'
                       placeholder="New list item todo"
                       ref={node => input = node}
                />
            </div>

            <button className="button">
                Add Item
            </button>

        </form>
    );
};

export default connect()(ItemAddForm);