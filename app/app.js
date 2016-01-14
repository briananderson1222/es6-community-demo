import _ from 'file?name=[name].[ext]!./index.html'; // This is just because we aren't using gulp or grunt to copy to the output directory
import angular from 'angular';

import ExampleModule from './example';

export default angular.module("exampleApp", [ExampleModule.name]);