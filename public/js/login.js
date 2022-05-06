const loginForm = document.getElementById('login');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const name = document.getElementById('name').value;

  const response = await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      name
    })
  }).then((response) => response.json());

  if (!response.id) {
    return alert('Login failed');
  }

  localStorage.clear();
  localStorage.setItem('user', JSON.stringify(response));
  window.location.href = '/comments';
});
