import React from 'react';

import {Icons} from 'helpers/iconsHelper.ts';

const FileUpload: React.FC<{ field: any; form: any }> = ({ field, form }) => {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		form.setFieldValue(field.name, event.currentTarget.files && event.currentTarget.files[0]);
	};

	return (
		<div className='w-full border-solid border-2 border-black rounded-lg p-2'>
			<label className='flex items-center justify-center gap-2'>
				<img src={Icons.cv} alt='Upload icon' />
				<span>Upload CV</span>
				<input type='file' onChange={handleChange} style={{ display: 'none' }} />
			</label>
			{field.value && <div>Uploaded file: {field.value.name}</div>}
		</div>
	);
};

export default FileUpload;
