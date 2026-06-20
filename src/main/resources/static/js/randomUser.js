function randomUser() {
    fetch('/api/users/random')
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Could not fetch a random user');
            }
            return response.json();
        })
        .then(function(user) {
            document.getElementById("user-name").innerText = user.name;
            document.getElementById("user-gender").innerText = user.gender;
            document.getElementById("user-image").src = user.image;
        })
        .catch(function(error) {
            console.error('Error fetching random user:', error);
        });
}
