# Rick & Morty API frontend

A simple practice project to get familiar with TypeScript and MUI.

> This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Deploying to GitHub Pages

To publish a React build to GitHub Pages, you can follow these steps:

1. Install the gh-pages package by running the following command in your terminal:

```
npm install gh-pages --save-dev
```

In your ``package.json`` file, add the following lines to the ``"scripts"`` section:

```
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

At the root level of your add:

```
"homepage": ""homepage": "https://myusername.github.io/myreponame",
```

Now it's time to **commit** and **push** the changes.


## Deploying to GitHub Pages

To build your React app

```
npm run predeploy
```

That will build your application, spitting out the ``build`` folder

To deploy it to GitHub Pages, run the following command in your terminal:

```
npm run deploy
```

That pushes the ``build`` folder to the ``gh-pages`` branch in your GitHub repository. After a few minutes, your React app should be live on GitHub Pages at [https://<username>.github.io/<repository-name>/](https://lifebalance.github.io/rick_and_morty/).

## Issues
If after deploying your page, all you get is a **404** error, that may be due to client side routing ([read here](https://create-react-app.dev/docs/deployment/#notes-on-client-side-routing)). What I did was to make use of the [HashRouter](https://reactrouter.com/en/main/router-components/hash-router).
