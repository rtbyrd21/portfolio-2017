


angular.module('app').directive('rbToi', function(){
  return{
    scope:{
      image: '@',
      mobile: '='
    },
    templateUrl: 'js/directives/directiveTemplates/toi.html',
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
        scope.device = 'ingredients';
      };
      
    
      scope.isIngredients = function(){
        scope.isLoaded = false;
        scope.device = 'meal-builder';
      };
      

    }
  }
});