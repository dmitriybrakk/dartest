import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { GlobalStyle } from './styles';
import Converter from './components/Converter';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyle />
                <Converter />
            </>
        </ThemeProvider>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
