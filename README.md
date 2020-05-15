
## MOST IMPORTANT NOTE

Before running the project, update a variable in file `config/env` file named`REACT_APP_ACCWEATHER_API_KEY`
and assign your API key of ACCWEATHER.

If you encounter any error, delete node_modules from the project and run command `npm install'.

You can view the project using `npm start`.

## PACKAGES USED
Following packages are used:
1. redux, react-redux for connecting and using state in the project using redux state management
2. react-router, react-router-dom for adding routes 
3. react-bootstrap for using bootstrap components
4. axios for making http calls to ACCWEATHER (http://dataservice.accuweather.com/)
5. react-thunk as middleware to add functions in actions creators

## PROJECT CONTENT
The project consist to 2 pages - Home and Favorite
1. Home: There are 2 components in this:
	1.1. SearchLocation: Enter text in the search box, select location of your choice from dropdown
	1.2 WeatherDetails: After choosing location, you'll see current weather data and forecast of next 4 days. You can add that location in FAVORITE.
2. Favorite: You'll find list of all location you marked Favorite on Home page. You can also remove specific location from this list.

Apart from these main pages, the project also has a Modal in case any error occurs using axios call. You can find it in `src/components/others/errorModal.js`

All the store related files - actions and reducers are in folder `src/store`

  
 

## Available Scripts

  

In the project directory, you can run:

  

### `npm start`

  

Runs the app in the development mode.<br  />

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

  

The page will reload if you make edits.<br  />

You will also see any lint errors in the console.

  

### `npm test`

  

Launches the test runner in the interactive watch mode.<br  />

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

  

### `npm run build`

  

Builds the app for production to the `build` folder.<br  />

It correctly bundles React in production mode and optimizes the build for the best performance.

  

The build is minified and the filenames include the hashes.<br  />

Your app is ready to be deployed!

  

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

  

### `npm run eject`

  

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

  

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

  

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

  

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

  

## Learn More

  

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

  

To learn React, check out the [React documentation](https://reactjs.org/).

  

### Code Splitting

  

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

  

### Analyzing the Bundle Size

  

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

  

### Making a Progressive Web App

  

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

  

### Advanced Configuration

  

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

  

### Deployment

  

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

  

### `npm run build` fails to minify

  

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify