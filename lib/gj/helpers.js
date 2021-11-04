// STRING
String.isString = function (value) {
    return typeof (value) == "string";
};
String.prototype.format = function () {
    var input = this;

    for (var i = 0; i < arguments.length; i++)
        input = input.replaceAll("{" + i + "}", arguments[i]);

    return input;
};

// NUMBER
Number.getRandomInt = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max + 1);

    return Math.floor(Math.random() * (max - min)) + min;
};

// ARRAY
Array.prototype.contains = function (item) {
    return this.indexOf(item) > -1;
};
Array.prototype.remove = function (item) {
    return this.removeRange([item]);
};
Array.prototype.removeRange = function (items) {
    var counter = 0;

    for (var i = 0; i < this.length; i++) {
        if (items.contains(this[i])) {
            this.splice(i, 1);
            counter++;
            i--;
        }
    }

    return counter;
};
Array.prototype.clone = function () {
    return this.slice(0);
};
Array.prototype.clear = function () {
    this.splice(0, this.length);
};
Array.prototype.pushRange = function (items) {
    if (!items) return;

    for (var i = 0; i < items.length; i++)
        this.push(items[i]);
};

// LINQ
Array.prototype.enumerable = function () {
    return Enumerable.From(this);
};
Array.prototype.max = function (selector) {
    return this.enumerable().Max(selector);
};
Array.prototype.where = function (predicate) {
    return this.enumerable().Where(predicate).ToArray();
};
Array.prototype.select = function (selector) {
    return this.enumerable().Select(selector).ToArray();
};
Array.prototype.selectMany = function (selector) {
    return this.enumerable().SelectMany(selector).ToArray();
};
Array.prototype.singleOrDefault = function (predicate) {
    return this.enumerable().SingleOrDefault(null, predicate);
};
Array.prototype.single = function (predicate) {
    return this.enumerable().Single(predicate);
};

// JQUERY
if (window.$) {
    $.fn.extend({
        copyAttributes: function (from, options) {
            options = $.extend({ except: [], merge: [] }, options);
            from = $(from);
            var to = $(this);

            $.each(from.prop("attributes") || {}, function () {
                if (options.except.contains(this.name))
                    return;

                var oldValue = to.attr(this.name);
                var newValue = from.attr(this.name);

                if ((options.mergeAll || options.merge.contains(this.name)) && Variable.hasValue(oldValue))
                    newValue = oldValue + " " + newValue;

                to.attr(this.name, newValue);
            });
        },
        changeTag: function (name) {
            var elements = $();

            this.each(function () {
                var target = $(this);
                var e = $("<{0}>".format(name));

                e.copyAttributes(target);
                e.html(target.html());
                target.replaceWith(e);

                elements = elements.add(e);
            });

            return elements;
        },
        outerHtml: function () {
            return this.prop("outerHTML");
        }
    });
}