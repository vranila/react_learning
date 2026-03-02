import { Fragment } from "react";

function ListGroup() 
{
    // rendering List
    let items = [
        'India',
        'London',
        'Newyork'
    ];

    // second list for condition inside return
    let items2 = ['apple', 'mango', 'pineapple'];

    return (
        // use <Fragment></Fragment> or <></> or <div></div>

        /*
          inside the fragment we cannot use the if condition directly like this:

          <>
            if (isLoggedIn) {
              <h1>Welcome</h1>
            }
          </>

          Because JSX does not allow normal if statements inside return
        */

        /*
          but we can use ternary operator

          <>
            {isLoggedIn ? <h1>Welcome</h1> : <h1>Please Login</h1>}
          </>
        */

        // {} flower bracket is expression case (used to write JS inside JSX)

        <Fragment>

            {/* ---------------- Static List ---------------- */}

            <h1>List Group</h1>
            <ul className="list-group">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item">And a fifth one</li>
            </ul>

            <br />

            {/* ---------------- Rendering List Group ---------------- */}

            <h1>Rendering List Group</h1>

            {/* condition inside return using && operator */}
            {items.length === 0 && <p>No Item Found</p>}

            <ul className="list-group">
                {items.map((item) => 
                    <li key={item} className="list-group-item">
                        {item}
                    </li>
                )}
            </ul>

            <br />

            {/* ---------------- Condition Inside Return - LIST ---------------- */}

            <h1>Condition Inside the Return - LIST</h1>

            {/* ternary operator condition */}
            {items2.length === 0 ? <p>No Item Found</p> : null}

            <ul className="list-group">
                {items2.map((item) => (
                    <li key={item} className="list-group-item">
                        {item}
                    </li>
                ))}
            </ul>

        </Fragment>
    );
}

export default ListGroup;