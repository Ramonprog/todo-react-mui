import { ITask } from "../../interfaces/task";
import { ContainerTask } from "./styles";

//icons
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

type Props = {
  taskList: ITask[];
  deleteTask(id: number): void;
  editTask: any;
};

const TaskList = ({ taskList, deleteTask, editTask }: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((item) => (
          <ContainerTask key={item.id}>
            <div className="detail">
              <h4>{item.title}</h4>
              <p>Dificuldade: {item.difficulty}</p>
            </div>
            <div className="actions">
              <EditIcon onClick={() => editTask(item)} />
              <DeleteForeverIcon onClick={() => deleteTask(item.id)} />
            </div>
          </ContainerTask>
        ))
      ) : (
        <p>Você ainda não tem tarefas 😭</p>
      )}
    </>
  );
};

export default TaskList;
