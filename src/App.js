import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { getCharacters, getShips } from './actions/actions.js';
import CharacterViewPage from './CharacterViewPage.jsx';
import PageLayout from './PageLayout.jsx';
import Spinner from './Spinner.jsx';
import Table from './Table.jsx';

import './App.css';

function App() {
    const dispatch = useDispatch();
    const isFetching = useSelector(state => state.isFetching);

    useEffect(() => {
        dispatch(getCharacters());
        dispatch(getShips());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <div className="app">
        <Router>
            <PageLayout>
                <Switch>
                    <Route exact path="/" render={({ history }) =>
                        isFetching
                            ? <Spinner />
                            : <Table
                                history={history}
                            />
                    } />

                    <Route path="/characters/:name?" render={({ match }) =>
                        <CharacterViewPage
                            characterName={match && match.params.name
                                ? decodeURIComponent(match.params.name)
                                : null
                            }
                        />
                    } />
                </Switch>
            </PageLayout>
        </Router>
    </div>;
}

export default App;
