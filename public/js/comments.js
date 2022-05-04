const formComments = document.getElementById('comments');

formComments.addEventListener('submit', async (e) => {
  e.preventDefault();

  const user = JSON.parse(localStorage.getItem('user'));
  const comment = document.getElementById('comment').value;

  const response = await fetch('/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: user.id,
      comment,
    })
  }).then((response) => response.json());

  if (!response.success) {
    return alert('Comment failed, try again later');
  }

  window.location.href = '/comments';
});