import * as React from 'react';
import Home from './features/home';
import Header from './header';
import Theme from './Theme';

const App = () => {
    return (
        <Theme>
            <Header />
            <Home />
        </Theme>
    );
};

export default App;
