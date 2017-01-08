class HomeController {
  constructor($rootScope) {
      "ngInject"
      var vm = this;

      $rootScope.links = {};
      $rootScope.links["Modules Management"] = "";
      console.log(vm);

      vm.createStatus = createStatus;
      vm.createStatusStyle = createStatusStyle;

      function createStatus(started){
          if(started){
              return "RUNNING"
          } else {
              return "STOPPED"
          }
      }

      function createStatusStyle(started){
          if(started){
              return "status-running"
          } else {
              return "status-stopped"
          }
      }

  }
}

export default HomeController;
