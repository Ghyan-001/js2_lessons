const API_URL = 'https://jsonplaceholder.typicode.com/users';
const usersList = document.querySelector('.users-list');
const searchInput = document.querySelector('#search-input');

const users = [];

function createUsersList() {
    users.forEach(function (user){
        usersList.innerHTML += `
            <div class="user">
                ${user.name}
            <div>
        `
    })
}

function getUsers() {
    fetch(API_URL)
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        json.forEach(function (user) {
            users.push(user);
        })

        createUsersList();
    })
}

searchInput.oninput = function (event) {
    const searchValue = event.target.value.toLowerCase();
    const usersArray = Array.from(document.querySelectorAll('.user'));
    usersArray.forEach(function(user) {
        if (user.innerText.toLowerCase().includes(searchValue)) {
            user.classList.remove('hidden')
        } else {
            user.classList.add('hidden')
        }
    })
}

getUsers();