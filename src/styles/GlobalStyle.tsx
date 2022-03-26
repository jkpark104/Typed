import React from 'react';
import { Global, css } from '@emotion/react';

function GlobalStyle() {
  return (
    <Global
      styles={css`
        @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);
        :root {
          --toastify-color-light: #fff;
          --toastify-color-dark: #121212;
          --toastify-color-info: #3498db;
          --toastify-color-success: #07bc0c;
          --toastify-color-warning: #f1c40f;
          --toastify-color-error: #e74c3c;
          --toastify-color-transparent: rgba(255, 255, 255, 0.7);
          --toastify-icon-color-info: var(--toastify-color-info);
          --toastify-icon-color-success: var(--toastify-color-success);
          --toastify-icon-color-warning: var(--toastify-color-warning);
          --toastify-icon-color-error: var(--toastify-color-error);
          --toastify-toast-width: 320px;
          --toastify-toast-background: #fff;
          --toastify-toast-min-height: 64px;
          --toastify-toast-max-height: 800px;
          --toastify-font-family: sans-serif;
          --toastify-z-index: 9999;
          --toastify-text-color-light: #757575;
          --toastify-text-color-dark: #fff;
          --toastify-text-color-info: #fff;
          --toastify-text-color-success: #fff;
          --toastify-text-color-warning: #fff;
          --toastify-text-color-error: #fff;
          --toastify-spinner-color: #616161;
          --toastify-spinner-color-empty-area: #e0e0e0;
          --toastify-color-progress-light: linear-gradient(
            to right,
            #4cd964,
            #5ac8fa,
            #007aff,
            #34aadc,
            #5856d6,
            #ff2d55
          );

          --toastify-color-progress-info: var(--toastify-color-info);
          --toastify-color-progress-success: var(--toastify-color-success);
          --toastify-color-progress-warning: var(--toastify-color-warning);
          --toastify-color-progress-error: var(--toastify-color-error);
        }

        * {
          font-family: 'Spoqa Han Sans Neo', 'sans-serif';
        }

        body {
          margin: 0;
        }

        ul {
          margin: 0;
          padding: 0;
        }

        li {
          list-style: none;
        }

        h2,
        h3 {
          font-weight: 400;
          font-size: 14px;
          margin: 0;
        }

        button,
        a {
          cursor: pointer;
          font-size: initial;
          outline: 0;
          border-style: none;
          box-sizing: border-box;
          &:hover,
          &:focus-visible {
            box-shadow: 0 0 0 2px #38a5e1;
          }
        }

        button:active {
          background-color: #eee;
        }

        input {
          outline: 0;
          border: 1px solid #38a5e1;
          border-radius: 3px;
          box-sizing: border-box;
          &:hover,
          &:focus-visible {
            box-shadow: 0 0 0 2px #38a5e1;
          }
        }
      `}
    />
  );
}

export default GlobalStyle;
