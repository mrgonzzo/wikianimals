(function (angular) {

    angular.module('app').component('compDetailview', {
        // otra opción es poner aquí directamente el html asignándoselo a template:
        templateUrl: 'app/components/detailview/detailview.html',
        // en controller definimos la función que escribimos abajo
        controller: ['$stateParams', 'animalFactory', controladorCompDetailView],
        // declaramos un alias para no tener que usar $ctrl.
        controllerAs: 'compDetail'
    })

    function controladorCompDetailView($stateParams, animalFactory) {
        var vm = this;
        var idanimal = $stateParams.idAnimal;
       vm.$onInit = function () {
           vm.animal =animalFactory.getAnimalById(idanimal);
       }
       /* esto nos lo llevamos a la factory
        vm.allanimals = animalFactory.getAllAnimals();
        vm.animal = null;
        vm.$onInit = function () {
            for (var i = 0; i < vm.allanimals.length; i++) {
                if (idanimal == vm.allanimals[i].id) {
                    vm.animal = vm.allanimals[i];
                }
            }
        };

*/
    }
})(angular)