const formData = {
	email: "",
	message: "",
}

const feedbackForm = document.querySelector('.feedback-form');
const inputEmail = feedbackForm.elements.email;
const textareaMessage = feedbackForm.elements.message;
const localStorageKey = 'feedback-form-state';

const savedData = JSON.parse(localStorage.getItem(localStorageKey));
if (savedData) {
	const savedDataEmail = savedData.email ?? '';
	const savedDataMessage = savedData.message ?? '';

	if (savedDataEmail) {
		inputEmail.value = savedDataEmail;
		formData.email = savedDataEmail;
	}
	if (savedDataMessage) {
		textareaMessage.value = savedDataMessage;
		formData.message = savedDataMessage;
	}
}

feedbackForm.addEventListener('input', event => {
	if (event.target === inputEmail) {
		formData.email = event.target.value.trim();
	}
	else if (event.target === textareaMessage) {
		formData.message = event.target.value.trim();
	}
	localStorage.setItem(localStorageKey, JSON.stringify(formData));
})

feedbackForm.addEventListener('submit', event => {
	event.preventDefault();

	const form = event.target;
	if (formData.email === '' || formData.message === '') {
		return alert('Fill please all fields');
	}

	console.log(formData);

	form.reset();
	formData.email = "";
	formData.message = "";
	localStorage.removeItem(localStorageKey);
})