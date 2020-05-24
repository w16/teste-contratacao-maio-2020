import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    *:focus{
        outline: 0;
    }

    html, body, #root {
        height: 100%
    } 

    body{
        background: #ffffff;
        -webkit-font-smoothing: antialiased !important;
    }

    body, input, button {
        font: 14px 'Roboto', sans-serif;
    }

    button {
        cursor: pointer;
    }
`