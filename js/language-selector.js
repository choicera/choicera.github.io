// Language Selector Functionality
class LanguageSelector {
	constructor() {
		this.button = document.getElementById("lang-button");
		this.overlay = document.getElementById("lang-overlay");
		this.isOpen = false;
		this.mobileMenu = null; // Will be set by MobileMenu

		if (this.button && this.overlay) {
			this.init();
		}
	}

	setMobileMenu(mobileMenu) {
		this.mobileMenu = mobileMenu;
	}

	init() {
		// Toggle overlay on button click
		this.button.addEventListener("click", (e) => {
			e.preventDefault();
			e.stopPropagation();
			this.toggle();
		});

		// Close overlay when clicking outside
		document.addEventListener("click", (e) => {
			if (
				this.isOpen &&
				!this.button.contains(e.target) &&
				!this.overlay.contains(e.target)
			) {
				this.close();
			}
		});

		// Close overlay on escape key
		document.addEventListener("keydown", (e) => {
			if (e.key === "Escape" && this.isOpen) {
				this.close();
			}
		});

		// Handle keyboard navigation
		this.overlay.addEventListener("keydown", (e) => {
			if (e.key === "Escape") {
				this.close();
				this.button.focus();
			}
		});
	}

	toggle() {
		if (this.isOpen) {
			this.close();
		} else {
			this.open();
		}
	}

	open() {
		this.isOpen = true;
		this.overlay.classList.add("is-open");
		this.button.setAttribute("aria-expanded", "true");
		this.overlay.setAttribute("aria-hidden", "false");

		// Close mobile menu if it's open
		if (this.mobileMenu && this.mobileMenu.isOpen) {
			this.mobileMenu.close();
		}

		// Focus first language option
		const firstOption = this.overlay.querySelector(
			".appbar__lang-option:not(.is-active)",
		);
		if (firstOption) {
			firstOption.focus();
		}
	}

	close() {
		this.isOpen = false;
		this.overlay.classList.remove("is-open");
		this.button.setAttribute("aria-expanded", "false");
		this.overlay.setAttribute("aria-hidden", "true");
	}
}

// Mobile Menu Functionality
class MobileMenu {
	constructor() {
		this.button = document.getElementById("menu-button");
		this.overlay = document.getElementById("menu-overlay");
		this.isOpen = false;
		this.languageSelector = null; // Will be set by LanguageSelector

		if (this.button && this.overlay) {
			this.init();
		}
	}

	setLanguageSelector(languageSelector) {
		this.languageSelector = languageSelector;
	}

	init() {
		// Toggle overlay on button click
		this.button.addEventListener("click", (e) => {
			e.preventDefault();
			e.stopPropagation();
			this.toggle();
		});

		// Close overlay when clicking outside
		document.addEventListener("click", (e) => {
			if (
				this.isOpen &&
				!this.button.contains(e.target) &&
				!this.overlay.contains(e.target)
			) {
				this.close();
			}
		});

		// Close overlay on escape key
		document.addEventListener("keydown", (e) => {
			if (e.key === "Escape" && this.isOpen) {
				this.close();
			}
		});

		// Handle keyboard navigation
		this.overlay.addEventListener("keydown", (e) => {
			if (e.key === "Escape") {
				this.close();
				this.button.focus();
			}
		});
	}

	toggle() {
		if (this.isOpen) {
			this.close();
		} else {
			this.open();
		}
	}

	open() {
		this.isOpen = true;
		this.overlay.classList.add("is-open");
		this.button.setAttribute("aria-expanded", "true");
		this.overlay.setAttribute("aria-hidden", "false");

		// Close language selector if it's open
		if (this.languageSelector && this.languageSelector.isOpen) {
			this.languageSelector.close();
		}

		// Focus first menu option
		const firstOption = this.overlay.querySelector(
			".appbar__menu-option:not(.is-active)",
		);
		if (firstOption) {
			firstOption.focus();
		}
	}

	close() {
		this.isOpen = false;
		this.overlay.classList.remove("is-open");
		this.button.setAttribute("aria-expanded", "false");
		this.overlay.setAttribute("aria-hidden", "true");
	}
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
	const languageSelector = new LanguageSelector();
	const mobileMenu = new MobileMenu();

	// Set cross-references
	languageSelector.setMobileMenu(mobileMenu);
	mobileMenu.setLanguageSelector(languageSelector);
});
