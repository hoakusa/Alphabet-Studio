import angular from 'angular';

class AppService {
  constructor() {
    this.title = 'Alphabet Creative Studio';
  }

  getTitle() {
    return this.title;
  }

  setTitle(str) {
    this.title = str + ' Alphabet Creative Studio';
  }
}

export default angular.module('services.app', [])
  .service('AppService', AppService)
  .name;

