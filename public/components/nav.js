// HAMBURGER MENU

const menu_btn = document.querySelector('.hamburger');
const nav_menu = document.querySelector('.navigation');

// Toggling active class so styles will change
menu_btn.addEventListener('click', function () {
	menu_btn.classList.toggle('is-active');
	nav_menu.classList.toggle('is-active');
});

// SESSION FUNCTIONALITY

const session_start = document.querySelector('#start_sesh');
session_start.addEventListener('click', Start)

const pomo_modal = document.querySelector('.pomodoro_modal');

function Start(){
	
	// Displaying the pomodoro timer and changing the colour of the window
	pomo_modal.style.display = 'block';
	document.body.style.backgroundColor = "#ECFFF5";
	
	// Changing style and text of the session button
	session_start.style.color = '#95C6AC';
	session_start.style.backgroundColor = 'white';
	session_start.textContent = "end session";
	
	// Removing event listener that runs this function on click and adding one that 
	// runs the Stop function
	session_start.removeEventListener("click", Start);
	session_start.addEventListener("click", Stop);
}

function Stop(){
	
	// Hiding the pomodoro timer and changing the colour of the window back
	// to white
	pomo_modal.style.display = 'none';
	document.body.style.backgroundColor = "#FFFFFF";
	
	// Changing style and text of the session button
	session_start.style.color = 'white';
	session_start.style.backgroundColor = '#95C6AC';
	session_start.textContent = "start session";
	
	// Removing event listener that runs this function on click and adding one that 
	// runs the Start function
	session_start.removeEventListener("click", Stop);
	session_start.addEventListener("click", Start);
}