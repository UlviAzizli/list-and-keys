// ./src/components/List.jsx

// An array containing HTML elements
const myProjects = [
  <li>M1: Frogger - HTML, CSS and JS</li>,
  <li>M2: Roomster - Node, Express, MongoDB, HBS</li>,
  <li>M3: Recipease - React, Redux, Express, MongoDB</li>,
];

function List() {
  return (
    <div className="list">
      <h2>My List</h2>

      {myProjects}
    </div>
  );
}

export default List;
