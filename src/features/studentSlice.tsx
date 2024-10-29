import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Student } from './models/student.model';

export const studentApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://671b618f2c842d92c37fa769.mockapi.io',
	}),
	tagTypes: ['Student'],

	endpoints: (builder) => ({
		getStudents: builder.query<Student[], void>({
			query: () => '/students',
			providesTags: ['Student'],
		}),
		getStudent: builder.query<Student, string>({
			query: (id) => `/students/${id}`,
			providesTags: ['Student'],
		}),
		addStudent: builder.mutation<void, Student>({
			query: (student) => ({
				url: '/students',
				method: 'POST',
				body: student,
			}),
			invalidatesTags: ['Student'],
		}),
		updateStudent: builder.mutation<void, Student>({
			query: ({ id, ...rest }) => ({
				url: `/students/${id}`,
				method: 'PUT',
				body: rest,
			}),
			invalidatesTags: ['Student'],
		}),
		deleteStudent: builder.mutation<void, string>({
			query: (id) => ({
				url: `/students/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Student'],
		}),
	}),
});

export const {
	useGetStudentsQuery,
	useGetStudentQuery,
	useAddStudentMutation,
	useUpdateStudentMutation,
	useDeleteStudentMutation,
} = studentApi;
