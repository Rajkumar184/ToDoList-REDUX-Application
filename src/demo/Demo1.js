// import React, { useState } from "react";
// import Button from "@mui/material/Button";
// import AddIcon from "@mui/icons-material/Add";
// import Demo2 from "./Demo2";
// const Demo1 = () => {
// 	const [item, setItem] = useState("");
// 	const [newitem, setNewItem] = useState([]);

// 	const itemEvent = (event) => {
// 		setItem(event.target.value);
// 	};

// 	const listOfItems = () => {
// 		setNewItem((prevValue) => {
// 			return [...prevValue, item];
// 		});

// 		setItem("");
// 	};

// 	return (
// 		<>
// 			<div className="main_div">
// 				<div className="center_div">
// 					<br />
// 					<h1> ToDo List </h1>
// 					<br />
// 					<input
// 						type="text"
// 						value={inputData}
// 						placeholder="Add an Items"
// 						onChange={(event) => setInputData(event.target.value)}
// 					/>
// 					<Button
// 						className="newBtn"
// 						onClick={() => dispatch(setTodo(inputData), setInputData(""))}
// 					>
// 						<AddIcon />
//                         </Button>
// 					<br />
// 					<ol>
// 						{newitem.map((val, index) => {
// 							return <Demo2 key={index} text={val} />;
// 						})}
// 					</ol>

// 					<br />
// 				</div>
// 			</div>
// 		</>
// 	);
// };

// export default Demo1;
