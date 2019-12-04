import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./global/style/bootstrap.custom.scss"; // use custom or standard Bootstrap "bootstrap/dist/css/bootstrap.min.css"
import "./global/style/main.css";
import $ from "jquery"; // require for Bootstrap javascript
//import Popper from "popper.js"; // require for Bootstrap javascript
import "bootstrap"; // Bootstrap javascript
import { fetch } from "whatwg-fetch"; // for Fetch usage
import App from "./components/App";

render(
	<Router>
		<App />
	</Router>,
	document.getElementById("app")
);

/*********************************************************************/
//jQuery, popper.js, Bootstrap
$(function() {
	$('[data-toggle="popover"]').popover();
});
document.getElementById("submit").classList.add("btn", "btn-primary");

/*********************************************************************/
//CSS

document.getElementById("global").innerHTML =
	'<p class="main-theme">Using standard/global css</p>';

/*********************************************************************/
//Promise
let ptxt = document.getElementById("promise");
ptxt.textContent = "A Promise => Wait for it,    w a i t   f o r   i t ...";

let promise1 = new Promise(function(resolve) {
	setTimeout(function() {
		resolve("timeout-resolve");
	}, 10000);
});

let stringTemplateLiteral = `Boom!!
You wasted 10 seconds of your life for a Promise. 
Welcome to ES2016!`;

promise1.then(function() {
	ptxt.textContent = stringTemplateLiteral;
});

console.log(promise1);

/*********************************************************************/
//Async and Await
let atxt = document.getElementById("async");
atxt.textContent = "A Async => A waiting for something, why I don't know";

async function f() {
	let promise2 = new Promise(resolve => {
		setTimeout(
			() =>
				resolve(`Done awaiting!
Welcome to ES2017!`),
			15000
		);
	});

	let result = await promise2; // wait until the promise resolves

	atxt.textContent = result; //done
}

f(); //run the async function

/*********************************************************************/
//Fetch
let ftxt = document.getElementById("fetch");
ftxt.textContent = "Fetch => Like a dog after a stick ...";

let mesg = `

Some json data from a local mock json server.
Still ES2016 goodies!`;

fetch("http://localhost:3000/organization")
	.then(response => response.json())
	.catch(error => console.error("Error:", error))
	.then(json => (ftxt.textContent = JSON.stringify(json.personnel[0]) + mesg));

/*********************************************************************/
//Arrow function
const greet = name => console.log(`Hello, ${name}`);
greet("Jon Snow");

/*********************************************************************/
// Notes

// Vendor CSS
/*
 * Vendor libraries must be in node_modules
 * Webpack bundles vendor chunks if from node_modules
 * Chunk file name = vendor.[contenthash].js
 */

// CSS Modules
/*
 * https://medium.com/clover-platform-blog/modular-scss-and-why-you-need-it-6bb2d8c40fd8
 * https://github.com/css-modules/css-modules
 */
