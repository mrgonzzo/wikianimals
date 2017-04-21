(function (angular) {

    angular.module('app').component('compAnimalcard', {
        // otra opción es poner aquí directamente el html asignándoselo a template:
        templateUrl: 'app/components/mainview/cardanimals/cardanimals.html',
        // en controller definimos la función que escribimos abajo
        controller: ['$log', controladorCompCardAnimals],
        // declaramos un alias para no tener que usar $ctrl.
        controllerAs: 'compCardanimals',
        bindings: {
            itemAnimal: '<'
        }
    });
    function controladorCompCardAnimals($log, animalFactory) {
        var vm = this;
        //var imgpath = itemAnima.
        
    }

})(angular);