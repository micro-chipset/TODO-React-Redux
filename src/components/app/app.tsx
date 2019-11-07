import * as React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import ItemAddForm from "../item-add-form/item-add-form";
import Help from "../help/help"
import TodoListItemEdit from "../todo-list-item-edit/todo-list-item-edit";
import AppMenu from "../app-menu/app-menu";
import NoMatch from "../no-match/no-match";
import VisibleTodoList from "../../containers/visible-todo-list/visible-todo-list";

import "./app.css";
import ItemListApi from "../item-list-api/item-list-api";

const App = () => {

    return (
        <Router>
            <div className="app-wrapper">
                <AppMenu />

                <Switch>
                    <Route exact path="/">
                        <AppHeader />
                        <div className="top-panel">
                            <SearchPanel />
                            <ItemStatusFilter />
                        </div>
                        <VisibleTodoList />
                        <ItemAddForm />
                    </Route>

                    <Route exact path="/help">
                        <Help />
                    </Route>

                    <Route exact path="/book">
                        <ItemListApi />
                    </Route>

                    <Route path="/edit/:id" render={(props) => <TodoListItemEdit {...props} />} />

                    <Route path="*">
                        <NoMatch />
                    </Route>

                </Switch>
            </div>
        </Router>
    );
};

export default App
