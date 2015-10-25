import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';


import GoodGuy from './goodGuys';
import BadGuy from './badGuys';


// Good Guy Instance
let PrivateBryan = new GoodGuys ();


// Bad Guy Instance
let DateMe = new BadGuys ();


// DOM Nodes Selected
let ggHealth = $('.ggHealth');
let bgHealth = $('.bgHealth');


// Show current (default) health
ggHealth.text(GoodGuyFight.health);
bgHealth.text(DateMe.health);


// Setting up ON Events
ggAttack.on('click', function() {


  // Generate a random amount of hit points
  // Then attack!!!
  let num = _.random(0, 25);
  DateMe.hit(num);

  if (DateMe.health <= 0) {
    bgHealth.text('Defeated');
    alert('Mario Wins!!');
  } else {
    bgHealth.text(DateMe.health);
    alert('DateMe Puts Up A Firewall!!!');
    PrivatBryan.hit(10);
    ggHealth.css('color', 'red');
    ggHealth.text(PrivatBryan.health);
    setTimeout( function () {
      ggHealth.css('color', 'black');
    }, 1000);
  }

  console.log(GoodGuys);
});


console.log('WAT');

