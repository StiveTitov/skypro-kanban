import { createGlobalStyle, ThemeProvider } from 'styled-components';

export const lightTheme = {
    body: '#FFF',
    text: '#363537',
    // Другие стили светлой темы
  };
  
  export const darkTheme = {
    body: '#363537',
    text: '#FAFAFA',
    // Другие стили темной темы
  };

  export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    transition: all 0.25s linear; // Плавный переход цвета при смене темы
  }
`;