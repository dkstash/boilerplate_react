import React, { useState, useEffect } from "react";

function PageFetch() {
  let init = 'Fetch => Like a dog after a stick.';

  const [message, setMessage] = useState(init);

  useEffect(() => {
    //To a handle mount and unmounting of component
    //To not set state of component
    let isSubscribed = true;

    let mesg = `

Some json data from a local mock json server.
Still ES2016 goodies!`;

    let promise1 = new Promise(function(resolve, reject) {
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

export default PageFetch;