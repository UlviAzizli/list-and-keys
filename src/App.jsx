// App.jsx

import "./App.css";
import CourseList from "./component/CourseList";
import List from "./component/List";
import ProjectList from "./component/ProjectList";
import Results from "./component/Results";
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
      <Results />
    </div>
  );
}

export default App;
