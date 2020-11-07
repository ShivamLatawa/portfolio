import * as React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
    colors: {
        lightGrey: '#CCCCCC',
        black: '#000000',
        white: '#ffffff',
        darkGrey:'#ababab',
    },
};

interface IProps {
    children: JSX.Element;
}

const Theme = (props: IProps) => <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;

export default Theme;
