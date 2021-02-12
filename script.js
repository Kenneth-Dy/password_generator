document.getElementById('generate').addEventListener('click', () => {
  
  let upper_case = confirm('Do you want to use upper case letters?')
  let lower_case = confirm('Do you want to use lower case letters?')
  let numeric = confirm('Do you want to use numbers?')
  let special = confirm('Do you want to use special characters?')
  let pwrd_len = prompt('Choose the length of your password between 8 and 128:')
  let upper_char = 'QWERTYUIOPASDFGHJKLZXCVBNM'
  let lower_char = 'qwertyuiopasdfghjklzxcvbnm'
  let num_char = '1234567890'
  let spec_char = '!@#$%^&*()_+-=;:,./?'
  let char_sheet = ''
  let generated_password = ''

  if(pwrd_len < 8 || pwrd_len > 128){
    pwrd_len = 8
    alert('Length chosen out of accepted range. Password length set to 8.')
  }

  // if(+pwrd_len === NaN){
  //   pwrd_len = 8
  //   alert('A number was not inputted. Password length set to 8.')
  // }

  if(upper_case){ char_sheet += upper_char}
  if(lower_case){ char_sheet += lower_char}
  if(numeric){ char_sheet += num_char}
  if(special){ char_sheet += spec_char}
  
  for(let i = 0; i < pwrd_len; i++ ){
    generated_password += char_sheet[Math.floor(Math.random() * char_sheet.length)]
  }

  document.getElementById('password').textContent = generated_password
})