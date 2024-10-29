import { NavLink } from 'react-router-dom';
import {
	useDeleteStudentMutation,
	useGetStudentsQuery,
} from '../features/studentSlice';

const Read = () => {
	const { data: students, isSuccess, isLoading } = useGetStudentsQuery();
	const [deleteStudent] = useDeleteStudentMutation();

	return (
		<div className='container mx-auto mt-3'>
			<div className='row'>
				<h2 className='fs-4 mb-3'>All Students</h2>
				{isLoading && <span>Loading...</span>}
				{isSuccess &&
					students?.map((item) => (
						<div className='col-3 mb-3'>
							<div className='card' style={{ width: '18rem' }}>
								<div className='card-body'>
									<h5 className='card-title'>{item?.studentName}</h5>
									<h6 className='card-subtitle mb-2 text-body-secondary'>
										{item?.studentEmail}
									</h6>

									<button
										type='button'
										className='btn btn-primary btn-sm me-2 mt-2'
									>
										<NavLink
											to={`/edit/${item?.id}`}
											className='text-white link-offset-0 link-underline-light'
										>
											Edit
										</NavLink>
									</button>
									<button
										type='button'
										className='btn btn-danger btn-sm mt-2'
										onClick={() => deleteStudent(item.id)}
									>
										Delete
									</button>
									<div></div>
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default Read;
