(function () {
    var app = angular.module("helpers");

    app.directive("uniform", function () {
        return {
            restrict: "A",
            require: "^ngModel",
            link: function (scope, element, attrs, ngModel) {
                
                ngModel.$parsers.push(function (value) {
                    var text = value;

                    if (text)
                        text = text.uniform();

                    if (text != value) {
                        ngModel.$setViewValue(text);
                        ngModel.$render();
                    }

                    return text;
                });
            }
        }
    });
})();