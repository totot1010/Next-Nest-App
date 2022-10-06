import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import { uuid } from "uuidv4";

type Todo = {
  text: string;
  id: string;
};

const Home: NextPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState("");

  console.log(todos);

  const createTodo = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    setTodos([...todos, { text: text, id: uuid() }]);
  };

  const editTodo = (id: string) => {};

  const deleteTodo = () => {};

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
        {todos.map((todo, i) => (
          <div key={i} style={{ display: "flex" }}>
            <p style={{ margin: 0 }}>{todo.text}</p>
            <Button onClick={() => editTodo(todo.id)}>編集</Button>
            <Button onClick={deleteTodo}>削除</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
