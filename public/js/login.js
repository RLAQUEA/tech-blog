const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username && password) {
      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        console.log('being redirected');
        document.location.replace('/dashboard');
      } else {
        alert('Failed to log in.');
      }
    }
  };

  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
