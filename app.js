// Initialise Github
const github = new Github;

// Initialise UI
const ui = new UI;

// Search Input
const searchUser = document.getElementById('searchUser');

// Search Input event Listener
searchUser.addEventListener('keyup', (e) => {
// Get Input Text
const userText = e.target.value;
if(userText != ''){
  // Make http call
  github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found'){
        // Show alert
        ui.showAlert('user not found', 'alert alert-danger');
      } else {
        // Show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    })
} else {
  // Clear Profile
  ui.clearProfile()
}
});