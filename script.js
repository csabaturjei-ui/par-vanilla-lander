function joinRevolution() {
  const email = document.getElementById('email').value;
  if (email) {
    alert(`Thank you for joining the revolution! We'll notify ${email} when beta is ready.`);
  } else {
    alert('Please enter your email address.');
  }
}
