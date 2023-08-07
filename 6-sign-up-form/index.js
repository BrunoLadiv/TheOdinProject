const passwordInput = document.getElementById('password')
const confirmPasswordInput = document.getElementById('confirmPassword')
const errorText = document.querySelector('.password-match')
const minChars = document.querySelector('.min-char')
const registerButton = document.querySelector('button')

function checkPasswords() {
  const password = passwordInput.value
  const confirmPassword = confirmPasswordInput.value
  console.log(password.length)
  if (password.length < 8) {
    minChars.style.display = 'block'
    passwordInput.style.borderColor = 'red'
    return
  } else {
    passwordInput.style.borderColor = 'green'
    minChars.style.display = 'none'
  }

  if (!confirmPassword) {
    errorText.style.display = 'none'
    return
  }

  if (password === confirmPassword) {
    registerButton.removeAttribute('disabled')
    confirmPasswordInput.style.borderColor = 'green'
    errorText.style.display = 'none'
    console.log('Passwords match.')
  } else {
    confirmPasswordInput.style.borderColor = 'red'
    errorText.style.display = 'block'
    registerButton.setAttribute('disabled', 'true')
    console.log('Passwords do not match.')
  }
}

passwordInput.addEventListener('input', checkPasswords)
confirmPasswordInput.addEventListener('input', checkPasswords)
