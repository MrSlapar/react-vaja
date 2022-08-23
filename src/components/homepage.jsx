import { useState } from "react";
import Card from "./card";
import AddToDoModal from "./modals/AddToDoModal";
import { useSelector } from "react-redux";


function Homepage() {
    const todos = useSelector(state => state.todo.todoData);
    console.log(todos);

    return (
        <>
            <div className="row">
                {todos.map((todo, index) => (
                    <Card key={index} {...todo} />
                ))}
            </div>
            <AddToDoModal />
        </>
    );
}


export default Homepage;