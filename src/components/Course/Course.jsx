import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Course.scss';

// Services
import { getCourseById } from '../../Services/Course.service';
import { enrollCourse } from '../../Services/Enrollment.service';
import { toast } from 'react-toastify';

const Course = () => {
	const [course, setCourse] = useState(null);
	const { id } = useParams();

	const loadCourse = async () => {
		const course = await getCourseById(id);

		setCourse(course);
	};

	const handleEnroll = async () => {
		const response = await enrollCourse(id);

		if (response === 'Success') {
			toast.success(`Successfully enrolled in ${course.name}`);
		} else {
			toast.warning('Something went wrong!');
		}
	};

	useEffect(() => {
		if (id) {
			loadCourse();
		}
	});

	return (
		<section className='course'>
			{course && (
				<>
					<p className='course__header'>Name: {course.name}</p>
					<p>Category: {course.category}</p>
					<p>Rating: {course.rating} / 5</p>

					<p>Syllabus: {course.syllabus}</p>
					<p>Tutor: {course.author}</p>
					<p>Duration: {course.duration} Weeks</p>
					<p>Level: {course.level}</p>
					<button onClick={handleEnroll}>Enroll</button>
				</>
			)}
		</section>
	);
};

export default Course;
