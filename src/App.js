import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PageLayout from './PageLayout.jsx';
import Table from './Table.jsx';

import './App.css';

function App() {
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
