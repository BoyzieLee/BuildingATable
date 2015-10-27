import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import Router from './router';
import './ajax-setup';



var appElement = $('.app');
// create the router first
var router = new Router(appElement);
// then call it to start
router.start();


console.log('Hello, World');