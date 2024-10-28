import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Student } from './models/student.model';

export const studentApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://671b618f2c842d92c37fa769.mockapi.io',
	}),
	endpoints: (builder) => ({
		getStudents: builder.query<Student[], void>({
			query: () => '/students',
		}),
		addStudent: builder.mutation<void, Student>({
			query: (student) => ({
				url: '/students',
				method: 'POST',
				body: student,
			}),
		}),
	}),
});

export const { useGetStudentsQuery, useAddStudentMutation } = studentApi;
