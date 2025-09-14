// Microsoft Clarity Integration with Klaro! Consent
(function () {
	"use strict";

	// console.log("=== CLARITY INTEGRATION STARTING ===");
	// console.log("Window metadata:", window.choiceraMetadata);

	// Get Clarity Project ID from metadata
	const CLARITY_PROJECT_ID = window.choiceraMetadata?.clarityProjectId;
	// console.log("Clarity Project ID:", CLARITY_PROJECT_ID);

	// Function to load Microsoft Clarity
	function loadClarity() {
		if (typeof clarity !== "undefined") {
			return; // Already loaded
		}

		if (
			!CLARITY_PROJECT_ID ||
			CLARITY_PROJECT_ID === "YOUR_CLARITY_PROJECT_ID"
		) {
			// console.warn(
			// 	"Microsoft Clarity Project ID not configured in metadata.js",
			// );
			return;
		}

		// Microsoft Clarity tracking code with adblocker handling
		(function (c, l, a, r, i, t, y) {
			c[a] =
				c[a] ||
				function () {
					(c[a].q = c[a].q || []).push(arguments);
				};
			t = l.createElement(r);
			t.async = 1;
			t.src = "https://www.clarity.ms/tag/" + i;

			// Handle adblocker detection
			t.onerror = function () {
				// console.warn("Microsoft Clarity blocked by adblocker");
				// Create a dummy clarity function to prevent errors
				c[a] = function () {
					// console.log("Clarity call (blocked by adblocker):", arguments);
				};
			};

			t.onload = function () {
				// console.log("Microsoft Clarity loaded successfully");
			};

			y = l.getElementsByTagName(r)[0];
			y.parentNode.insertBefore(t, y);
		})(window, document, "clarity", "script", CLARITY_PROJECT_ID);
	}

	// Function to handle consent change
	function handleConsentChange() {
		// console.log("Checking consent status...");
		if (window.klaro && window.klaro.getManager) {
			const manager = window.klaro.getManager();
			const consent = manager.getConsent("microsoft-clarity");
			// console.log("Microsoft Clarity consent:", consent);

			if (consent) {
				// console.log("Consent given, loading Clarity...");
				loadClarity();
			} else {
				// console.log("Consent not given for Microsoft Clarity");
			}
		} else {
			// console.log("Klaro manager not available yet");
		}
	}

	// Initialize when Klaro is ready
	function initializeClarity() {
		// console.log("Initializing Clarity integration...");
		if (window.klaro && window.klaro.getManager) {
			// console.log("Klaro manager found, setting up listeners...");

			// Check initial consent state
			handleConsentChange();

			// Listen for consent changes with multiple event types
			document.addEventListener("klaroConsentChanged", function (e) {
				// console.log("Klaro consent changed event:", e);
				handleConsentChange();
			});

			// Also listen for the older event name (for compatibility)
			document.addEventListener("klaro-consent-changed", function (e) {
				// console.log("Klaro consent changed (old event):", e);
				handleConsentChange();
			});

			// Listen for specific app consent changes
			document.addEventListener("klaroAppConsentChanged", function (e) {
				// console.log("Klaro app consent changed:", e);
				if (e.detail && e.detail.app === "microsoft-clarity") {
					handleConsentChange();
				}
			});
		} else {
			// console.log("Klaro not ready yet, retrying...");
			// Retry if Klaro is not ready yet
			setTimeout(initializeClarity, 100);
		}
	}

	// Fallback: Check consent periodically in case events don't fire
	function checkConsentPeriodically() {
		if (window.klaro && window.klaro.getManager) {
			const manager = window.klaro.getManager();
			const consent = manager.getConsent("microsoft-clarity");

			if (consent && typeof clarity === "undefined") {
				// console.log("Fallback: Found consent, loading Clarity...");
				loadClarity();
				return; // Stop checking once loaded
			}
		}

		// Check again in 2 seconds if not loaded yet
		if (typeof clarity === "undefined") {
			setTimeout(checkConsentPeriodically, 2000);
		}
	}

	// Start initialization when DOM is ready
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", function () {
			initializeClarity();
			// Start fallback checking after 3 seconds
			setTimeout(checkConsentPeriodically, 3000);
		});
	} else {
		initializeClarity();
		// Start fallback checking after 3 seconds
		setTimeout(checkConsentPeriodically, 3000);
	}
})();
