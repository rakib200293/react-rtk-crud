import { useState } from 'react';
import { Student } from '../features/models/student.model';
import { useAddStudentMutation } from '../features/studentSlice';
import { useNavigate } from 'react-router-dom';

const Create = () => {
	const [students, setStudents] = useState<Student>(Object);
	const [addStudent] = useAddStudentMutation();
	const navigate = useNavigate();

	const handleChane = (e: React.ChangeEvent<HTMLInputElement>) => {
		setStudents({ ...students, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		await addStudent(students);
		navigate('/');
	};

	return (
		<div className='container mx-auto mt-3'>
			<h2 className='fs-4 mb-3'>Create Student</h2>
			<div className='row'>
				<div className='col-6'>
					<form onSubmit={handleSubmit}>
						<div className='mb-3'>
							<label htmlFor='exampleInputEmail1' className='form-label'>
								Student Name
							</label>
							<input
								type='name'
								name='studentName'
								className='form-control'
								onChange={handleChane}
							/>
						</div>
						<div className='mb-3'>
							<label htmlFor='exampleInputPassword1' className='form-label'>
								Student Email
							</label>
							<input
								type='email'
								className='form-control'
								name='studentEmail'
								onChange={handleChane}
							/>
						</div>

						<button type='submit' className='btn btn-primary'>
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Create;
