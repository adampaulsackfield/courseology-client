import { useContext, useEffect, useState } from 'react';
import './Profile.scss';
import { getProfile } from '../../Services/Student.service';
import { getEnrollments } from '../../Services/Enrollment.service';

// Context
import { StudentContext } from '../../context/StudentContext';

const Profile = () => {
	// const [student, setStudent] = useState(null);
	const [enrollments, setEnrollments] = useState(null);

	const { student, setStudent } = useContext(StudentContext);

	const loadStudent = async () => {
		const student = await getProfile();

		setStudent(student);
	};

	const loadEnrollments = async () => {
		const enrollments = await getEnrollments();

		setEnrollments(enrollments);
	};

	useEffect(() => {
		loadStudent();
		loadEnrollments();
	}, []);

	return (
		<div>
			{student && (
				<div>
					<p>{student.name}</p>
					<p>{student.email}</p>
					<p>{student.interestedIn}</p>
				</div>
			)}
			<ul>
				{enrollments &&
					enrollments.map((enrollment) => {
						return (
							<li key={enrollment.id}>
								<p>Course Name: {enrollment.name}</p>
								<p>Course Syllabus: {enrollment.syllabus}</p>
								<p>Course Author: {enrollment.author}</p>{' '}
							</li>
						);
					})}
			</ul>
		</div>
	);
};

export default Profile;
