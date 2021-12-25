import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTodo } from "../Redux/Action/ActionNames";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import ListItem from "./ListItem";

const MainTodo = () => {
	const [inputData, setInputData] = useState("");
	const listItem = useSelector((state) => state.rootReducers.list);
	const dispatch = useDispatch();

	return (
		<>
			<div className="main_div">
				<div className="center_div">
					<br />
					<h1> ToDo List </h1>
					<br />
					<input
						type="text"
						value={inputData}
						placeholder="Add an Items"
						onChange={(event) => setInputData(event.target.value)}
					/>
					<Button
						className="newBtn"
						onClick={() => dispatch(setTodo(inputData), setInputData(""))}
					>
						<AddIcon />
					</Button>
					<br />
					<ol>
						{listItem.map((val, index) => {
							return <ListItem key={index} val={val} />;
						})}
					</ol>
					<button type="button" className="btn btn-danger">
						Remove All
					</button>
					<br />
				</div>
			</div>
		</>
	);
};

export default MainTodo;
