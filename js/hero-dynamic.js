// Hero Dynamic Text Animation with CSS Custom Properties
document.addEventListener("DOMContentLoaded", function () {
	const heroDynamicContainers = Array.from(
		document.querySelectorAll(".hero-dynamic")
	);

	// Subtitle Part2: rotate text without animation (content swap only)
	const subtitleNode = document.getElementById("subtitle-part2-text");
	if (subtitleNode) {
		const variant1 = subtitleNode.textContent || "";
		const variant2 = subtitleNode.getAttribute("data-variant2") || variant1;
		const variant3 = subtitleNode.getAttribute("data-variant3") || variant2;
		const variants = [variant1, variant2, variant3];
		let subtitleIndex = 0;

		function rotateSubtitle() {
			subtitleIndex = (subtitleIndex + 1) % variants.length;
			subtitleNode.textContent = variants[subtitleIndex];
		}

		// Keep in lockstep with hero-dynamic animation: 0-3s, 3-6s, 6-9s
		setInterval(rotateSubtitle, 3000);
	}

	if (heroDynamicContainers.length === 0) {
		return;
	}

	function getTextWidth(textContent, referenceElement) {
		// Create a span for measurement
		const tempSpan = document.createElement("span");
		tempSpan.textContent = textContent;

		// Style for measurement
		tempSpan.style.visibility = "hidden";
		tempSpan.style.position = "absolute";
		tempSpan.style.top = "-9999px";
		tempSpan.style.left = "-9999px";
		tempSpan.style.whiteSpace = "nowrap";

		if (referenceElement) {
			const computedStyle = window.getComputedStyle(referenceElement);
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

		return width / 16; // px → rem (assuming 16px root)
	}

	function updateContainerTextWidths(containerElement) {
		const containerTexts = containerElement.querySelectorAll(
			".hero-dynamic-text"
		);
		if (containerTexts.length === 0) return;

		const textWidths = [];
		containerTexts.forEach((textNode) => {
			const currentText = textNode.textContent || "";
			const widthRem = getTextWidth(currentText, containerElement);
			textWidths.push(widthRem);
		});

		// Guard against missing entries
		const w1 = textWidths[0] || 0;
		const w2 = textWidths[1] || w1;
		const w3 = textWidths[2] || w2;

		containerElement.style.setProperty("--text-width-1", w1 + "rem");
		containerElement.style.setProperty("--text-width-2", w2 + "rem");
		containerElement.style.setProperty("--text-width-3", w3 + "rem");

		// Initialize container width to the first text
		containerElement.style.width = w1 + "rem";
	}

	function updateAllContainers() {
		heroDynamicContainers.forEach(updateContainerTextWidths);
	}

	// Initial measurement
	updateAllContainers();

	// Debounced resize handler
	let resizeTimeout;
	function handleResize() {
		clearTimeout(resizeTimeout);
		resizeTimeout = setTimeout(() => {
			updateAllContainers();
		}, 150); // 150ms debounce
	}

	// Add resize event listener
	window.addEventListener("resize", handleResize);
});
