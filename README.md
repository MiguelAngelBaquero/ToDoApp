# Todo App

This app is splendid for practicing your React.js skills.
You can create, search, edit, and delete tasks (_CRUD_ operations) exploiting the browser's _localStorage_.
Moreover, the app works for desktop and most mobile browsers.

## Run Locally

Clone the project

```bash
  git clone https://github.com/MiguelAngelBaquero/ToDoApp.git
```

Go to the project directory

```bash
  cd ToDoApp
```

Install dependencies

```bash
  npm i
```

Start the app

```bash
  npm start
```

## Tech Stack

**Client:** React.js (Javascript, HTML & CSS).

**Server:** N/A

App running on GitHub Pages and Create React App.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Dependencies

- [React v18](https://www.npmjs.com/package/react)
- [React DOM v18](https://www.npmjs.com/package/react-dom)
- [React Icons v4.10.1](https://www.npmjs.com/package/react-icons)
- [React Scripts v5.0.1](https://www.npmjs.com/package/react-scripts)
- [Web Vitals v2.1.4](https://www.npmjs.com/package/web-vitals)

### Dev Dependencies

- [GitHub Pages v6](https://www.npmjs.com/package/gh-pages)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app locally on your browser.
The browser should start automatically.
If the browser doesn't start, go to [http://localhost:3000](http://localhost:3000) on your browser.

The page will reload whenever you save any changes.
You might notice some lint warnings on your console.

### `npm run build`

This script builds and gets the app ready for production deployment and optimizes the build for the best performance. Navigate to the `build` folder.

Visit [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

> **Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can execute the script `eject` at any moment. This command will remove the single-build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, others) right into your project and granting control over them. All commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point, you're on your own.

You don't ever have to use the `eject` script. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't come in handy if you couldn't customize it when you are ready for it.

### `deploy`

Once the **build** is ready to deploy, use this script to push your changes into a new Git branch and host the app in GitHub Pages. **Commit** and **push** all your changes before executing the `npm run build` and `deploy` scripts.

## GitHub Pages

Publish files to a `gh-pages` branch on GitHub (or any other branch).

### Installation

```bash
npm install gh-pages --save-dev
```

> **Note: This module requires Git >= 1.9 and Node > 14.**

Add these lines in your _package.json_ file:

```json
"homepage": "https://[yourGitHubUserName].github.io/ToDoApp",
  "devDependencies": {
    "gh-pages": "^6.0.0"
  }
```

Replace `[yourGitHubUserName]` with your current GitHub username.
Remove the brackets `[ ]` from the code. Otherwise, you'll encounter some issues while deploying the app.

---

## Authors

- [@MiguelAngelBaquero](https://github.com/MiguelAngelBaquero)
- [@juandc](https://github.com/juandc)
- [Platzi](https://platzi.com/)

## Contributing

Contributions are always welcome!

If you have any suggestions or issues about the app, please let me know.
