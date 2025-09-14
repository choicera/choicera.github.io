// Hero Dynamic Text Animation with CSS Custom Properties
document.addEventListener("DOMContentLoaded", function () {
	const heroDynamic = document.querySelector(".hero-dynamic");
	const heroDynamicTexts = document.querySelectorAll(".hero-dynamic-text");

	if (!heroDynamic || heroDynamicTexts.length === 0) {
		return;
	}

	function getTextWidth(textContent) {
		// Create a span for measurement
		const tempSpan = document.createElement("span");
		tempSpan.textContent = textContent;

		// Style for measurement
		tempSpan.style.visibility = "hidden";
		tempSpan.style.position = "absolute";
		tempSpan.style.top = "-9999px";
		tempSpan.style.left = "-9999px";
		tempSpan.style.whiteSpace = "nowrap";

		if (heroDynamic) {
			const computedStyle = window.getComputedStyle(heroDynamic);
			tempSpan.style.fontSize = computedStyle.fontSize;
			tempSpan.style.fontFamily = computedStyle.fontFamily;
			tempSpan.style.fontWeight = computedStyle.fontWeight;
			tempSpan.style.lineHeight = computedStyle.lineHeight;
			tempSpan.style.letterSpacing = computedStyle.letterSpacing;
		}

		// Add to DOM to get computed styles
		document.body.appendChild(tempSpan);
		const width = tempSpan.offsetWidth;
		document.body.removeChild(tempSpan);

		return width / 16;
	}

	function updateTextWidths() {
		// Measure all text widths
		const textWidths = [];
		heroDynamicTexts.forEach((text, index) => {
			const currentText = text.textContent;
			const width = getTextWidth(currentText);
			textWidths.push(width);
		});

		// Set CSS custom properties for each text width
		heroDynamic.style.setProperty("--text-width-1", textWidths[0] + "rem");
		heroDynamic.style.setProperty("--text-width-2", textWidths[1] + "rem");
		heroDynamic.style.setProperty("--text-width-3", textWidths[2] + "rem");

		heroDynamic.style.width = textWidths[0] + "rem";
	}

	// Initial measurement
	updateTextWidths();

	// Debounced resize handler
	let resizeTimeout;
	function handleResize() {
		clearTimeout(resizeTimeout);
		resizeTimeout = setTimeout(() => {
			updateTextWidths();
		}, 150); // 150ms debounce
	}

	// Add resize event listener
	window.addEventListener("resize", handleResize);
});
