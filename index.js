(function () {
    var app = angular.module("app");

    app.controller("MainController", ["$scope", "data", "storage", function (scope, data, storage) {
        
        function loadSelectedMenuFromStorage(){
            var name = storage.get("selectedMenu");
            var menu = scope.menus.singleOrDefault(function (m) {
                return m.name == name;
            });

            if (menu)
                scope.selectedMenu = menu;
        }
        function loadActiveSetsFromStorage() {
            var ids = storage.get("activeSets") || [];
            var sets = data.sets.where(function (s) {
                return ids.contains(s.id);
            });

            sets.forEach(function (s) {
                s.active = true;
            });
        }
        function loadFavoritesFromStorage() {
            var ids = storage.get("favorites") || [];
            var lenses = data.lenses.where(function (l) {
                return ids.contains(l.id);
            });
            
            lenses.forEach(function (l) {
                l.favorite = true;
            });
        }

        scope.menus = [
            { name: "lenses", title: "Lentes" },
            { name: "random", title: "Aleatória" },
            { name: "divination", title: "Adivinhação" },
            { name: "favorites", title: "Favoritas" }
        ];
        
        scope.selectedMenu = scope.menus[0];
        scope.sets = data.sets;
        scope.lenses = data.lenses;

        scope.init = function () {
            loadSelectedMenuFromStorage();
            loadActiveSetsFromStorage();
            loadFavoritesFromStorage();
            scope.updateLensesList();
        };
        scope.selectMenu = function (menu) {
            if (menu.name == scope.selectedMenu.name)
                return;

            scope.selectedMenu = menu;

            storage.set("selectedMenu", menu.name);
            scope.updateLensesList();
        };
        scope.isMenuActive = function (menu) {
            if (typeof(menu) == "string")
                return menu == scope.selectedMenu.name;

            return menu == scope.selectedMenu;
        };
        scope.selectSet = function (set) {
            set.active = !set.active;

            var activeSetsIds = data.sets.where("$.active").select("$.id");

            storage.set("activeSets", activeSetsIds);
            scope.updateLensesList();
        };

        scope.updateLensesList = function () {
            var lenses = data.lenses.clone();
            var activeSets = data.sets.where("$.active");

            if (activeSets.length) {
                var ids = activeSets.selectMany("$.lenses");

                lenses = lenses.where(function (l) {
                    return ids.contains(l.id);
                });
            }

            if (scope.isMenuActive("favorites")) {
                lenses = lenses.where("$.favorite");
            }

            if (scope.isMenuActive("random") || scope.isMenuActive("divination"))
            {
                var previousLenses = lenses;
                var count = scope.isMenuActive("divination") ? 4 : 1;

                lenses = [];

                while (count > 0 && previousLenses.length) {
                    var index = Number.getRandomInt(0, previousLenses.length - 1);
                    var lense = previousLenses[index];

                    lenses.push(lense);
                    previousLenses.remove(lense);
                    count--;
                }
            }
            
            // scope.lenses = lenses;
            scope.lenses = Enumerable.From(lenses).OrderByDescending("$.number").ToArray();
        };

        scope.visualizeLense = function (lense) {
            scope.lenseModal.open(lense);
        };
        scope.toggleFavorite = function (lense) {
            lense.favorite = !lense.favorite;

            var favoritesIds = data.lenses.where("$.favorite").select("$.id");

            storage.set("favorites", favoritesIds);
        }
    }]);

    app.controller("LenseModalController", ["$scope", function (scope) {
        
        this.open = function (lense) {
            scope.lense = lense;
            scope.isOpened = true;
        };

        scope.$parent.lenseModal = this;
    }]);

    app.directive("lenseRef", ["data", function (data) {
        return {
            template: function (element) {
                var number = parseInt(element.html().trim());
                var lense = data.lenses.single("$.number == " + number);

                return "<span class='lense-ref'>Lente {0}: {1}</span>".format(lense.number, lense.title);
            }
        }
    }]);

    app.directive("lenseTitle", ["data", function (data) {
        return {
            template: function (element) {
                var number = parseInt(element.html().trim());
                var lense = data.lenses.single("$.number == " + number);
                var title = lense.title.substring(3);

                return "<span class='lense-ref'>{0}</span>".format(title);
            }
        }
    }]);

    app.service("storage", function () {
        
        this.get = function (key) {
            var json = localStorage.getItem(key);
            var value = JSON.parse(json);

            return value;
        };
        this.set = function (key, value) {
            var json = JSON.stringify(value);

            localStorage.setItem(key, json);
        };
    });
})();