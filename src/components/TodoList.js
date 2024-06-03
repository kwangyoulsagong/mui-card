import React, { useEffect, useState } from "react";
import { Container, Box, Typography, Button, Grid } from "@mui/material";
import CreateTaskPopup from "../modals/CreateTask";
import Card from "./Card";

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem("taskList");
    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);

  const deleteTask = (index) => {
    let tempList = [...taskList];
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
  };

  const updateListArray = (obj, index) => {
    let tempList = [...taskList];
    tempList[index] = obj;
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
  };

  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (taskObj) => {
    let tempList = [...taskList];
    tempList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    setModal(false);
  };

  return (
    <Container>
      <Box textAlign="center" mt={4}>
        <Typography variant="h3">Todo List</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setModal(true)}
          style={{ marginTop: "20px" }}
        >
          Create Task
        </Button>
      </Box>
      <Grid container spacing={3} style={{ marginTop: "20px" }}>
        {taskList &&
          taskList.map((obj, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                taskObj={obj}
                index={index}
                deleteTask={deleteTask}
                updateListArray={updateListArray}
              />
            </Grid>
          ))}
      </Grid>
      <CreateTaskPopup modal={modal} toggle={toggle} save={saveTask} />
    </Container>
  );
};

export default TodoList;
