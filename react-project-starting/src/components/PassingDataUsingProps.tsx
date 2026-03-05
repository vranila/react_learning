//{items : [], heading:string}
import { MouseEvent } from "react";

//data passing using prps
interface  Props{
    items:string[];
    heading:string;
}

let selectedIndex=0;
const handleClick=(event: MouseEvent) => console.log(event);

function PassingDataUsingProps({items,heading}:Props) {
  return (

    <>
        <div>
            <h1>Passing Data Using Props</h1>
            {items.length === 0 && <p>No Item Found</p>}
              <h1>{heading}</h1>
             <ul className="list-group">
                {items.map((item,index) => (
                    <li 
                    className={selectedIndex === index ? 'list-group-item active' : 'list-group-item' } 
                    onClick={handleClick}
                    key={item} 
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    </>
  
  );
}

export default PassingDataUsingProps;