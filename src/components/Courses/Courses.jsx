import { useEffect, useState } from 'react';
import './Courses.scss';

import { getCourses } from '../../Services/Course.service';
import { Link } from 'react-router-dom';
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
							return (
								<section className='course'>
									<p className='course__header'>Name: {course.name}</p>
									<p>Category: {course.category}</p>
									<p>Rating: {course.rating} / 5</p>

									<p>Syllabus: {course.syllabus}</p>
									<p>Tutor: {course.author}</p>
									<p>Duration: {course.duration}</p>
									<p>Level: {course.level}</p>

									<Link to={`/course/${course.id}`}>Show Course</Link>
								</section>
							);
					  })
					: 'Nothing to see here'}
			</section>
		</>
	);
};

export default Courses;
