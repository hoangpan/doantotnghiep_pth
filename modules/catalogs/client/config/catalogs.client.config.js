(function () {
  'use strict';

  angular
    .module('catalogs')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(menuService) {
    // Set top bar menu items
    menuService.addMenuItem('topbar', {
      title: 'Catalogs',
      state: 'catalogs',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    menuService.addSubMenuItem('topbar', 'catalogs', {
      title: 'List Catalogs',
      state: 'catalogs.list'
    });

    // Add the dropdown create item
    menuService.addSubMenuItem('topbar', 'catalogs', {
      title: 'Create Catalog',
      state: 'catalogs.create',
      roles: ['user']
    });
  }
}());
