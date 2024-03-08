import { FormValues } from './formValues.types.ts';

export const validate = (values: FormValues): Partial<FormValues> => {
	const errors: Partial<FormValues> = {};

	if (!values.name || values.name.length < 2) {
		errors.name = 'Required';
	}

	if (!values.phone || values.phone.length < 10) {
		errors.phone = 'Required';
	}

	if (!values.email) {
		errors.email = 'Required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email address';
	}

	return errors;
};
