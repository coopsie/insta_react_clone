async function login(username, email, password, setter) {

// The order of method, header, body is important and headers must include the content type
    try {
        const response = await fetch("http://localhost:5001/login", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        })
        const data = await response.json();
        console.log(data.user);
        setter(data.user);
    } catch (error) {
        console.log(error)
    }
}

module.exports = {login};