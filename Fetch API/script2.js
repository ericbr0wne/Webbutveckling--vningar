document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('postForm');
    const confirmation = document.getElementById('confirmation');
  
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

          confirmation.textContent = `Post created with ID: ${data.id}`;
          
            users.forEach(data => {
              const paragraph = document.createElement('p');
              paragraph.textContent = `Name: ${user.name}, Email: ${user.email}`;
              document.getElementById('users').appendChild(paragraph);
         
        })
        .catch(error => {

          console.error('Fetch error:', error);
        });
    });
  });
});