const emailInput = document.querySelector('[data-email]');
const submitBtn = document.querySelector('[data-submit]');
const error = document.querySelector('[data-error]');

const isEmailValid = email => {
	return email.toLowerCase().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) === null;
};

const successTemplate = () => {
	error.classList.remove('u-active');
};

const errorTemplate = () => {
	error.classList.add('u-active');
};

const sendEmail = () => {
	if (!emailInput) return;

	const emailAddressInput = emailInput.value;

	const validEmail = isEmailValid(emailAddressInput);

	!validEmail ? successTemplate() : errorTemplate();
};

submitBtn.addEventListener('click', sendEmail);
submitBtn.addEventListener('keydown', e => {
	if (e.key === 'Enter' || e.key === '') {
		sendEmail();
	}
});
