// FAQ Accordion Functionality
document.addEventListener("DOMContentLoaded", function () {
	const faqItems = document.querySelectorAll('.faq__question');
	
	if (faqItems.length === 0) {
		return; // Exit if no FAQ items found
	}
	
	faqItems.forEach(function(question) {
		question.addEventListener('click', function() {
			const isExpanded = this.getAttribute('aria-expanded') === 'true';
			const answer = document.getElementById(this.getAttribute('aria-controls'));
			
			// Close all other FAQ items
			faqItems.forEach(function(otherQuestion) {
				if (otherQuestion !== question) {
					otherQuestion.setAttribute('aria-expanded', 'false');
					const otherAnswer = document.getElementById(otherQuestion.getAttribute('aria-controls'));
					if (otherAnswer) {
						otherAnswer.setAttribute('aria-hidden', 'true');
					}
				}
			});
			
			// Toggle current FAQ item
			if (isExpanded) {
				this.setAttribute('aria-expanded', 'false');
				answer.setAttribute('aria-hidden', 'true');
			} else {
				this.setAttribute('aria-expanded', 'true');
				answer.setAttribute('aria-hidden', 'false');
			}
		});
		
		// Handle keyboard navigation
		question.addEventListener('keydown', function(e) {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				this.click();
			}
		});
	});
});