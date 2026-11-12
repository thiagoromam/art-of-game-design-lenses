(function () {
    var app = angular.module("app");

    app.service("data", ["$http", function (http) {
		var self = this;
        var sets = [];
        var lenses = [];

        function addSet(set) {
            var lastId = sets.length ? sets.max("$.id") : 0;

            set.id = lastId + 1;
            set.lenses = [];
            sets.push(set);

            return set;
        }
        function addLense(lense) {
            lense.id = lense.number;
			lenses.push(lense);
			
			sets.forEach(function (set) {
				if (lense.sets.includes(set.key))
					set.lenses.push(lense.id);
			});
			
            return lense;
        }

		this.sets = sets;
		this.lenses = lenses;
		this.ready = http.get("data.json").then(function (r) {
			
			r.data.sets.forEach(addSet);
			r.data.lenses.forEach(addLense);
			
			var favorites = addSet({ title: "Favoritas", custom: true });
        
			sets.favorites = favorites;
			
			return self;
		});
    }]);

    app.run(["$compile", "data", function (compile, data) {

        data.ready.then(function () {
			data.lenses.forEach(function (l) {
				var description = $("<div>" + l.description + "</div>");
				
				compile(description);

				var title = l.title;
				var text = description[0].innerText;

				title = title.uniform();
				text = text.uniform();

				l.searchText = title + " " + text;
			});
		});
    }]);
})();