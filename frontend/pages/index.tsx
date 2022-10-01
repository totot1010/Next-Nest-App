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

const Home: NextPage = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [text, setText] = useState("");

  console.log(text);

  return (
    <div className={styles.container}>
      {/* <FormControl variant="standard" onSubmit={createTodo}>
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
      </FormControl>
      <div>
        {todos.map((todo) => (
          <p key={todo}>{todo}</p>
        ))}
      </div> */}
    </div>
  );
};

export default Home;
