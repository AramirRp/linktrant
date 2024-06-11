const toggle = document.querySelector('input.toggle');
const body = document.body;

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
});