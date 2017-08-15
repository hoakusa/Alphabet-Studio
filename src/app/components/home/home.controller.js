import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './home.routes';

import AppService from '../../app.service';

class HomeController {
  constructor(AppService) {
    AppService.setTitle('Home |');
    this.blogs = [
      {name: "A journey to Paris", category: "Culture", img: "/img/b1.jpg", url: "#"},
      {name: "Should I work remotely?", category: "Job", img: "/img/b2.jpg", url: "#"},
      {name: "Wireframe is really needed?", category: "Design", img: "/img/b3.jpg", url: "#"}
    ];
    
  }

  gotoSection(target) {
    $('html, body').animate({
    scrollTop: $('#' + target).offset().top}, 1000);
  }
}

HomeController.$inject = ['AppService'];

export default angular.module('app.home', [uirouter, AppService])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;