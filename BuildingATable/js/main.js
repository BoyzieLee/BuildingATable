import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import vehicleModel from './vehicleModel';


const APP_ID = '8PIReS0VYHYc9g5M1MNtHbBVnvrYoSx5nTlsApcr';
const API_Key = 'YC77o1DkAFbPmvm7M9hR9uYsjxEN3Wi481T2zaiy';

$.ajaxSetup({
  // creating a custom header instaed of a build in header 'X-'
  headers: {
    'X-Parse-Application-Id': APP_ID,
    'X-Parse-REST-API-Key': API_Key
  }
});
import vehicleCollection from "./vehicleCollection";
import vehicleTemplate from "./vehicleTemplate";

let vehicle = new vehicleCollection();

function renderVehicle() {
  let $ul = $('<ul></ul>');
  vehicle.each(function(vehicle){

    let data = vehicle.toJSON();
    console.log('data', data);
    let templateString = vehicleTemplate(data);
    console.log('templateString', templateString);

    let $li = $(templateString);

    $ul.append($li);
  });
  $('body').html($ul);
}


window.vehicleModel = vehicleModel;
window.vehicleCollection = vehicleCollection;
window.vehicleTemplate = vehicleTemplate;

vehicle.fetch().then(renderVehicle);
console.log('Hello, World');
