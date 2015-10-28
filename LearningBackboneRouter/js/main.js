import $ from 'jquery';
import Router from './router';

import './ajax_setup';

// this connects to the HTML
var appElement = $('.app');
// runs our initialize method
var router = new Router(appElement);
router.start();

window.router = router;

console.log('Hello, World');