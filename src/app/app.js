import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './app.config';

// IMPORT STYLESHEETS
import '../assets/style/app.scss';

// IMPORT COMPONENTS
import Home from './components/home/home.controller';

import AppService from './app.service';

class AppController {
  constructor(AppService) {
    this.App = AppService;
  }
}

AppController.$inject = ['AppService'];

export default angular.module('app', [uirouter, Home, AppService])
  .controller('AppController', AppController)
  .config(routing);