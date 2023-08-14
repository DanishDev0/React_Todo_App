import React from "react";
import {
  addTodo,
  removeTodo,
  DeleteTodo,
  UpdateTodoStatus,
} from "../State/Todo/Actions/todoAction";
import { useSelector, useDispatch } from "react-redux";
import {
  Checkbox,
  Button,
  Stack,
  IconButton,
  Typography,
  Chip,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/material/styles";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import "./todo.css";

function TodoLists(props) {
  const { handleEdit, formEdit } = props;
  const todoData = useSelector((state) => state.todoOperationReducer);
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (i) => {
    if (i == expanded) {
      setExpanded(false);
    } else {
      setExpanded(parseInt(i));
    }
    console.log("handlechange", i);
  };
  console.log(todoData);
  const dispatch = useDispatch();

  const deleting = () => {
    dispatch(DeleteTodo());
  };

  const removeThisTodo = (e) => {
    console.log(e, "RemoveThisTodo");

    dispatch(removeTodo(e.id));
  };
  const DeleteButton = styled(Button)(({ theme }) => ({
    color: "white",
    backgroundColor: "#ff0707",
    "&:hover": {
      backgroundColor: "#b90d0d",
    },
  }));

  return (
    <>
      <Stack spacing={2} width={"100%"}>
        {/* =========== Top Header ============ */}
        <Stack
        sx={{flexDirection:{sm:"column",md:"row"}}}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography
            variant="h5"
            sx={{ borderBottom: "1px solid var(--secondary)" }}
          >
            Todo List: {todoData.length}
          </Typography>

          {todoData.length !== 0 ? (
            <DeleteButton
              onClick={() => deleting()}
              variant="contained"
              sx={{ background: "#e10000" }}
              endIcon={<DeleteIcon />}
            >
              Delete All
            </DeleteButton>
          ) : (
            ""
          )}
        </Stack>
        {todoData
          ? todoData
              .slice(0)
              .reverse()
              .map((e, i) => {
                return (
                  <>
                    <Stack
                      direction={"row"}
                      spacing={2}
                      key={i}
                      alignItems={"center"}
                      width={"100%"}
                      justifyContent={"space-between"}
                      sx={{
                        background: "var(--ternary)",
                        color: "black",
                        borderRadius: "0.35rem",
                        padding: "0.3rem 0.2rem",
                      }}
                    >
                      {/* ======Title===== */}
                      <Stack
                        direction={"row"}
                        alignItems={"center"}
                        width={"100%"}
                      >
                        <Checkbox
                          checked={e.completed}
                          onChange={() => dispatch(UpdateTodoStatus(e.id))}
                        />
                        <Typography
                          variant="body"
                          sx={{
                            textDecoration: `${
                              e.completed ? "line-through" : "none"
                            }`,
                          }}
                        >
                          {e.title}
                        </Typography>
                      </Stack>
                      {/* ==== action Button=== */}
                      <Stack
                        direction={"row"}
                        spacing={1}
                        key={i}
                        alignItems={"center"}
                      >
                        <IconButton onClick={() => handleEdit(e)}>
                          <ModeEditIcon />
                        </IconButton>
                        <IconButton
                          onClick={() => removeThisTodo(e)}
                          style={{ cursor: "pointer" }}
                        >
                          <DeleteForeverIcon />
                        </IconButton>
                        <IconButton
                          onClick={() => handleChange(i + 1)}
                          style={{ cursor: "pointer" }}
                        >
                          <ExpandMoreIcon />
                        </IconButton>
                      </Stack>

                      {/* ============ Description=========== */}
                    </Stack>
                    <Stack
                      direction={"row"}
                      spacing={2}
                      justifyContent={"space-between"}
                      sx={{
                        display: `${
                          expanded === parseInt(i + 1) ? "flex" : "none"
                        }`,
                        background: "var(--ternary)",
                        color: "black",
                        borderRadius: "0.35rem",
                        padding: "1rem",
                        minHeight: "20vh",
                      }}
                    >
                      <Typography variant="body2">{e.description}</Typography>
                      <Stack spacing={2}>
                        <Chip
                          size="small"
                          sx={{ color: "white", background: "var(--primary)" }}
                          label={e.dateTime ? e.dateTime : ""}
                        />
                        <Chip
                          size="small"
                          sx={{ color: "white", background: "#e10000" }}
                          label={e.endDateTime ? e.endDateTime : ""}
                        />
                      </Stack>
                    </Stack>
                  </>
                );
              })
          : ""}
      </Stack>
    </>
  );
}

export default TodoLists;
