import React, { useState, useEffect } from "react";

function PagePromise() {
	let init = "A Promise => Wait for it,    w a i t   f o r   i t ...";

	const [message, setMessage] = useState(init);

	useEffect(() => {
		//To a handle mount and unmounting of component
		//To not set state of component
		let isSubscribed = true;

		let stringTemplateLiteral = `Boom!!
    You wasted 10 seconds of your life for a Promise. 
    Welcome to ES2016!`;

		let promise1 = new Promise(function(resolve /*reject*/) {
			setTimeout(function() {
				resolve(stringTemplateLiteral);
			}, 10000);
		});

		promise1.then(function(value) {
			if (isSubscribed) {
				setMessage(value);
				console.log(value);
			}
		});

		//For unmounting, unsubscribe
		return () => (isSubscribed = false);
	}, []);

	return (
		<>
			<textarea rows="4" cols="50" value={message} readOnly></textarea>
		</>
	);
}

export default PagePromise;
