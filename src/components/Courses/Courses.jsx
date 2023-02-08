import { useEffect, useState } from 'react';
import './Courses.scss';

import { getCourses } from '../../Services/Course.service';
import Course from '../Course/Course';
const Courses = () => {
	const [courses, setCourses] = useState(null);

	const loadCourses = async () => {
		const courses = await getCourses();

		setCourses(courses);
	};

	useEffect(() => {
		loadCourses();
	}, []);

	return (
		<>
			<p className='header'>Course Directory</p>

			<section className='courses'>
				{courses
					? courses.map((course) => {
							console.log(course);
							return <Course key={course.id} course={course} />;
					  })
					: 'Nothing to see here'}
			</section>
		</>
	);
};

export default Courses;
