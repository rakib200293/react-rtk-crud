import { useGetStudentsQuery } from '../features/studentSlice';

const Read = () => {
	const { data: students, isSuccess, isLoading } = useGetStudentsQuery();
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

									<a href='#' className='card-link'>
										Edit
									</a>
									<a href='#' className='card-link text-danger'>
										Delete
									</a>
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
