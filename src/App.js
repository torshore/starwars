import React from 'react';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { getCharacters } from './actions/actions.js';
import PageLayout from './PageLayout.jsx';
import Table from './Table.jsx';

import './App.css';

function App() {
    const characters = useSelector(state =>  state.characters);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCharacters());
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
