'use strict';

/**
 * @ngdoc overview
 * @name frontendApp
 * @description
 * # frontendApp
 *
 * Main module of the application.
 */
angular
  .module('frontendApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ])
  .config(function ($routeProvider, $mdThemingProvider, $mdIconProvider) {

    $mdIconProvider
        .defaultIconSet("svg/avatars.svg", 128)
        .icon("menu"       , "svg/menu.svg"        , 24)
        .icon("share"      , "svg/share.svg"       , 24)
        .icon("google_plus", "svg/google_plus.svg" , 512)
        .icon("hangouts"   , "svg/hangouts.svg"    , 512)
        .icon("twitter"    , "svg/twitter.svg"     , 512)
        .icon("phone"      , "svg/phone.svg"       , 512);

//    $mdThemingProvider.theme('default')
//        .primaryPalette('brown')
//        .accentPalette('red');

    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
});
