import { useState } from "react";
import Card from "./card";
import AddToDoModal from "./modals/AddToDoModal";


function Homepage({ isModalVisible, setModalVisible, todos, setTodos }) {
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
                    <Card key={index} {...todo}/>
                ))}
            </div>
            <AddToDoModal visible={isModalVisible} setVisible={setModalVisible} addTodo={addTodo}/>
        </>
    );
}


export default Homepage;