import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TodoLists from "./TodoLists";
import {
  TextField,
  Button,
  Checkbox,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import {
  addTodo,
  removeTodo,
  DeleteTodo,
  UpdateTodo,
  UpdateTodoStatus,
} from "../State/Todo/Actions/todoAction";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import "./todo.css";

function Todo() {
  const [title, setTitle] = useState("");
  const [formEdit, setFormEdit] = useState(false);
  const [todo, setTodo] = useState("");
  const [edittodo, setEditTodo] = useState("");
  const [description, setDescription] = useState("");
  const [data, setData] = useState([]);
  const todoData = useSelector((state) => state.todoOperationReducer);
  const [edateTime, setEDateTime] = React.useState(dayjs(new Date()));

  useEffect(() => {}, []);
  console.log(todoData);
  const dispatch = useDispatch();
  const time = (date) => {
    var Dateoptions = { month: "long", year: "numeric", day: "numeric" };

    var today = date;
    var mydate =
      today.toLocaleDateString("en-US", Dateoptions) + ", " + formatAMPM(date);

    return mydate;
  };
  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let dateTime = time(new Date());

    let date = new Date();
    let id = date.getTime();
    let todoObj = {
      id,
      title: title,
      description,
      completed: false,
      dateTime: dateTime,
      endDateTime: time(edateTime.$d),
    };
    console.log("handle suubmit", todoObj);
    dispatch(addTodo(todoObj));
    setTodo("");
    setTitle("");
    setDescription("");
    setEDateTime(dayjs(new Date()));
  };
  const handelEdit = (e) => {
    e.preventDefault();

    let editTodoObj = {
      id: edittodo.id,
      title: title,
      description: description,
      completed: false,
      endDateTime: time(edateTime.$d),
    };
    console.log("handel Edit", editTodoObj);
    dispatch(UpdateTodo(editTodoObj));
    setTodo("");
    setTitle("");
    setDescription("");
    setFormEdit(false);
  };

  const handelEditClick = (e) => {
    setFormEdit(true);
    setTitle(e.title);
    setDescription(e.description);
    setEditTodo(e);
    setEDateTime(dayjs(e.endDateTime));
    console.log("handeleEdit", e);
  };
  const handleCancel = () => {
    setTitle("");
    setDescription("");
    setFormEdit(false);
    setEDateTime(dayjs(new Date()));
  };
  const CancelButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#6d6c6c"),
    backgroundColor: "#6d6c6c",
    "&:hover": {
      backgroundColor: "#2e2e2e",
    },
  }));
  const AddButton = styled(Button)(({ theme }) => ({
    color: "white",

    backgroundColor: "var(--primary)",

    "&:hover": {
      backgroundColor: "#1e4465",
    },
  }));
  return (
    <>
      <Container sx={{ margin: "2rem auto" }}>
        <Stack
          sx={{ flexDirection: { xs: "column", sm: "column", md: "row", } }}
          width={"100%"}
          justifyContent={"center"}
          alignItems={'center'}
        >
          {/* ========Todo Create============ */}
          <Stack
            component={"form"}
            onSubmit={formEdit ? handelEdit : handleSubmit}
            spacing={2}
            sx={{
              border: "1px solid var(--secondary)",
              boxShadow: "3",
              padding: "2rem",
              borderRadius: "0.45rem",
              color: "var(--secondary)",
              width: { xs: "85%", sm: "80%", md: "60%", },
              maxHeight: "68vh",
              minHeight: "68vh",
              overflow:'auto',
              margin: {sm: "0rem 0rem 1rem 0rem", md: "0rem 1rem 0rem 0rem ", },
            }}
          >
            <Typography variant="h5" textAlign={"center"}>
              Create Todo
            </Typography>
            <TextField
              id="filled-basic"
              label="Add Title"
              variant="outlined"
              sx={{ color: "var(--secondary)" }}
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              required
            />

            <TextField
              id="outlined-multiline-static"
              label="Add Your Description"
              multiline
              rows={4}
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                label="Dead Line"
                value={edateTime}
                onChange={(newValue) => setEDateTime(newValue)}
                disablePast={true}
              />
            </LocalizationProvider>

            <CancelButton variant="contained" onClick={handleCancel}>
              Cancel
            </CancelButton>

            <AddButton type="submit" variant="contained">
              {!formEdit ? "Create" : "Update"}
            </AddButton>
          </Stack>
          {/* ===============Todo List=================== */}
          <Stack
            spacing={2}
            sx={{
              border: "1px solid var(--secondary)",
              boxShadow: "3",
              padding: "2rem",
              borderRadius: "0.45rem",
              color: "var(--secondary)",
              width: { xs: "85%", sm: "80%", md: "60%",lg:"80%" },
              maxHeight: "68vh",
              minHeight: "68vh",
              overflow: "auto",
              margin: {sm: "2rem 0rem 0rem 0rem", md: "0rem 1rem 0rem 0rem ", },

            }}
          >
            <TodoLists handleEdit={handelEditClick} Edit={formEdit}></TodoLists>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

export default Todo;
