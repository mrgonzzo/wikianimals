(function (angular) {

    angular.module('app').component('compAnimalcard', {
        // otra opción es poner aquí directamente el html asignándoselo a template:
        templateUrl: 'app/components/mainview/cardanimamls/cardanimamls.html',
        // en controller definimos la función que escribimos abajo
/*        controller: ['$log', 'animalFactory', controladorCompCardAnimals],
        // declaramos un alias para no tener que usar $ctrl.
        controllerAs: 'compCardanimals',
        bindings: {
allanimals: '<'
}*/    });

    
})(angular);