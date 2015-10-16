angular
  .module('Chatsapp', [
    'angular-meteor',
    'ionic'
  ]);

if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
}
else {
  angular.element(document).ready(onRedy);
}

function onReady() {
  angular.bootstrap(document, ['Chatsapp']);
}