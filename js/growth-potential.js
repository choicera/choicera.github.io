document.addEventListener("DOMContentLoaded", function () {
	const slider = document.getElementById("investmentSlider");
	const sliderValue = document.getElementById("sliderValue");

	// Exit early if required elements don't exist
	if (!slider || !sliderValue) {
		return;
	}

	// Detect current language from URL or HTML lang attribute
	function getCurrentLanguage() {
		const htmlLang = document.documentElement.lang;
		const pathname = window.location.pathname;

		// Check URL path for language prefix
		if (pathname.startsWith("/de/") || pathname === "/de") {
			return "de-DE";
		} else if (pathname.startsWith("/fr/") || pathname === "/fr") {
			return "fr-FR";
		} else if (pathname.startsWith("/nl/") || pathname === "/nl") {
			return "nl-NL";
		} else if (pathname.startsWith("/es/") || pathname === "/es") {
			return "es-ES";
		} else if (pathname.startsWith("/it/") || pathname === "/it") {
			return "it-IT";
		} else if (pathname.startsWith("/ru/") || pathname === "/ru") {
			return "ru-RU";
		} else if (pathname.startsWith("/pl/") || pathname === "/pl") {
			return "pl-PL";
		} else if (htmlLang && htmlLang.startsWith("de")) {
			return "de-DE";
		} else if (htmlLang && htmlLang.startsWith("fr")) {
			return "fr-FR";
		} else if (htmlLang && htmlLang.startsWith("nl")) {
			return "nl-NL";
		} else if (htmlLang && htmlLang.startsWith("es")) {
			return "es-ES";
		} else if (htmlLang && htmlLang.startsWith("it")) {
			return "it-IT";
		} else if (htmlLang && htmlLang.startsWith("ru")) {
			return "ru-RU";
		} else if (htmlLang && htmlLang.startsWith("pl")) {
			return "pl-PL";
		}

		// Default to English
		return "en-US";
	}

	// Scenario multipliers
	const scenarios = [
		{ id: "value0x", multiplier: 0 },
		{ id: "value1x", multiplier: 1 },
		{ id: "value3x", multiplier: 3 },
		{ id: "value10x", multiplier: 10 },
		{ id: "value20x", multiplier: 20 },
		{ id: "value100x", multiplier: 100 },
	];

	function formatCurrency(amount) {
		const locale = getCurrentLanguage();
		return new Intl.NumberFormat(locale, {
			style: "currency",
			currency: "EUR",
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		}).format(amount);
	}

	function updateSliderProgress() {
		const value = slider.value;
		const min = slider.min;
		const max = slider.max;
		const progress = ((value - min) / (max - min)) * 100;
		slider.style.setProperty("--slider-progress", progress + "%");
	}

	function updateValues() {
		const kickbackAmount = parseInt(slider.value);
		
		// Calculate share value with 30% discount (Early Bird offer)
		const shareValueWithDiscount = Math.round(kickbackAmount * 1.3);

		// Update slider display to show share value with discount
		sliderValue.textContent = formatCurrency(shareValueWithDiscount);

		// Update scenario values based on share value with discount
		scenarios.forEach((scenario) => {
			const element = document.getElementById(scenario.id);
			if (element) {
				const finalValue = shareValueWithDiscount * scenario.multiplier;
				element.textContent = formatCurrency(finalValue);
			}
		});
	}

	// Initialize
	updateSliderProgress();
	updateValues();

	// Event listeners
	slider.addEventListener("input", function () {
		updateSliderProgress();
		updateValues();
	});

	slider.addEventListener("change", function () {
		updateSliderProgress();
		updateValues();
	});
});
