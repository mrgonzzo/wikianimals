(function (angular) {

    angular.module('app').component('compDetailview', {
        // otra opción es poner aquí directamente el html asignándoselo a template:
        templateUrl: 'app/components/detailview/detailview.html',
        // en controller definimos la función que escribimos abajo
        controller: ['$stateParams', 'animalFactory', controladorCompDetailView],
        // declaramos un alias para no tener que usar $ctrl.
        controllerAs: 'compDetail',
        bindings: {
            itemAnimal: '<'
        }
    })

    function controladorCompDetailView($stateParams, animalFactory) {
        var vm = this;
        var animal = null;
        console.log('idAnimal: '+idAnimal);
        vm.allanimals = animalFactory.getAllAnimals();
        var idAnimal = $stateParams.idAnimal;
        for (var i = 0; i < vm.allanimals.length; i++) {
            if (vm.allanimals[i].id == idAnimal) {
                animal = vm.allanimals[i];
            }
            console.log('vm.allanimals[i].id: '+vm.allanimals[i].id);
        }


    }
})(angular)