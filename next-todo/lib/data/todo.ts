import { readFileSync, writeFileSync } from "fs";
import { TodoType } from "../../types/todo";

//* 투두 리스트 데이터 불러오기
const getList = () => {
    const todoBuffer = readFileSync("data/todos.json");
    const todosString = todoBuffer.toString();
    if (!todosString) {
        return [];
    }
    const todos : TodoType[] = JSON.parse(todosString);
    return todos;
};

//* id에 해당 todo가 있는지 확인하기

const exist = ({id}: {id:number}) => {
    const todos = getList();
    const todo = todos.some((todo)=>todo.id===id);
    //* some 함수는 일치하는 id가 있다면 true를 리턴하고, id가 없다면 false를 리턴하게 됩니다.
    return todo;
};

const write = async (todos: TodoType[]) => {
    writeFileSync("data/todos.json", JSON.stringify(todos));
    //* writeFileSync는 동기적으로 첫 번째 인자로 받은 경로에 데이터를 저장하는 함수
};

export default { getList, exist, write };