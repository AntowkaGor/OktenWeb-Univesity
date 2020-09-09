// Клас людина:
//   поля:
//     вага,зріст
// Клас депутат(наслідується від людини):
//   поля:
//     прізвище,ім'я,вік,хабарник?,розмі хабаря
//   методи:
//     дати хабаря(зробити відповідні перевірки...
//       якщо депутат не хабарник то щоб він відмовився,
//       або ж якщо сума хабаря надто велика то щоб він вагався
//       чи брати чи ні)
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = /** @class */ (function () {
    function Human(wheight, height) {
        this.wheight = wheight;
        this.height = height;
    }
    return Human;
}());
var Deputat = /** @class */ (function (_super) {
    __extends(Deputat, _super);
    function Deputat(wheight, height, sername, name, age, briber, amoun_of_bribe) {
        var _this = _super.call(this, wheight, height) || this;
        _this.sername = sername;
        _this.name = name;
        _this.age = age;
        _this.briber = briber;
        _this.amoun_of_bribe = amoun_of_bribe;
        return _this;
    }
    Deputat.prototype.giveBribe = function (bribe) {
        if (this.briber === true) {
            if (bribe < 100)
                console.log("Nagh, its too small");
            else if (bribe > 10000)
                console.log("Wow, man, easier, its too big");
            else
                this.amoun_of_bribe === bribe;
        }
        else {
            console.log('no sanks');
        }
    };
    return Deputat;
}(Human));
var Kent = new Deputat(70, 170, 'Kent', 'Oleg', 29, true, 90);
var Pavlov = new Deputat(60, 160, 'Pavlov', 'Kolia', 39, true, 1350);
var Trast = new Deputat(80, 180, 'Trast', 'Anton', 25, false);
var Pedrov = new Deputat(90, 175, 'Pedrov', 'Jony', 22, true, 1000);
var Tomson = new Deputat(50, 179, 'Tomson', 'Sasha', 49, false);
var Zozylia = new Deputat(88, 177, 'Zozylia', 'Leonid', 27, false);
var Gara = new Deputat(56, 189, 'Gara', 'Max', 59, true, 50);
var Fraction = /** @class */ (function () {
    function Fraction() {
        this.deps = [];
    }
    //     додати депутата (вводимо з клави)
    Fraction.prototype.addToFaction = function (dep) {
        return this.deps.push(dep);
    };
    // //     видалити депутата(теж з клави)
    // deleteFromfraction(dep: IDeputat): void{
    //      delete this.deps[dep]
    // } 
    //     видалити всіх негідників які брали хабаря
    Fraction.prototype.deleateAllBriber = function () {
        var _this = this;
        this.deps.forEach(function (dep, i) {
            if (dep.briber === true) {
                delete _this.deps[i];
            }
        });
    };
    //     вивести найбільшого хабарника
    Fraction.prototype.showBiggerBriber = function () {
        var firstDep = this.deps.filter(function (dep) { return dep.briber; }).sort(function (dep1, dep2) { return dep2.amoun_of_bribe - dep1.amoun_of_bribe; })[0];
        console.log(firstDep.sername, firstDep.briber, firstDep.amoun_of_bribe);
    };
    //     вивести всіх депутатів
    Fraction.prototype.showAllDeputats = function () {
        this.deps.forEach(function (dep) { return console.log(dep); });
    };
    //  видалити всіх депутатів
    Fraction.prototype.deleteAllDeputats = function () {
        this.deps = [];
    };
    //  вивести загальну суму хабарів для фракції
    Fraction.prototype.showSumBribeFraction = function () {
        console.log(this.deps.filter(function (dep) { return dep.briber; }).reduce(function (acc, curr) { return acc + curr.amoun_of_bribe; }, 0));
    };
    return Fraction;
}());
var fract = new Fraction();
fract.addToFaction(Kent);
fract.addToFaction(Pavlov);
fract.addToFaction(Trast);
fract.addToFaction(Pedrov);
fract.addToFaction(Tomson);
fract.addToFaction(Zozylia);
fract.addToFaction(Gara);
console.log(fract);
// fract.deleteFromfraction(Kent);
// console.log(fract)
// fract.deleateAllBriber();
// console.log(fract);
// fract.showBiggerBriber();
// console.log(fract)
// fract.showAllDeputats();
// console.log(fract);
// fract. deleteAllDeputats();
// console.log(fract);
fract.showSumBribeFraction();
console.log(fract);
