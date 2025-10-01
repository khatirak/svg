let saturnVisible = false;

document.addEventListener('DOMContentLoaded', () => {
	const saturn = document.getElementById('saturn');
	
	//  Saturn starts hidden
	saturn.style.bottom = '-400px';
	saturnVisible = false;
	
// trigger the animation when the user clicks on the page
	document.addEventListener('click', () => {
		// toggle Saturn visibility on each click
		if (saturnVisible) {
			saturn.style.bottom = '-400px';
			saturnVisible = false;
		} else {
			saturn.style.bottom = '50px';
			saturnVisible = true;
		}
	});
});