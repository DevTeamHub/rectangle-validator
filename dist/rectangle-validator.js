/**
* Pattern Validators
* https://github.com/DevTeamHub/rectangle-validator
* (c) 2016 Dev Team Inc. http://dev-team.com
* License: MIT
*/

var rectangleValidatorModule = angular.module('dev-team-rectangle-validator', []);

rectangleValidatorModule.directive("dtRectangle", dtRectangleValidatorDirective); 

function dtRectangleValidatorDirective() {
    return {
        scope: {
            minHeight: "=",
            maxHeight: "="
        },
        restrict: "A",
        require: 'ngModel',
        link: function (scope, element, attributes, ctrl) {

             var validator = function(value) {
               var isValid = false;

                var rectangleTemplate = element.closest(".rectangle-container").find(".rectangle-template");
                rectangleTemplate.html(value);
                var rectangleHeight = rectangleTemplate.innerHeight();

                if (scope.minHeight <= rectangleHeight && scope.maxHeight >= rectangleHeight) {
                    isValid = true;
                }

                ctrl.$setValidity('rectangle', isValid);
                return value;
            };

            ctrl.$formatters.push(validator);
            ctrl.$parsers.unshift(validator);
        }
    };
}