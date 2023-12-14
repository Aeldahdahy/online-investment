document.querySelector('.img__btn').addEventListener('click', function(event) {
  const isSubmitButton = event.target.type === 'submit' && (event.target.name === 'signup_submit_button' || event.target.name === 'forget_submit_button');
  
  if (isSubmitButton) {
    event.preventDefault();
  } else {
    document.querySelector('.cont').classList.toggle('s--signup');
  }
});


document.addEventListener('DOMContentLoaded', function() {
  var dropdown = document.getElementById('user_profile_drop_down');
  var profileItems = dropdown.querySelectorAll('ul li');

  dropdown.addEventListener('click', function() {
    profileItems.forEach(function(item) {
      item.style.display = (item.style.display === 'none' || item.style.display === '') ? 'block' : 'none';
    });
  });
});

function updateText() {
    var description = document.getElementById('description');
    var user_type1 = document.getElementById('user_type1');
    
    if (user_type1.checked) {
      description.textContent = 'Invest in our cutting-edge online investment system for a seamless and secure journey to financial growth.';
    } else {
      description.textContent = 'Entrepreneurial engagement in the online investment system involves strategic and innovative initiatives to identify and capitalize on lucrative opportunities within the digital financial landscape.';
    }
}

document.getElementById('user_type1').addEventListener('change', updateText);
document.getElementById('user_type2').addEventListener('change', updateText);

updateText();


function showForgetPasswordForm() {
  var signinform = document.getElementById('signInForm');
  var forgetform = document.getElementById('forgetPasswordForm'); 
  console.log("Function called");
  if (signinform.style.display === 'block') {
    signinform.style.display = 'none';
  }
  if (forgetform.style.display === 'none') {
    forgetform.style.display = 'block';
  }
}


function goBack() {
  var signinform = document.getElementById('signInForm');
  var forgetform = document.getElementById('forgetPasswordForm'); 
  console.log("Go back called");
  if (signinform.style.display === 'none') {
    signinform.style.display = 'block';
  }
  if (forgetform.style.display === 'block') {
    forgetform.style.display = 'none';
  }
}



