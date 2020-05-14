## Main Features

- This application created with "Create react app" and "Redux".
- Used Redux Thunk and Redux logger as middlewares to facilitate async API calls and monitor state change.
- Used Axios with interceptors for API calls and intercept it to show loader and error messages.
- Wrapped all components with ErrorBoundary to catch any errors.
- Lazyload react routing components.
- Unit Testing and Regression testing using Jest, enzyme.
- Simple component style using styled-components.
- Used react hooks in all components except ErrorBoundary.

## API URL

API URL by default is "http://localhost:3000", if you run backend in different port, you can change it on `utils/axios/index.js`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
Test done with Jest and Enzyme

### `npm run build`

Builds the app for production to the `build` folder.
