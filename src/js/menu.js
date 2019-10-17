const mainBody = document.querySelector("main");
const mainMenu = document.querySelector("aside");
const menuToggles = [document.querySelector(".menu-header")];

const MENU_OPEN_CLASS = "menu-is-active";

menuToggles.forEach(toggle => {
	// For all togglers
	toggle.addEventListener("click", e => {
		// Prevent link firing
		e.preventDefault();

		mainBody.classList.toggle(MENU_OPEN_CLASS);
		setTimeout(() => {
			mainMenu.classList.toggle(MENU_OPEN_CLASS);
		}, 220);
	});
});
