import { useState } from "react";

interface FunctionProps {
  title: string;
  items: string[];
  onItemClick: (value: string) => void;   // function prop
}

function PassingFunctionUsingProps({ title, items, onItemClick }: FunctionProps) {

  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <div>
      <h2>{title}</h2>

      <ul className="list-group">
        {items.map((value, position) => (
          <li
            key={value}
            className={
              activeIndex === position
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setActiveIndex(position);
              onItemClick(value);   // calling parent function
            }}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PassingFunctionUsingProps;