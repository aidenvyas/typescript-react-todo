import React from "react";
import ListItem from "./ListItem";

interface Props {
  toDos: Array<ToDo>;
  toggleComplete: ToggleList;
}
const List: React.FC<Props> = ({ toDos, toggleComplete }) => {
  return (
    <div>
      <h3>Tasks to do:</h3>
      <ol>
        {toDos.map((task) => {
          return <ListItem todo={task} toggle={toggleComplete} />;
        })}
      </ol>
    </div>
  );
};

export default List;
