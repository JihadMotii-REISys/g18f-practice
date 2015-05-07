'use strict';

describe('Controller: OpportunityCtrl', function () {

  // load the controller's module
  beforeEach(module('frontendApp'));

  var OpportunityCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OpportunityCtrl = $controller('OpportunityCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
