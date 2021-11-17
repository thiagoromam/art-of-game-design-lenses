(function () {
    var app = angular.module("app");

    app.controller("MainController", ["$scope", "data", "storage", function (scope, data, storage) {
        
        function loadSelectedMenuFromStorage(){
            var menu = scope.menus.singleOrDefault(function (m) {
                return m.name == storage.selectedMenu;
            });

            if (menu) {
                scope.selectedMenu = menu;
                scope.updateView = menu.update;
            }
        }
        function loadActiveSetsFromStorage() {
            var sets = data.sets.where(function (s) {
                return storage.activeSets.contains(s.id);
            });

            sets.forEach(function (s) {
                s.active = true;
            });
        }
        function loadFavoritesFromStorage() {
            data.sets.favorites.lenses.pushRange(storage.favorites);
        }
        function getLenses(randomCount) {
            var lenses = data.lenses.clone();
            var activeSets = data.sets.where("$.active");

            if (activeSets.length) {
                var ids = activeSets.selectMany("$.lenses");

                lenses = lenses.where(function (l) {
                    return ids.contains(l.id);
                });
            }

            if (randomCount > 0)
            {
                var previousLenses = lenses;
                lenses = [];

                while (randomCount > 0 && previousLenses.length) {
                    var index = Number.getRandomInt(0, previousLenses.length - 1);
                    var lense = previousLenses[index];

                    lenses.push(lense);
                    previousLenses.remove(lense);
                    randomCount--;
                }
            }

            return lenses;
        }
        function updateLensesList() {
            scope.lenses = getLenses();
        }
        function updateRandomLense() {
            scope.randomLense = getLenses(1)[0];
        }
        function updateDivinationList() {
            scope.divination = getLenses(4);
        }

        scope.menus = [
            { name: "lenses", title: "Lentes", update: updateLensesList },
            { name: "random", title: "Aleatória", update: updateRandomLense },
            { name: "divination", title: "Adivinhação", update: updateDivinationList }
        ];
        
        scope.selectedMenu = scope.menus[0];
        scope.sets = data.sets.where("!$.custom");
        scope.customSets = data.sets.where("$.custom");
        scope.lenses = data.lenses;

        scope.init = function () {
            storage.load();

            loadSelectedMenuFromStorage();
            loadActiveSetsFromStorage();
            loadFavoritesFromStorage();

            scope.updateView();
        };
        scope.selectMenu = function (menu) {
            scope.selectedMenu = menu;
            scope.updateView = menu.update;
            
            storage.selectedMenu = menu.name;
            storage.save();

            scope.updateView();
        };
        scope.isMenuActive = function (menu) {
            if (typeof(menu) == "string")
                return menu == scope.selectedMenu.name;

            return menu == scope.selectedMenu;
        };
        scope.selectSet = function (set) {
            set.active = !set.active;

            // only favorites active or the same type of sets
            data.sets.forEach(function (s) {
                if (s.custom != set.custom || set == data.sets.favorites && s != set)
                    s.active = false;
            });

            var activeSetsIds = data.sets.where("$.active").select("$.id");

            storage.activeSets.clear();
            storage.activeSets.pushRange(activeSetsIds);
            storage.save();            

            scope.updateView();
        };

        scope.visualizeLense = function (lense) {
            scope.lenseModal.open(lense);
        };
        scope.toggleFavorite = function (lense) {
            var favorites = data.sets.favorites.lenses;
            var id = lense.id;

            if (!favorites.contains(id))
                favorites.push(id);
            else
                favorites.remove(id);

            lense.favorite = !lense.favorite;

            storage.favorites.clear();
            storage.favorites.pushRange(favorites);
            storage.save();
        };
    }]);

    app.controller("LenseModalController", ["$scope", function (scope) {
        
        this.open = function (lense) {
            scope.lense = lense;
            scope.isOpened = true;
        };

        scope.$parent.lenseModal = this;
    }]);

    app.directive("lenseCard", function () {
        return {
            restrict: "E",
            templateUrl: "lense-card.html",
            scope: {
                lense: "=info"
            }
        }
    });

    app.directive("lenseFullData", function () {
        return {
            restrict: "E",
            templateUrl: "lense-full-data.html",
            scope: {
                lense: "=info"
            }
        }
    });

    app.directive("lenseRef", ["data", function (data) {
        return {
            restrict: "E",
            template: function (element) {
                var number = parseInt(element.html().trim());
                var lense = data.lenses.single("$.number == " + number);

                return "<span class='lense-ref'>Lente {0}: {1}</span>".format(lense.number, lense.title);
            }
        }
    }]);

    app.directive("lenseTitle", ["data", function (data) {
        return {
            restrict: "E",
            template: function (element) {
                var number = parseInt(element.html().trim());
                var lense = data.lenses.single("$.number == " + number);
                var title = lense.title.substring(2);

                return "<span class='lense-ref'>{0}</span>".format(title);
            }
        }
    }]);

    app.service("storage", function () {
        var key = "art_of_game_design_lenses: user_data";
        
        this.selectedMenu = null;
        this.activeSets = [];
        this.favorites = [];

        this.load = function () {
            var json = localStorage.getItem(key);
            var value = JSON.parse(json);

            if (value) {
                this.selectedMenu = value.selectedMenu;
                this.activeSets = value.activeSets;
                this.favorites = value.favorites;
            }
        };
        this.save = function () {
            var value = {
                selectedMenu: this.selectedMenu,
                activeSets: this.activeSets,
                favorites: this.favorites
            };

            var json = JSON.stringify(value);

            localStorage.setItem(key, json);
        };
    });
})();