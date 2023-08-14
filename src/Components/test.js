<>
  <Box sx={{ width: "100%", height: "500px", background: "" }}>
    {/* <h2 style={{ textAlign: 'center' }}>Create Todo List</h2> */}
    <div className="box-wrapper">
      <div className="box-div">
        <h3>CREATE TODO</h3>
        <form className="dform" onSubmit={formEdit ? handelEdit : handleSubmit}>
          <div className="cont-1">
            <label>Title:</label>
            <TextField
              id="filled-basic"
              label="Add Title"
              variant="outlined"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              required
            />

            {/* <input  onChange={(e) => { setTitle(e.target.value) }} required/> */}
          </div>
          <div className="cont-2">
            <label>Description:</label>
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
            {/* <textarea ></textarea> */}
          </div>
          <div className="count-3">
            <label>End Date:</label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                label="Dead Line"
                value={edateTime}
                onChange={(newValue) => setEDateTime(newValue)}
                disablePast={true}
              />
            </LocalizationProvider>
          </div>

          {/* <Button onClick={handleCancel} variant="contained" sx={{ background: 'gray' }} endIcon={<ClearIcon />}>Cancel</Button> */}
          <CancelButton variant="contained" onClick={handleCancel}>
            Cancel
          </CancelButton>

          <AddButton type="submit" variant="contained">
            {!formEdit ? "Create" : "Update"}
          </AddButton>
          {/* <button type='submit'>Create</button> */}
        </form>
      </div>
    </div>
  </Box>
  // ============= Toto Create===========
  <div className="box-div-2">
    <div className="todo-list-wrapper">
      <div className="todo-list-head">
        <h4>Todo List: {todoData.length}</h4>
      </div>

      {todoData
        ? todoData
            .slice(0)
            .reverse()
            .map((e, i) => {
              return (
                <>
                  <div
                    key={i}
                    className="todo-list"
                    style={{
                      // backgroundColor:`${e.completed?"green":""}`,
                      color: `${e.completed ? "green" : ""}`,
                    }}
                  >
                    <Checkbox
                      checked={e.completed}
                      onChange={() => dispatch(UpdateTodoStatus(e.id))}
                    />
                    <p
                      className="todoTitle"
                      style={{
                        textDecoration: `${
                          e.completed ? "line-through" : "none"
                        }`,
                      }}
                      key={i}
                    >
                      {e.title}
                    </p>
                    <button onClick={() => handleEdit(e)}>
                      <ModeEditIcon />
                    </button>
                    <button
                      onClick={() => removeThisTodo(e)}
                      style={{ cursor: "pointer" }}
                    >
                      <DeleteForeverIcon />
                    </button>
                    <button
                      onClick={() => handleChange(i + 1)}
                      style={{ cursor: "pointer" }}
                    >
                      <ExpandMoreIcon />
                    </button>
                  </div>
                  <div
                    className="todo-description-wrap"
                    style={{
                      display: `${
                        expanded === parseInt(i + 1) ? "flex" : "none"
                      }`,
                    }}
                  >
                    <div className="todo-description">{e.description}</div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span className="todo-time">
                        {e.dateTime ? e.dateTime : ""}
                      </span>
                      <span className="todo-Endtime">
                        {e.endDateTime ? e.endDateTime : ""}
                      </span>
                    </div>
                  </div>
                </>
              );
            })
        : ""}
    </div>
      {todoData.length !== 0 ? (
        <DeleteButton
          onClick={() => deleting()}
          variant="contained"
          endIcon={<DeleteIcon />}
        >
          Delete All
        </DeleteButton>
      ) : (
        ""
      )}
  </div>
</>;
