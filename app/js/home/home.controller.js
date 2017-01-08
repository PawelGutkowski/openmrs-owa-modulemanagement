class HomeController {
  constructor($rootScope, $state, openmrsRest, openmrsNotification) {
      "ngInject"
      var vm = this;

      $rootScope.links = {};
      $rootScope.links["Modules Management"] = "";

      vm.performingAction = false;

      vm.createStatus = createStatus;
      vm.createStatusStyle = createStatusStyle;
      vm.stopModule = stopModule;
      vm.startModule = startModule;

      vm.startAll = startAll;

      function stopModule(uuid){
        performModuleAction("stop", [uuid], createSuccessHandler("Module stopped"), createErrorHandler())
      }

      function startModule(uuid){
          performModuleAction("start", [uuid], createSuccessHandler("Module started"), createErrorHandler())
      }

      function startAll(){
          openmrsRest.create("moduleaction", {
              action: "start",
              allModules: "true"
          }).then(createSuccessHandler("All modules started"), createErrorHandler());
          vm.performingAction = true
      }

      function performModuleAction(action, modules, successHandler, errorHandler){
        openmrsRest.create("moduleaction", {
            action: action,
            modules: modules
        }).then(successHandler, errorHandler);
        vm.performingAction = true
      }

      function createSuccessHandler(message){
          return (success)=>{
              $state.reload();
              openmrsNotification.success(message);
          }
      }

      function createErrorHandler() {
          return (exception)=> {
              vm.performingAction = false;
              openmrsNotification.error(exception.data.error.message);
          }
      }

      function createStatus(started){
          if(started){
              return "RUNNING"
          } else {
              return "STOPPED"
          }
      }

      function createStatusStyle(started){
          if(started){
              return "module-status running"
          } else {
              return "module-status stopped"
          }
      }

  }
}

export default HomeController;
