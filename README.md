# React-Strictify

[![npm version](https://img.shields.io/npm/v/react-strictify.svg)](https://www.npmjs.com/package/react-strictify)
[![NPM License](https://img.shields.io/npm/l/react-strictify.svg)](https://www.npmjs.com/package/react-strictify)
[![NPM Downloads](https://img.shields.io/npm/dm/react-strictify.svg)](https://www.npmjs.com/package/react-strictify)

A collection of strict utilities for [React](https://react.dev) to enforce best practices and improve code quality.

## Installation

You can install this package using npm:

```bash
npm i react-strictify
```

## API

`useStrictContext(Context)` -  strict version of useContext that throw an error in case of context provider value equals null or undefined.

**Parameters**:

`Context` - React Context created with `createStrictContext`.

**Returns**: `Context.Provider` value.

## Contributing
Contributions are welcome!

Please open an issue or submit a pull request.

## License
MIT