## Notes

Check the preview of this project on [netlify](https://gifted-curie-e0a6fe.netlify.com/).

Written one complex test case for App component.

## Task

You will be coding a simple “Battle Simulator” for an RPG. You should spend around 1-2 hours completing this.
The simulator should be developed in JavaScript or TypeScript using React. It is preferred but not required to use reducer-based state management (e.g useReducer, Redux). You may use any other libraries or UI frameworks you wish so long as you have implemented the core requirements yourself.
It is up to you how to present things as long as it is clear; any additional visual polish or animation gets bonus points and is an opportunity to demonstrate your skill in different areas, but are completely optional as long as the specification is satisfied. You can get creative with your solution – we think this is a great quality to have in teammates!
At the in-person interview we will be asking some questions about your solution as well as requiring you to make some additional changes to the code.
Your solution can be provided as a zip/rar file, or as a link to a github repository. Please ensure to not include the node_modules folder as these contain thousands of files and are very slow to unzip.

### THE SPECIFICATION

In this game you (The Player) are fighting some kind of monster (your choice). Both characters begin with 100 health points. The two health values must be represented somehow on the screen.

The UI consists of an “Attack!” button. When you click this, the following sequence should happen:
1. Two dice are rolled for The Player
2. Two dice are rolled for The Monster. All dice are 6-sided. For each roll pick a random number between 1 and 6. The results of all 4 rolls should be displayed.
3. Whoever scores the lowest total will take damage and lose health points. The amount of health they lose will be the difference between the two rolls. So: if the player rolls a 2 and a 3, and the monster rolls a 4 and a 5, the player will take (4+5)-(3+2) = 4 damage.
4. Now the player can attack again when they like

If The Player loses all their health the game stops and “Game Over” is displayed in large red text.

If the monster loses all their health the game ends and “You Win” is displayed in large green text.

We have not specified exactly how things should be presented. You should try to represent this sequence of events in such a way that the player can easily understand what is happening. We have provided a wireframe as a guide to how the screen might look, but if you have a better idea then go for it!

This is a developer position so we are not judging on graphic design ability (although it is considered a bonus), but we are very interested in seeing your ability with CSS and HTML.

## React APP

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
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

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

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
