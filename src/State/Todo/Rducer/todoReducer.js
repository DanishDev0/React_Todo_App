import { ADD_TODO, REMOVE_TODO, DELETING_ALL_TODO, UPDATE_TODO, UPDATE_TODO_STATUS } from "../Actions/todoAction";
const initialState = [
    {
        id: '1', title: "Deployment", description: "React Todo App deploy on netlify", completed: false, dateTime
            :
            "April 5, 2023, 3:23 PM", endDateTime
            :
            "April 5, 2023, 4:19 PM"
    },
    {
        id: '2', title: "Testing Todo App", description: "This is First Todo", completed: false, dateTime
            :
            "April 5, 2023, 3:23 PM", endDateTime
            :
            "April 5, 2023, 4:19 PM"
    },
    {
        id: '3', title: "React App", description: "Create React Todo App", completed: true, dateTime
            :
            "April 5, 2023, 3:23 PM", endDateTime
            :
            "April 5, 2023, 4:19 PM"
    },
    
]
const todoOperationReducer = (state = initialState, action) => {
    if (action.type === ADD_TODO) {
        return [...state, action.payload]

    }
    else if (action.type === REMOVE_TODO) {
        const filterState = state.filter((todo) => todo.id !== action.payload)
        console.log(filterState, 'todoReducer', action.payload)
        return filterState

    }
    else if (action.type === DELETING_ALL_TODO) {
        return []

    }
    else if (action.type === UPDATE_TODO) {
        const updateData = []
        let data = action.payload
        console.log('Update', data, state)

        state.map((item) => {
            console.log(item, 'filter')
            if (item.id === data.id) {
                item.id = data.id
                item.title = data.title
                item.completed = data.completed
                item.description = data.description
                item.endDateTime = data.endDateTime
            }
            updateData.push(item)
        })
        return updateData

    }
    else if (action.type === UPDATE_TODO_STATUS) {
        const updateDataStatus = []
        state.map((item) => {
            if (item.id === action.payload) {
                item.completed = !item.completed
            }
            updateDataStatus.push(item)
        })
        return updateDataStatus

    }
    else {
        return state
    }
}

export default todoOperationReducer;