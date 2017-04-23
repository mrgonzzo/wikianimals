(function(angular) {

  angular.module('app').component('compButtonus', {
    // otra opción es poner aquí directamente el html asignándoselo a template:
    templateUrl:  'app/components/aboutus/buttonus/buttonus.html',
    // en controller definimos la función que escribimos abajo
   controller: controladorCompButtonus,
    // declaramos un alias para no tener que usar $ctrl.
   controllerAs: 'compButtonus'
})
function controladorCompButtonus (){
  var vm=this;
  
}
})(angular)