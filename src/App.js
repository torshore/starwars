import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { getCharacters, getShips } from './actions/actions.js';
import PageLayout from './PageLayout.jsx';
import Table from './Table.jsx';

import './App.css';

function App() {
    const dispatch = useDispatch();
    const characters = useSelector(state =>  state.characters);
    const ships = useSelector(state => state.ships);
    const isFetching = useSelector(state => state.isFetching);

    useEffect(() => {
        dispatch(getCharacters());
        dispatch(getShips());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <div className="app">
        <Router>
            <PageLayout>
                <Switch>
                    <Route exact path="/" render={() =>
                        <Table />
                    } /> 
                </Switch>
            </PageLayout>
        </Router>
    </div>;
}

export default App;
