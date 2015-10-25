let GoodGuys = function() {

  this.health = 100;

  this.hit = function(num) {
    let hitPoints = num || 10;
    return this.health = this.health - hitPoints;
  };

};

console.log(GoodGuys);
export default GoodGuys;