import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
                    body {
                        margin: 0;
                        font-family: Arial, sans-serif;
                        background-color: #f0f0f0;
                        color: #333;
                    }
h1, h2 {
    color: #444;
}
a {
    text-decoration: none;
    color: #3498db;
}
a:hover {
    text-decoration: underline;
}
button {
    padding: 10px 15px;
    margin: 10px 0;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}
button:hover {
    background-color: #2980b9;
}
`;

export default GlobalStyle;
