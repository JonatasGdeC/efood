import { createGlobalStyle } from 'styled-components'

export const cores = {
  rosa: '#E66767',
  branco: '#FFEBD9',
  amarelo: '#FFB930'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

  body{
    font-family: Roboto, sans-serif;
  }

  .container{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
