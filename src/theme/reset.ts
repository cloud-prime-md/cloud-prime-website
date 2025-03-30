import { css } from 'styled-components';

export const ResetStyles = css`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin and padding */
  html,
  body,
  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* Remove list styles (bullets/numbers) */
  ol,
  ul {
    list-style: none;
  }

  /* For images to not be able to exceed their container */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Remove underline from links by default */
  a {
    text-decoration: none;
    color: inherit;
  }

  /* Improve text readability */
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  /* Remove form element defaults */
  button,
  input,
  select,
  textarea {
    background-color: transparent;
    border-radius: 0;
    color: inherit;
    font: inherit;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
  }

  /* Make buttons and inputs behave consistently */
  button,
  input[type='button'],
  input[type='reset'],
  input[type='submit'] {
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
  }

  /* Remove default table spacing */
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* Remove default quote styling */
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  /* Prevent sub and sup from affecting line height */
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }

  /* Remove focus outline for non-keyboard users */
  [data-js-focus-visible] :focus:not([data-focus-visible-added]) {
    outline: none;
  }
`;
