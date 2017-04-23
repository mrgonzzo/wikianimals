(function(angular) {

  angular.module('app').component('compDisplay', {
    // otra opción es poner aquí directamente el html asignándoselo a template:
    templateUrl:'app/components/mainview/display/display.html',
    // en controller definimos la función que escribimos abajo
    controller:['animalFactory',controladorDisplay] ,
    // declaramos un alias para no tener que usar $ctrl.
    controllerAs: 'compDisplay'
})
function controladorDisplay(animalFactory) {
    var vm = this;
     vm.allanimals = animalFactory.getAllAnimals();
    vm.addAnimal = function (){
        var item = getRandomSpan()
            vm.allanimals.push(vm.allanimals[item]);
            console.log("random: "+ item)
            console.log("longitud array: "+vm.allanimals.length)
            
        }
function getRandomSpan(){
   return randomInt=Math.floor((Math.random()*7)+1);
  };
  
}
})(angular)
