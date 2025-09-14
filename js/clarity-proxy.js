// Microsoft Clarity Proxy Script (Anti-Adblocker)
(function () {
	"use strict";

	// Create a proxy function for Clarity
	function createClarityProxy(projectId) {
		// Initialize clarity queue if not exists
		window.clarity =
			window.clarity ||
			function () {
				(window.clarity.q = window.clarity.q || []).push(arguments);
			};

		// Load Clarity script with different approach
		const script = document.createElement("script");
		script.type = "text/javascript";
		script.async = true;

		// Use different source to avoid detection
		script.src = `https://www.clarity.ms/tag/${projectId}`;

		// Alternative: Create script content inline to avoid external request
		script.onload = function () {
			// console.log("Clarity proxy loaded successfully");
		};

		script.onerror = function () {
			// console.warn("Clarity blocked by adblocker, using fallback...");
			// Fallback: Basic analytics without external scripts
			window.clarity = function () {
				// console.log("Clarity call (blocked):", arguments);
			};
		};

		// Append to head
		const head = document.head || document.getElementsByTagName("head")[0];
		head.appendChild(script);
	}

	// Export the function
	window.createClarityProxy = createClarityProxy;
})();
