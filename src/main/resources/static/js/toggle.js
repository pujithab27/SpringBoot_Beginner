var users = [
    {
        name: "John Doe",
        image: "/images/john.png",
        profession: "Software Engineer",
        gender: "male"
    },
    {
        name: "Jane Smith",
        image: "/images/jane.png",
        profession: "Designer",
        gender: "female"
    }
];
var id=0;
function toggle() {
    
    id=(id+1)%2;
    var temp=users[id];
    document.getElementById("user-name").innerText=temp.name;
    document.getElementById("user-profession").innerText=temp.profession;
    document.getElementById("user-image").src=temp.image;
}