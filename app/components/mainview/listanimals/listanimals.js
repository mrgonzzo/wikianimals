(function (angular) {

    angular.module('app').component('compAlimallist', {
        // otra opción es poner aquí directamente el html asignándoselo a template:
        templateUrl: 'app/components/listanimals/listanimals.html',
        // en controller definimos la función que escribimos abajo
      //  controller:['$log', 'animalFactory', controladorCompListAnimals],
        // declaramos un alias para no tener que usar $ctrl.
       // controllerAs:'compListanimals'
    });
  /* function controladorCompListAnimals() {
        var vm = this;

    }*/
})(angular)