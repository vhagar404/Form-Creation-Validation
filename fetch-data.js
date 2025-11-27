// 1. Create async function
async function fetchUserData() {

    // 2. API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // 3. Select display container
    const dataContainer = document.getElementById('api-data');

    try {
        // 4. Fetch data
        const response = await fetch(apiUrl);
        const users = await response.json();

        // 5. Clear default loading text
        dataContainer.innerHTML = '';

        // 6. Create and append list
        const userList = document.createElement('ul');

        users.forEach(user => {
            const item = document.createElement('li');
            item.textContent = user.name;
            userList.appendChild(item);
        });

        dataContainer.appendChild(userList);

    } catch (error) {
        // 7. Handle errors
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// 8. Run on page load
document.addEventListener('DOMContentLoaded', fetchUserData);
