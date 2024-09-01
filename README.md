# React Strictify

!npm version
!License: MIT

A collection of strict utilities for React to enforce best practices and improve code quality.

## Installation

You can install this package using npm:

```bash
npm install react-strictify
```

## API

`useStrictContext(Context)`:

A strict version of useContext that throw an error in case of context provider value equals null or undefined.

Parameters:
`Context`: The context that you’ve previously created with `createStrictContext`.

Returns: `Context.Provider` value.

## Contributing
Contributions are welcome!

Please open an issue or submit a pull request.

## License
MIT License.