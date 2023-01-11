import { Box } from "@mui/system";
import { ContainerForm } from "./styles";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import { ITask } from "../../interfaces/task";

interface Props {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
  task?: ITask | null;
  handleUpdate?(id: number, title: string, difficulty: number): void;
}

const TaskForm = ({
  btnText,
  taskList,
  setTaskList,
  task,
  handleUpdate,
}: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  useEffect(() => {
    if (task) {
      setId(task.id);
      setTitle(task.title);
      setDifficulty(task.difficulty);
    }
  }, [task]);

  const addTaskHandler = (e: any) => {
    e.preventDefault();
    if (title === "") return toast.info("Adicione uma tarefa");

    if (handleUpdate) {
      handleUpdate(id, title, difficulty);
    } else {
      const id = Math.floor(Math.random() * 1000);

      const newTask: ITask = { id, title, difficulty };

      setTaskList!([...taskList, newTask]);

      setTitle("");
      setDifficulty(0);

      toast.success("Nova tarefa adicionada");
    }
  };

  return (
    <Box>
      <ContainerForm onSubmit={addTaskHandler}>
        <div className="input-container">
          <label htmlFor="title">Título:</label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            name="title"
            placeholder="Título da tarefa"
            value={title}
          />
        </div>
        <div className="input-container">
          <label htmlFor="difficulty">Dificuldade:</label>
          <input
            type="text"
            name="difficulty"
            placeholder="Dificuldade da tarefa"
            onChange={(e) => setDifficulty(parseInt(e.target.value))}
            value={difficulty}
          />
        </div>

        <input type="submit" value={btnText} />
      </ContainerForm>
    </Box>
  );
};

export default TaskForm;
