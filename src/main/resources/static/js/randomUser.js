function randomUser() {
    // Implementation for fetching a random user
    fetch('https://randomuser.me/api/')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var user = data.results[0];
            var fullName = user.name.title + ' ' + user.name.first + ' ' + user.name.last;
              document.getElementById("user-name").innerText=fullName;
              document.getElementById("user-gender").innerText=user.gender;
              document.getElementById("user-image").src=user.picture.large;
        })
        .catch(function(error) {
            console.error('Error fetching random user:', error);
        });
}
