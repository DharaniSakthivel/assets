const logoutBtn = document.getElementById('logoutBtn');
const username = document.getElementById('username');
const bio = document.getElementById('bio');

// Check if user is authenticated
if (!localStorage.getItem('authenticated')) {
	window.location.href = 'login.html';
}

// Set welcome message and bio
username.innerText = localStorage.getItem('username');
bio.innerText = localStorage.getItem('bio');

// Logout button click handler
logoutBtn.addEventListener('click', () => {
	localStorage.removeItem('authenticated');
	localStorage.removeItem('username');
	localStorage.removeItem('bio');
	window.location.href = 'login.html';
});