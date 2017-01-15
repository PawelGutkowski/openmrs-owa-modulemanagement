function ModuleViewController(module, $rootScope){
    "ngInject"
    var vm = this;
    vm.module = module;

    console.log(vm.module)

    $rootScope.links = {};
    $rootScope.links["Modules Management"] = "";
    $rootScope.links[ vm.module.name ] = "module/"+ vm.module.uuid;
}

export default ModuleViewController;
