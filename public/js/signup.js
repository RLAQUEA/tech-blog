//signup function
const signupFormHandler = async (event) => {
    event.preventDefault();
  
    //get the values from the input
    const username = document.querySelector('#username-signup').value.trim()
    const password = document.querySelector('#password-signup').value.trim();
    
  //if we get both values then post that information and save to db
 
  if (username && password) {
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in.');
    }
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
