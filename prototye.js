var Dog = {};

var myMammal = {
    name: 'Herb the Mammal',
    get_name: function() {
        return this.name;
    },
    says: function() {
        return this.saying || '';
    }
};

console.log(myMammal);

var myCat = Object.create(myMammal);
myCat.name = 'Henrietta';
myCat.saying = 'meow';
myCat.purr = function(n) {
    var i, s = '';
    for (i = 0; i < n; i += 1) {
        if (s) {
            s += '-';
        }
        s += 'r';
    }
    return s;
};
myCat.get_name = function() {
    return this.says() + ' ' + this.name + ' ' + this.says();
};


myMammal.meow = function() {
    return "add after myCat";
}


var myDog = Object.create(myMammal);

myMammal.woof = function() {
    return "says woof";
}

console.log(myDog);