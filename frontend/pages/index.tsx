import React, { useState } from "react";
import type { NextPage } from "next";
import { Box, Button, Input, InputAdornment, TextField } from "@mui/material";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import { uuid } from "uuidv4";

type Todo = {
  text: string;
  id: string;
};

const Home: NextPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState<string>("");
  const [editId, setEditId] = useState<string>();
  const [editTodo, setEditTodo] = useState<string>();

  console.log(todos);

  const createTodo = (e: React.FormEvent<HTMLElement>): void => {
    e.preventDefault();
    setTodos([...todos, { text: text, id: uuid() }]);
  };

  const handleEdit = (id: string, text: string) => {
    setEditId(id);
    setEditTodo(text);
  };

  const updateTodo = (e: any) => {
    e.preventDefault();
    // const newTodo = Todo.filter((todo) => )
  };

  // const deleteTodo = () => {};

  return (
    <div>
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
      <div>
        {todos.map((todo, i) => {
          return todo.id === editId ? (
            <div key={i} style={{ display: "flex" }}>
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
            <div key={i} style={{ display: "flex" }}>
              <p style={{ margin: 0 }}>{todo.text}</p>
              <Button onClick={() => handleEdit(todo.id, todo.text)}>
                編集
              </Button>
              {/* <Button onClick={deleteTodo}>削除</Button> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
