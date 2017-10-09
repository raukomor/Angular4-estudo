var message = "help me, Oi-Wan Kenobi, You're my only hope!";
console.log(message);
var episode = 4;
console.log("this is episode " + 4);
episode = episode + 1;
console.log("Next episode is " + episode);
var favoriteDroid;
favoriteDroid = 'BB-8';
console.log("my favorite droid is " + favoriteDroid);
var isEnoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 11;
console.log("Is " + distance + " parsecs enough to beat Millenium Falcon? " + (isEnoughToBeatMF(distance) ? 'YES' : 'NO') + " ");
var call = function (name) { return console.log("Do you copy, " + name + "?"); };
call("R2");
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc (5, 2) = " + inc(5, 2));
console.log("inc (5) = " + inc(5));
