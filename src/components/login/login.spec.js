import angular from 'angular'
import component from './login.component'

describe('Hello Directive', function () {
  let $scope;
  let $element;

  beforeEach(() => {
    angular.module('test', [])
      .component('loginPage', component);
  });
  beforeEach(angular.mock.module('test'));

  beforeEach(angular.mock.inject($injector => {
    $scope = $injector.get('$rootScope').$new(true);
    $element = $injector.get('$compile')(angular.element('<login-page></login-page>'))($scope);
    $scope.$digest();
  }));

  it('should insert `test` into element', () => {
    expect($element.text()).toMatch('Yay! You at login page!');
  });
});
