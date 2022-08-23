import { useState } from "react";
import Card from "./card";
import AddToDoModal from "./modals/AddToDoModal";


function Homepage({ todos, setTodos }) {
    const addTodo = (title, description) => {
        setTodos([...todos, {
            title, description,
            date_created: new Date()
        }]);
    };

    return (
        <>
            <div className="row">
                {todos.map((todo, index) => (
                    <Card key={index} {...todo} />
                ))}
            </div>
            <AddToDoModal addTodo={addTodo} />
        </>
    );
}


export default Homepage;