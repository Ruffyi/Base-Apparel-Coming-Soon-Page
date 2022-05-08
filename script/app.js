const emailInput = document.querySelector('[data-email]');
const submitBtn = document.querySelector('[data-submit]');

const isEmailValid = email => {
	return email.toLowerCase().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) === null;
};

const successTemplate = validEmail => {
	console.log('address');
};

const errorTemplate = () => {
	console.log('error');
};

const sendEmail = () => {
	if (!emailInput) return;

	const emailAddressInput = emailInput.value;

	const validEmail = isEmailValid(emailAddressInput);

	!validEmail ? successTemplate(emailAddressInput) : errorTemplate();
};

submitBtn.addEventListener('click', sendEmail);
