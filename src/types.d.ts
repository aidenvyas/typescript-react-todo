// global types
type AddToDo = (newToDo: string) => void;

type ToDo = {
  text: string;
  complete: boolean;
};

type ToggleList = (task: ToDo) => void;
