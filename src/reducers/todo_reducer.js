import { uuid } from '../utils';
import {
    HIDE_TODO_MODAL,
    SHOW_TODO_MODAL,
    TODO_ADD,
    TODO_CHANGE_SEARCH,
    TODO_CHANGE_STATUS,
    TODO_DELETE,
    TODO_EDIT
} from './../actions/types';

const temp = [{
    title: "jaka",
    description: "ziga",
    ident: uuid(),
    date_created: (new Date()).toJSON(),
    done: false
},
{
    title: "luka",
    description: "slapnik",
    ident: uuid(),
    date_created: (new Date()).toJSON(),
    done: false
},
{
    title: "sergej",
    description: "ziga",
    ident: uuid(),
    date_created: (new Date()).toJSON(),
    done: true
},
{
    title: "jakob",
    description: "ziga",
    ident: uuid(),
    date_created: (new Date()).toJSON(),
    done: false
},
{
    title: "maks",
    description: "ziga",
    ident: uuid(),
    date_created: (new Date()).toJSON(),
    done: false
}];


const initialState = {
    todoData: temp, //visible data
    _allTodoData: temp, //all data
    todoModalVisible: false,
    search: ''
}

const updateWithVisible = (state) => {
    const searchString = state.search.toLowerCase();
    const filteredTodos = state._allTodoData.filter(todo => {
        return todo.title.toLowerCase().includes(searchString)
    });
    return { ...state, todoData: filteredTodos };
}

export default function (state = initialState, action) {
    switch (action.type) {
        case HIDE_TODO_MODAL:
            return { ...state, todoModalVisible: false };
        case SHOW_TODO_MODAL:
            return { ...state, todoModalVisible: true };
        case TODO_ADD:
            return updateWithVisible({ ...state, _allTodoData: [...state._allTodoData, action.payload] });
        case TODO_DELETE:
            const newTodos = state._allTodoData.filter(todo => todo.ident !== action.payload);
            return updateWithVisible({ ...state, _allTodoData: newTodos });
        case TODO_CHANGE_STATUS:
            const changedTodos = state._allTodoData.map(todo => {
                if (todo.ident !== action.payload.ident) {
                    return todo;
                }
                return { ...todo, done: action.payload.done }
            })
            return updateWithVisible({ ...state, _allTodoData: changedTodos });
        case TODO_CHANGE_SEARCH:
            return updateWithVisible({ ...state, search: action.payload });
        default:
            return state;
    }

};