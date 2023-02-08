import './Course.scss';

const Course = ({ course: { name, category, price, syllabus, author } }) => {
	return (
		<section className='course'>
			<p className='course__header'>Name: {name}</p>
			<p>Category: {category}</p>
			<p>Price: {price}</p>

			<p>Syllabus: {syllabus}</p>
			<p>Author: {author}</p>
			<button>View Course</button>
		</section>
	);
};

export default Course;
