function fetchUserData() {
    fetch('users.json')
        .then(response => response.json())
        .then(data => {
            const userInfoContainer = document.getElementById('userInfo');
            userInfoContainer.innerHTML = ''; // Clear existing content

            const successMessage = document.getElementById('successMessage');
            successMessage.style.display = 'block';

            data.results.forEach(user => {
                const picture = user.picture.large;
                const name = `${user.name.title} ${user.name.first} ${user.name.last}`;
                const cell = user.cell;
                const city = user.location.city;
                const country = user.location.country;

                const userCard = document.createElement('div');
                userCard.classList.add('user-card');
                userCard.innerHTML = `
                    <img src="${picture}" alt="User Picture">
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Cell:</strong> ${cell}</p> <!-- Виправлено на "Cell" -->
                    <p><strong>City:</strong> ${city}</p>
                    <p><strong>Country:</strong> ${country}</p>
                `;
                userInfoContainer.appendChild(userCard);
            });
        })
        .catch(error => console.error('Error loading user data:', error));
}

document.getElementById('loadUserInfo').addEventListener('click', fetchUserData);
