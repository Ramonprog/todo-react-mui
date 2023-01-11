import { Box } from "@mui/system";
import { useState } from "react";
import React from "react";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

//components
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

//interface
import { ITask } from "./interfaces/task";
import KeepMountedModal from "./components/Modal";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);

  const [open, setOpen] = useState<boolean>(false);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  const handleClose = () => setOpen(false);

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );

    toast.success("Tarefa deletada com sucesso!");
  };

  const editTask = (task: ITask): void => {
    setOpen(true);
    setTaskToUpdate(task);
  };

  const handleUpdate = (id: number, title: string, difficulty: number) => {
    const updatedTask: ITask = { id, title, difficulty };

    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task;
    });

    setOpen(false);
    setTaskList(updatedItems);
  };

  return (
    <div>
      <Header />
      <Box
        sx={{
          minHeight: "60vh",
          textAlign: "center",
          marginTop: "100px",
          p: "20px",
          position: "relative",
        }}
      >
        <div>
          <h2>O que você vai fazer ?</h2>
          <TaskForm
            btnText={"Criar Tarefa"}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList
            editTask={editTask}
            taskList={taskList}
            deleteTask={deleteTask}
          />
        </div>
      </Box>
      <Footer />
      <KeepMountedModal
        children={
          <TaskForm
            btnText="Editar Tarefa"
            taskList={taskList}
            task={taskToUpdate}
            handleUpdate={handleUpdate}
          />
        }
        open={open}
        handleClose={handleClose}
      />
      <ToastContainer position="top-center" autoClose={1500} />
    </div>
  );
}

export default App;
