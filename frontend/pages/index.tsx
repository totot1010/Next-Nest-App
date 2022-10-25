import React, { useState } from "react";
import type { NextPage } from "next";
import { Box, Button, Input, InputAdornment, TextField } from "@mui/material";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import { v4 as uuid } from "uuid";
import { Droppable, DragDropContext } from "react-beautiful-dnd";
type Todo = {
  text: string;
  id: string;
};

const Home: NextPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState<string>("");
  const [editId, setEditId] = useState<string>("");
  const [editTodo, setEditTodo] = useState<string>("");

  const createTodo = (e: React.FormEvent<HTMLElement>): void => {
    e.preventDefault();
    if (!text) {
      return;
    }
    setTodos([...todos, { text: text, id: uuid() }]);
    setText("");
  };

  const handleEdit = (id: string, text: string) => {
    setEditId(id);
    setEditTodo(text);
  };

  const updateTodo = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    let updateTodo = todos.find((todo) => todo.id === editId);
    updateTodo!.text = editTodo;
    setTodos(todos);
    setEditId("");
  };

  const deleteTodo = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <form onSubmit={createTodo}>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <ModeEditOutlineIcon />
            </InputAdornment>
          }
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button onClick={createTodo}>追加</Button>
      </form>
      {todos.map((todo, i) => {
        return todo.id === editId ? (
          <div key={i}>
            <TextField
              style={{ margin: 0 }}
              value={editTodo}
              onChange={(e) => setEditTodo(e.target.value)}
            >
              {todo.text}
            </TextField>
            <Button onClick={updateTodo}>保存</Button>
            <Button onClick={() => setEditId("id")}>キャンセル</Button>
          </div>
        ) : (
          <div key={i}>
            <p style={{ margin: 0 }}>{todo.text}</p>
            <Button onClick={() => handleEdit(todo.id, todo.text)}>編集</Button>
            <Button onClick={() => deleteTodo(todo.id)}>削除</Button>
            <Button onClick={() => deleteTodo(todo.id)}>削除</Button>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
