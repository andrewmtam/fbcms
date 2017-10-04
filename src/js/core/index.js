import React from 'react';

import {
    Provider,
    connect
} from 'react-redux';

import store from '~/core/redux/store';

import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List, {ListItem} from 'material-ui/List';

import Create from '~/core/templates/Create';
import create from '~/core/connectors/create';

import Edit from '~/core/templates/Edit';
import edit from '~/core/connectors/edit';

import Homepage from '~/core/templates/Homepage';
import homepage from '~/core/connectors/homepage';

import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom';

const MainContent = () => ([
    <Route exact path='/create' component={create(Create)}/>,
    <Route exact path='/edit/:template/:id' component={edit(Edit)}/>,
    <Route exact path='/' component={homepage(Homepage)}/>
]);

const styles = {
    mainContainer: {
        display: 'flex'
    },
    appBar: {
        display: 'flex',
        position: 'relative'
    },
    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1
    }
}

const App = () => (
    <Provider store={store}>
        <Router>
            <div style={styles.mainContainer}>
                {/*
                <Drawer
                    type='permanent'
                >
                    <List>
                        <ListItem>
                            <Link to='edit'>
                                Edit
                            </Link>
                        </ListItem>
                    </List>
                </Drawer>
                */}
                <div style={styles.contentContainer}>
                    <AppBar style={styles.appBar}>
                        <Toolbar>
                            Name
                        </Toolbar>
                    </AppBar>
                    <MainContent/>
                </div>
            </div>
        </Router>
    </Provider>
);

export default App;
