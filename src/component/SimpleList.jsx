const numberList = [<li>1</li>, <li>2</li>, <li>3</li>, <li>4</li>];

function SimpleList() {
  return (
    <div className="list">
      <h2>List</h2>

      {numberList}
    </div>
  );
}

export default SimpleList;
