


angular.module('app').directive('rbMerry', function(){
  return{
    scope:{
      image: '@',
      mobile: '='
    },
    templateUrl: 'js/directives/directiveTemplates/merry.html',
    link: function(scope, el, attr, ctrl){
      scope.device = 'home';
      scope.isLoaded = false;
      
      scope.imageLoad = function(){
            scope.isLoaded = true;
      }
      
      scope.isMain = function(){
        scope.isLoaded = false;
        scope.device = 'home';
      };
      
      scope.isCategories = function(){
        scope.isLoaded = false;
        scope.device = 'recipes';
      };
      
    
      scope.isIngredients = function(){
        scope.isLoaded = false;
        scope.device = 'calendar';
      };
      

    }
  }
});