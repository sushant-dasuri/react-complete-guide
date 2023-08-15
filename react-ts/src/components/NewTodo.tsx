import React from "react";

const NewTodo = () => {

    const submithandler = (event: React.FormEvent) => {
        event.preventDefault();
    }

    return (
        <form>
            <label htmlFor="text">Todo Text</label>
            <input type="text" id="text" />
            <button>Add Todo</button>
        </form>
    )
}


export default NewTodo;