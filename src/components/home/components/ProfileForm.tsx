import React, { useState } from 'react';
import axios from 'axios';
import { Formik, Field, Form, ErrorMessage } from 'formik';

import {FormValues} from 'components/forms/formValues.types.ts';
import {validate} from 'components/forms/validation.ts';

import FileUpload from 'components/forms/FileUpload.tsx';


const ProfileForm: React.FC = () => {
	const initialValues: FormValues = {
		name: '',
		phone: '',
		email: '',
		cv: null,
	};

	const [formStatus, setFormStatus] = useState<string>('');
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

	const onSubmit = (values: FormValues, { resetForm }: { resetForm: () => void }) => {
		setIsSubmitting(true);

		if (Object.keys(validate(values)).length === 0) {
			axios
				.post('https://jsonplaceholder.typicode.com/posts', {
					title: 'Form',
					body: '...',
					userId: 1,
				})
				.then(() => {
					console.log('Form successfully submitted:', {
						name: values.name,
						phone: values.phone,
						email: values.email,
						cv: values.cv ? values.cv : null,
					});
					setFormStatus('Form successfully submitted!');
					resetForm();
				})
				.catch((error) => {
					console.error('Failed to submit form:', error);
					setFormStatus('Failed to submit form. Please try again.');
				})
				.finally(() => {
					setIsSubmitting(false);
					setTimeout(() => {
						setFormStatus('');
					}, 5000);
				});
		} else {
			setIsSubmitting(false);
			setFormStatus('Form validation failed. Please check your input.');
			setTimeout(() => {
				setFormStatus('');
			}, 5000);
		}
	};

	return (
		<div className='flex flex-col gap-5 w-2/3'>
			<h1 className='text-3xl font-bold'>Profile Page</h1>
			<Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
				{() => (
					<Form className='flex flex-col gap-5'>
						<Field
							type='text'
							name='name'
							placeholder='Full Name'
							className='w-full border-solid border-2 border-black rounded-lg p-2'
						/>
						<ErrorMessage name='name' component='div' className='text-red-500' />
						<Field
							type='tel'
							name='phone'
							placeholder='Phone'
							className='w-full border-solid border-2 border-black rounded-lg p-2'
						/>
						<ErrorMessage name='phone' component='div' className='text-red-500' />
						<Field
							type='email'
							name='email'
							placeholder='Email'
							className='w-full border-solid border-2 border-black rounded-lg p-2'
						/>
						<ErrorMessage name='email' component='div' className='text-red-500' />
						<Field name='cv' component={FileUpload} />
						<ErrorMessage name='cv' component='div' className='text-red-500' />
						<button
							type='submit'
							disabled={isSubmitting}
							className='rounded-lg bg-sky-950 p-2 text-white w-32'>
							{isSubmitting ? 'Submitting...' : 'Save Changes'}
						</button>
					</Form>
				)}
			</Formik>
			{formStatus && (
				<div className={formStatus.includes('successfully') ? 'text-green-500' : 'text-red-500'}>
					{formStatus}
				</div>
			)}
		</div>
	);
};

export default ProfileForm;
