function decorator(component) {

    var proto = Object.getPrototypeOf(component);

    function Decorator(component) {
        this.component = component;
    }

    Decorator.prototype = Object.create(proto);

    Decorator.prototype.hello = function() {
        this.component.hello.apply(this.component, arguments);
    };

    return new Decorator(component);
}
var test = {
    put: function() {
        console.log('Helllo ');
    }
}
var temp = decorator(test);

console.log(test);