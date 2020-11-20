import React, { ChangeEvent, FormEvent, useState } from "react";

interface Props {
  addToDo: AddToDo;
}

const Input: React.FC<Props> = ({ addToDo }) => {
  const [newTask, setTask] = useState<string>("");

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };
  const onSubmitHandler = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addToDo(newTask);
  };
  return (
    <form>
      <input
        type="text"
        value={newTask}
        onChange={onChangeHandler}
        placeholder="Enter a task to List"
      />
      <button type="submit" onClick={onSubmitHandler}>
        Add to List
      </button>
    </form>
  );
};

export default Input;
