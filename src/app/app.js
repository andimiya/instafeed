import angular from 'angular';
import uiRouter from 'angular-ui-router'
import { DefaultState, Default Ctrl } from './default'
import { GridServiceName, GridState, GridCtrl, GridService } from './grid'

import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
  .directive('app', app)
  .controller('DefaultCtrl', DefaultCtrl);
  .controller('GridCtrl', GridCtrl);
  .service(GridServiceName, GridService)
  .config(($stateProvider) => {
    $stateProvider
       .state(DefaultState.name, DefaultState)
       .state(GridState.name, GridState)
  })
  .run(($state) => {
    $state.go('default')
  })

export default MODULE_NAME;
