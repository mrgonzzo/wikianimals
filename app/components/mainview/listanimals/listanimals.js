(function (angular) {

    angular.module('app').component('compAnimallist', {
        // otra opción es poner aquí directamente el html asignándoselo a template:
        templateUrl: 'app/components/mainview/listanimals/listanimals.html',
        // en controller definimos la función que escribimos abajo
        controller: ['$log', '$state', 'animalFactory', controladorCompListAnimals],
        // declaramos un alias para no tener que usar $ctrl.
        controllerAs: 'compListanimals'
    });
    function controladorCompListAnimals($log, $state, animalFactory) {
        var vm = this;
        vm.$onInit = function () {
            vm.allanimals = animalFactory.getAllAnimals();
        };
        vm.goToDetail = function (_idAnimal_){
            $state.go('detail',{idAnimal:_idAnimal_});
        }
        

    }
})(angular)