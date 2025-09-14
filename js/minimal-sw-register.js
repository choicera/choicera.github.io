// Minimal Service Worker registration
// Only registers the service worker - no update management

if ("serviceWorker" in navigator) {
	// Get path prefix from data attribute or use default
	const pathPrefix =
		document.documentElement.getAttribute("data-path-prefix") || "";
	const swPath = pathPrefix + "minimal-sw.js";

	navigator.serviceWorker
		.register(swPath)
		.then((registration) => {
			// Check for updates when page loads
			registration.update();

			// Listen for updates
			registration.addEventListener("updatefound", () => {
				const newWorker = registration.installing;
				if (newWorker) {
					newWorker.addEventListener("statechange", () => {
						if (
							newWorker.state === "installed" &&
							navigator.serviceWorker.controller
						) {
							// New version available - show simple notification
							if (confirm("New version available. Reload to update?")) {
								window.location.reload();
							}
						}
					});
				}
			});
		})
		.catch((error) => {
			console.error("Service Worker registration failed:", error);
		});
}
