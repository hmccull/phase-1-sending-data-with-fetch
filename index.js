function submitData(userName, userEmail) {

    const userInput = {
        name: userName,
        email: userEmail
    };

    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        }, 
        body: JSON.stringify(userInput),
    })
    .then(response => response.json())
    .then(userInput => document.body.append(userInput.id))

    .catch(function (error) {
        alert("Input values were not posted correctly.");
        document.body.append(error.message);
    })
}

/*
When writing the callback function for your catch(), expect to receive an object on error with a property, message, containing info about what went wrong. Write code to append this message to the DOM when catch() is called.

An amazing feature of fetch() is that if you return it, other functions can tack on their own then() and catch() calls. For this lab, you will need to return the fetch() chain from our submitData function to ensure that the tests run correctly.
*/