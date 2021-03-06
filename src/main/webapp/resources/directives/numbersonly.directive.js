(function() {
    var numbersOnlyDir = function($parse) {
               return {
                    require: ['^form', 'ngModel'],
                    link: function(scope, element, attrs, ctrls) {
                        scope.$watch(attrs.ngModel, function(newValue, oldValue) {
                            var mdlctrl = ctrls[1];
                            var model = $parse(attrs.ngModel);
                            var arr = String(newValue).split("");
                            if (arr.length === 0) {
                                return;
                            }
                            if (arr.length === 1 && (((arr[0] === '-') &&
                                    (attrs.negativeallowed !== undefined &&
                                            attrs.negativeallowed.toString() === "true")) || ((arr[0] === '.') &&
                                    (attrs.decimalallowed !== undefined && attrs.decimalallowed.toString()
                                            === "true"))))
                            {
                                return;
                            }
                            if ((arr.length === 2 && newValue === '-.') &&
                                    ((attrs.decimalallowed !== undefined &&
                                            attrs.decimalallowed.toString() === "true"))) {
                                return;
                            }
                            if (attrs.negativeallowed === undefined ||
                                    attrs.negativeallowed.toString() === "false") {
                                if ((newValue != null)) {
                                    transformedNewValue =
                                            newValue.toString().replace('-', '');
                                    if (newValue !== transformedNewValue) {
                                        model.assign(scope,
                                                transformedNewValue);
                                    }
                                }
                            }
                            if (attrs.decimalallowed === undefined ||
                                    attrs.decimalallowed.toString() === "false") {
                                if ((newValue != undefined)) {
                                    transformedNewValue =
                                            newValue.toString().replace('.', '');
                                    if (newValue !== transformedNewValue) {
                                        model.assign(scope,
                                                transformedNewValue);
                                    }
                                }
                            }
                            if (isNaN(newValue)) {
                                if ((newValue === undefined)) {
                                    model.assign(scope, newValue);
                                }
                                else {
                                    model.assign(scope, oldValue);
                                    mdlctrl.$setPristine();
                                }

                            }
                        });
                    }
                };
    };  
    angular.module('demoApp').directive('numbersOnly', ['$parse',numbersOnlyDir]);
})();
    