fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();

      })
      .then(users => {
        users.forEach(user => {
          const paragraph = document.createElement('p');
          paragraph.textContent = `Name: ${user.name}, Email: ${user.email}`;
          document.getElementById('users').appendChild(paragraph);
        });
      })
      
      .catch(error => {
        console.error('Fetch error:', error);
      });
  