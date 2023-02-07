import { useEffect, useState } from 'react';
import './Profile.scss';
import { getProfile } from '../../Services/Student.service';

const Profile = () => {
	const [student, setStudent] = useState(null);

	const loadStudent = async () => {
		const student = await getProfile();

		setStudent(student);
	};

	useEffect(() => {
		loadStudent();
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
		</div>
	);
};

export default Profile;
