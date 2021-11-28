import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './features/about';
import Blog from './features/blog';
import Home from './features/home';
import Header from './header';
import Theme from './Theme';

const App = () => {
    return (
        <Theme>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/home">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/blog">
                        <Blog />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </Theme>
    );
};

export default App;
