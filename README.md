# Overview
This is a react app which uses canvas to render 32,768 unique colors. There are two algorighms to generate the color occurances in the image, random and linear, sorted by luminescence. It has functionalities to Scale and change Width of the image. Also, you can hover on to the image pixels to see RGB values.
 
It had functional components to start with. However, there were unexpected re-renders happening. To address that, I wrapped it with useCallback at first and specified dependencies. Still it did not solve the problem. Hence, I changed it to class component for lifecycle clarity and broke down the components which solved the performance issue and unwanted re-renders.

I have written unit test for utilities functions. I have kept the file structure simple as this is a small project.

Additional Ideas for algoriths could be:
- Arrange the colors by hue
- Arrange the colors by saturation
- Arrange the colors by lightness (done)


# Limitations
There is a known bug when you try to see the rendered color value. When you leave an edge of the image, value showed is `rgb(0,0,0), couldn't figure out why.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
