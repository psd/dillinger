
'use strict';

module.exports =
  angular
  .module('diDocuments.sheet', [])
  .factory('Sheet', function() {

  return function(sheetData) {

    angular.extend(this, {
      id: new Date().getTime(),
      title: '2015-1227.md',
      body: require('raw!../../../store/legislation/uksi-2015-1227.md')
    });

    return angular.extend(this, sheetData);
  };

});
