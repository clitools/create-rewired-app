# Create Rewired App [<img src="https://jonathantneal.github.io/react-logo.svg" alt="" width="90" height="90" align="right">][Create Rewired App]

[![NPM Version][npm-img]][npm-url]

[Create Rewired App] lets you create React apps with no build configuration,
and with the super-ability to override its webpack configs without ejecting.

## Usage

```bash
npx create-rewired-app my-app
cd my-app
npm start
```

## Differences from Create React App

[Create Rewired App] executes [Create React App] and then installs and
configures [React App Rewired].

This means your scripts are rewired to use `react-app-rewired`.
This means `config-overrides.js` is present and ready to update.

[npm-img]: https://img.shields.io/npm/v/create-rewired-app.svg
[npm-url]: https://www.npmjs.com/package/create-rewired-app

[Create React App]: https://github.com/facebook/create-react-app
[Create Rewired App]: https://github.com/clitools/create-rewired-app
[React App Rewired]: https://github.com/timarney/react-app-rewired
