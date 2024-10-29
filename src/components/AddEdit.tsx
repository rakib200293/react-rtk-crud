import { useEffect, useState } from 'react';
import { Student } from '../features/models/student.model';
import {
	useAddStudentMutation,
	useGetStudentQuery,
	useUpdateStudentMutation,
} from '../features/studentSlice';
import { useNavigate, useParams } from 'react-router-dom';

const Create = () => {
	const [students, setStudents] = useState<Student>(Object);
	const [isEdit, setIsEdit] = useState<boolean>(false);
	const [addStudent] = useAddStudentMutation();
	const [updateStudent] = useUpdateStudentMutation();
	const navigate = useNavigate();
	const { id } = useParams();
	const { data } = useGetStudentQuery(id!);

	useEffect(() => {
		if (id && data) {
			setIsEdit(true);
			setStudents({ ...data });
		}
	}, [id, data]);

	const handleChane = (e: React.ChangeEvent<HTMLInputElement>) => {
		setStudents({ ...students, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (isEdit) {
			await updateStudent(students);
		} else {
			await addStudent(students);
		}
		navigate('/');
	};

	return (
		<div className='container mx-auto mt-3'>
			<h2 className='fs-4 mb-3'>{isEdit ? 'Edit' : 'Add'} Student</h2>
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
								value={students.studentName || ''}
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
								value={students.studentEmail || ''}
								onChange={handleChane}
							/>
						</div>

						<button type='submit' className='btn btn-primary'>
							{isEdit ? 'Update' : 'Add'}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Create;
