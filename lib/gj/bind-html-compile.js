(function () {
    var app = angular.module("helpers");

    app.directive('bindHtmlCompile', ['$compile', function (compile) {
        return function(scope, element, attrs) {

            function getValue() {
                return scope.$eval(attrs.bindHtmlCompile);
            }
            function updateHtml(html) {
                element.html(html);
                compile(element.contents())(scope);
            }

            scope.$watch(getValue, updateHtml);
        };
    }])
})();