class ModuleViewController {
  constructor($rootScope) {
      "ngInject"
      var vm = this;
      console.log(this)

      $rootScope.links = {};
      $rootScope.links["Modules Management"] = "";
      $rootScope.links[ vm.module.name ] = "module/"+ vm.module.uuid;
  }
}

export default ModuleViewController;
