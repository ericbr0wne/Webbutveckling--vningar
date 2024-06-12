document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('postForm');
  const confirmation = document.getElementById('confirmation');
  const usersDiv = document.getElementById('users');

  // Fetch users and populate the usersDiv
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(users => {
      console.log('Fetched users:', users); // Debug logging
      if (Array.isArray(users)) {
        users.forEach(user => {
          const userParagraph = document.createElement('p');
          userParagraph.textContent = `Name: ${user.name}, Email: ${user.email}`;
          usersDiv.appendChild(userParagraph);
        });
      } else {
        console.error('Users data is not an array:', users);
      }
    })
    .catch(error => {
      console.error('Fetch error for users:', error);
    });

    
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(form);

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: formData.get('title'),
        body: formData.get('body'),
        userId: 1 
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Post created:', data); 
        confirmation.textContent = `Post created with ID: ${data.id}`;
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  });
});
