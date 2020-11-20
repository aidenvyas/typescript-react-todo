import React from "react";

interface Props {
  todo: ToDo;
  toggle: ToggleList;
}

const ToggleList: React.FC<Props> = ({ todo, toggle }) => {
  return (
    <li className={todo.complete ? 'complete': ''}>
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={() => toggle(todo)}
      />
      {todo.text}
    </li>
  );
};

export default ToggleList;
