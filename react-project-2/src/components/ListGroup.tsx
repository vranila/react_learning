import { Fragment } from "react";
function ListGroup() {
    //rendering List
    const items= [
        'India',
        'London',
        'Newyork'
    ];


  return (
   // use <Fragment></Fragment> or <></> or <div></div>
    <Fragment> 
      <h1>List Group</h1>
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>

      <br></br>


      <h1>Rendering List Group </h1>
        <ul className="list-group">
            {items.map((item) => 
              <li key={item}>{item}</li>
            )}
        </ul>
    </Fragment>
  );
}

export default ListGroup;
