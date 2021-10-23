// Add your code here

fetch('http://localhost:3000/users' , {
    method: 'POST',
    headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        'name':"Hannah",
        'email': "hannah@gmail.com"
    })
})
