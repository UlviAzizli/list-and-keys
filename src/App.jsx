// App.jsx

import "./App.css";
import CourseList from "./component/CourseList";
import List from "./component/List";
import ProjectList from "./component/ProjectList";
import SimpleList from "./component/SimpleList";
import StudentList from "./component/StudentList";

function App() {
  return (
    <div className="App">
      <SimpleList />
      <StudentList />
      <List />
      <CourseList />
      <ProjectList />
    </div>
  );
}

export default App;
