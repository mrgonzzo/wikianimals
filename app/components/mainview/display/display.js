(function(angular) {

  angular.module('app').component('compDisplay', {
    // otra opción es poner aquí directamente el html asignándoselo a template:
    templateUrl:'app/components/mainview/display/display.html',
    // en controller definimos la función que escribimos abajo
    controller:['$state','animalFactory',controladorDisplay] ,
    // declaramos un alias para no tener que usar $ctrl.
    controllerAs: 'compDisplay'
})
function controladorDisplay($state,animalFactory) {
    var vm = this;
    //esto hay que hacerlo desde la factorya para
    //tener los datos controlados desde un solo sitio
     vm.allanimals = animalFactory.getAllAnimals();
    vm.addRandomAnimal = function (){
        var item = getRandomSpan()
            vm.allanimals.push(vm.allanimals[item]);
         }
function getRandomSpan(){
   return randomInt=Math.floor((Math.random()*(vm.allanimals.length)));
  };

   vm.goToCrud = function (){
    $state.go('crud');
  };
}
})(angular)
