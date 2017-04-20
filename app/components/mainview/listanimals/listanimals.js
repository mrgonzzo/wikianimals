(function (angular) {

    angular.module('app').component('compAnimallist', {
        // otra opción es poner aquí directamente el html asignándoselo a template:
        templateUrl: 'app/components/mainview/listanimals/listanimals.html',
        // en controller definimos la función que escribimos abajo
        controller: ['$log', 'animalFactory', controladorCompListAnimals],
        // declaramos un alias para no tener que usar $ctrl.
        controllerAs: 'compListanimals',
        bindings: {
            allanimals: '<'
        }
    });
    function controladorCompListAnimals($log, animalFactory) {
        var vm = this;
        vm.allanimals = animalFactory.getAllAnimals();

        vm.$onInit = function () {
            vm.allanimals = animalFactory.getAllAnimals();
            $log.log(vm.allanimals);
            $log.log(vm.allanimals[0].name);
        }
    }
})(angular)