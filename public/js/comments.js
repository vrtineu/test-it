const formComments = document.getElementById('comments');
const scrollToTopBtn = document.getElementById('scroll-top');

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

window.onscroll = () => pageScroll();

function pageScroll() {
  const userScroll =
    document.body.scrollTop > 20 || document.documentElement.scrollTop > 20

  userScroll
    ? scrollToTopBtn.style.display = "block"
    : scrollToTopBtn.style.display = "none"
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
