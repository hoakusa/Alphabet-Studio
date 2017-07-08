# Over view

[Visit site](http://alphabetstudio.hoakusa.com) or [Codepen](https://codepen.io/hoakusa/full/ZKRzZX/).

Alphabet Creative Studio provides website template at the intersection of technology, design, culture, and brand stories. The website exhibits design products made by Alphabet Studio.
Project is built by [Angular 1.x](https://angularjs.org/) using [Webpack 2.x](http://webpack.github.io/). The project code was written in ES6 support with [Babel](https://babeljs.io/).

In landing page:
* List of project images
* Service provide
* Blogs template
* Contact info

## Design

The website was designed by [An Pham](http://hoakusa.com), see full design document and infographic about [project](http://hoakusa.com/works/alphabet-creative-studio) on [Behance](https://www.behance.net/gallery/54391931/Alphabet-Studio).

# Getting Started

## Installing

Firstly, you can download or fork folder then run
```bash
npm install
```
to install all dependencies

## Running the app

After you have installed all dependencies you can now run the app with:
```bash
npm start
```

It will start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. Website will run at `http://localhost:8080`, you can change port number at `webpack.config.js` inside [`/webpack.config.js`](/webpack.config.js).

## Developing

### Build files

* single run: `npm run build`
* build files and watch: `npm start`

### Create new page
1. Add new component `new component` folder with `controller`, `view.html`, `route` and/or `service` (optional).
2. Remember to import `new component` in `app.js`_app main controller.
3. Add content to component output `view.html` and change its apperance.

# License

[MIT](/LICENSE)
