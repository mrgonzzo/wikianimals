(function(angular) {

  angular.module('app').component('compFooter', {
    // otra opción es poner aquí directamente el html asignándoselo a template:
    templateUrl:  'app/components/commons/footer/footer.html',
    // en controller definimos la función que escribimos abajo
    controller: ['$state',controladorCompFooter],
    // declaramos un alias para no tener que usar $ctrl.
    controllerAs: 'compFooter'
})
function controladorCompFooter ($state){
  var vm=this;
  vm.goToAboutUs = function (){
    $state.go('aboutus');
  }
}
})(angular)