import angular from 'angular';
import uiRouter from 'angular-ui-router'
import { DefaultState, DefaultCtrl } from './default'
import { GridServiceName, GridState, GridCtrl, GridService } from './grid'

import '../style/app.css'

let app = () => {
  return {
    template: require('./app.html'),
    controllerAs: 'app'
  }
};

const MODULE_NAME = 'app'

angular.module(MODULE_NAME, ['ui.router'])
  .directive('app', app)
  .controller('DefaultCtrl', DefaultCtrl)
  .controller('GridCtrl', GridCtrl)
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
