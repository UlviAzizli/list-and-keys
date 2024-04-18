const courses = ["Web Development", "Data Analytics", "UX/UI", "Cybersecurity"];

function CourseList() {
  return (
    <div className="list">
      <h2>List of course</h2>
      {courses.map((course, index) => {
        return <p key={index}> {course} </p>;
      })}
    </div>
  );
}
export default CourseList;
