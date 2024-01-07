import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
// import {todoList} from './mock-items'

const initialState = {
  // todos: todoList,
  status: null
}

// const fetchTodos = createAsyncThunk(
//   'todos/fetchTodos',
//   async function() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
//     const data = await res.json();
//     return data;
//   }
// );

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser({todos}, {payload}) {
      todos.push({
        id: new Date().toISOString(),
        title: payload.text,
        completed: false
      })
    },
    // removeTodo(state, {payload}) {
    //   state.todos = state.todos.filter(({id}) => id !== payload.id)
    // },
    // completeTodo(state, {payload}) {
    //   state.todos.map(todo => {
    //     if (todo.id === payload.id) todo.completed = !todo.completed
    //     return todo;
    //   })
    // },
    // updateTodoText(state, {payload}) {
    //   state.todos.map(todo => {
    //     if (todo.id === payload.id) todo.title = payload.value
    //     return todo;
    //   })
    // },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchTodos.pending, state => {
  //       state.status = 'loading'
  //     })
  //     .addCase(fetchTodos.fulfilled, (state, action) => {
  //       state.todos = action.payload
  //       state.status = 'loaded';
  //     })
  //     .addCase(fetchTodos.rejected, (state, action) => {
  //       state.status = 'error'
  //     });
  // }
})



export const {reducer: userReducer, actions: userActions } = userSlice;
// export {fetchTodos};