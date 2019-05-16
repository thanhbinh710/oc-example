import styles from './css/styles.css';

export default ({ name, test, dynamicValue, staticPath }) =>
  `<div class=${styles.awesome}>
    Hello ${name}!
    <img src="${staticPath}img/logo.png" />
    <div class=${styles.test}>${test}</div>
    <div class=${styles.test}>${dynamicValue}</div>
  </div>`;
