import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const EditTaskPopup = ({ modal, toggle, updateTask, taskObj }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "taskName") {
      setTaskName(value);
    } else if (name === "description") {
      setDescription(value);
    } else if (name === "category") {
      setCategory(value);
    }
  };

  useEffect(() => {
    setTaskName(taskObj.Name);
    setDescription(taskObj.Description);
    setCategory(taskObj.Category);
  }, [taskObj]);

  const handleUpdate = (e) => {
    e.preventDefault();
    let tempObj = {
      Name: taskName,
      Description: description,
      Category: category,
    };
    updateTask(tempObj);
  };

  return (
    <Dialog open={modal} onClose={toggle}>
      <DialogTitle>Update Task</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <div className="form-group">
            <TextField
              label="Task Name"
              variant="outlined"
              fullWidth
              value={taskName}
              onChange={handleChange}
              name="taskName"
              margin="dense"
            />
          </div>
          <div className="form-group">
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              multiline
              rows={5}
              value={description}
              onChange={handleChange}
              name="description"
              margin="dense"
            />
          </div>
          <FormControl fullWidth margin="dense">
            <InputLabel>Category</InputLabel>
            <Select value={category} onChange={handleChange} name="category">
              <MenuItem value="Work">Work</MenuItem>
              <MenuItem value="Personal">Personal</MenuItem>
              <MenuItem value="Shopping">Shopping</MenuItem>
              <MenuItem value="Others">Others</MenuItem>
            </Select>
          </FormControl>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={handleUpdate}>
          Update
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditTaskPopup;
