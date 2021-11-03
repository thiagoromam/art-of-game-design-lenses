(function () {
    if (!$ || !$.fn.modal) {
        console.warn("Não foi possível carregar o componente 'modal': bootstrap não foi carregado.");
        return;
    }

    var app = angular.module("helpers");

    app.directive("modal", ["$compile", "$timeout", function (compiler, timeout) {
        return {
            compile: function (element, attrs) {
                var modals;
                var container = angular.element("<div class='modal-container'>");
                var modal;

                function createTemplate() {
                    var template = $("<div>").append(element.html());
                    var title = template.find("modal-title");
                    var form = template.find("modal-form");
                    var header = template.find("modal-header");
                    var body = template.find("modal-body");
                    var footer = template.find("modal-footer");

                    if (title.length) {
                        header = $("<modal-header>");
                        title = title.changeTag("h4");
                        title.before(header);
                        title.appendTo(header);
                    }

                    title.addClass("modal-title");
                    header.changeTag("div").addClass("modal-header");
                    body.changeTag("div").addClass("modal-body");
                    footer.changeTag("div").addClass("modal-footer");
                    form.changeTag("form");

                    var modal = angular.element("<div class='modal fade' role='dialog'>");
                    var dialog = angular.element("<div class='modal-dialog'>");
                    var content = angular.element("<div class='modal-content'>");

                    dialog.appendTo(modal);
                    content.appendTo(dialog);
                    content.append(template.contents());

                    if (attrs.backdrop) {
                        modal.attr("data-backdrop", attrs.backdrop);

                        if (attrs.backdrop == "static")
                            modal.attr("data-keyboard", false);
                    }

                    if (attrs.class) {
                        dialog.addClass(attrs.class);
                        element.removeAttr("class");
                    }

                    return angular.element(modal.outerHtml());
                }

                modal = createTemplate();
                element.empty();
                element.css("display", "none");

                return {
                    pre: function (scope) {
                        modals = angular.element.find(".modals");

                        if (!modals.length) {
                            modals = angular.element("<div class='modals'>");
                            modals.appendTo(angular.element.find("body"));
                        }

                        compiler(modal)(scope);
                        modal.appendTo(container);
                        container.prependTo(modals);
                    },
                    post: function (scope, element, attrs) {

                        function toggle(visible) {
                            modal.modal(visible ? "show" : "hide");
                            timeout(function () {
                                scope.$apply();
                            }, 300);
                        }

                        scope.$watch(attrs.isOpen, function (v) {
                            toggle(Boolean(v));
                        });

                        modal.on("hide.bs.modal", function () {
                            timeout(function () {
                                scope.$eval(attrs.isOpen + " = false");
                            });
                        });
                        modal.on("show.bs.modal", function () {
                            container.appendTo(modals);

                            timeout(function () {
                                var backdrop = angular.element(angular.element.find("body>.modal-backdrop"));
                                backdrop.prependTo(container);
                            });

                            timeout(function () {
                                var target = modal.find(document.activeElement);
                                var closestModal = target.closest(".modal");

                                if (closestModal[0] != modal[0])
                                    modal.find(":input:not(:button, :submit):first").focus();
                            }, 400);
                        });

                        if ("ngController" in attrs) {
                            var name = attrs.ngController.match(/\w+(?: as (\w+))?/)[1];
                            if (name && !scope.$parent[name])
                                scope.$parent[name] = scope[name];
                        }

                        if (Boolean(scope.$eval(attrs.isOpen)))
                            toggle(true);
                        else
                            scope.$eval(attrs.isOpen + " = false");
                    }
                };
            }
        };
    }]);
})();