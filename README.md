# Personal Portfolio Website 
This personal portfolio website is created using React.js. Developed by Aashish Maharjan. 


[Visit Linkedin](https://www.linkedin.com/in/aacismaharjan/)

![Website Screenshot](./Screenshot.png)


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


```
docker build -t react-nginx-app .
docker run -p 3000:80 react-nginx-app
```


## Paused 3D features

The homepage previously included an interactive copper chess knight (the 3D horse), and `/character-preview` displayed a supplied character model. Both are temporarily disabled; the old preview URL now redirects home.

Viewer source remains in `src/components/ChessKnight*`, `src/components/chess/`, `src/components/character/` and `src/pages/CharacterPreview.jsx`. Models, fallback images and feature styles are preserved in [`archive/3d/`](archive/3d/), outside the production build. Three.js remains installed for the original model generator and retained component tests, but is excluded from browser bundles.

See the [technical plan and restoration steps](docs/plans/2026-11-14-hide-3d-features.md), [knight implementation](docs/plans/2026-11-14-interactive-chess-knight.md), and [character implementation](docs/plans/2026-11-14-replace-character-preview-model.md). Provenance remains in [`docs/assets/`](docs/assets/). The original character generator now writes to the archive, preserving the zero-paid-generation constraint.

After `npm run build`, run `npm run verify:disabled-3d` to confirm that every emitted JavaScript chunk excludes these features and Three.js, and the build contains no models, feature fallback images or dedicated styles. This verification requires the default production source maps.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
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
