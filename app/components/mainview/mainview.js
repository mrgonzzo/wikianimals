(function (angular) {

    angular.module('app').component('compMainview', {
        // otra opción es poner aquí directamente el html asignándoselo a template:
        templateUrl: 'app/components/mainview/mainview.html',
        // en controller definimos la función que escribimos abajo
        controller:[$q ,controladorCompMainView],
        // declaramos un alias para no tener que usar $ctrl.
        controllerAs: 'compMain'
    })
    function controladorCompMainView($q) {
        var vm = this;
        /**EJEMPLO ASINCRONIA 1
        vm.demoAsinc =function(){
            return 'pamplinas';
        }
        vm.mivariable=vm.demoAsinc();
        console.log(vm.mivariable);
    }*/
        /*
        vm.demoAsinc =function(){
                setTimeout(function(){
        return 'pamplinas';
                },1000)
                
            }
            vm.mivariable=vm.demoAsinc();
            console.log(vm.mivariable);//al esperar 1s para que se asigne pamplinas, vm.mivariabe esta undefined 
            */

            /*esto es una solucion, pero se lia si hay muchas funciones ()
        vm.demoAsinc = function (callback) {
            setTimeout(function () {
                callback('pamplinas');
            }, 1000);

        };
        vm.definirMiVariable = function(data){
            vm.mivariable=data;
        };
        vm.demoAsinc(vm.definirMiVariable);
        
        console.log(vm.mivariable);
    }*/
vm.demoAsincronia = function() {
     /* PASO 1
     Creamos la promesa:
     objetoQ.crearPromesa(); */
      var defered = $q.defer();
      var promise = defered.promise;      setTimeout(function() {
       /* PASO 3
       Cuando termina el timeout, la promesa
       se resuelve (para rechazarla, reject) */
       defered.resolve('Uka Lele');
       //defered.reject();
     }, 1000);      /*  PASO 2
     Y la devolvemos */
     return promise;    
   };
                   /*  PASO 4, CUANDO... */
  vm.demoAsincronia().then(function(data) {
     vm.miVariable = data;
     console.log(vm.miVariable);
  }, function() {
    console.log('CACHIS');});
  
};
})(angular)