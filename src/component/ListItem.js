import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { deletedTodo } from "../Redux/Action/ActionNames";

const ListItem = ({ val }) => {
	const dispatch = useDispatch();
	return (
		<>
			<div className="todo_style">
				<span key={val.id} onClick={() => dispatch(deletedTodo())}>
					<DeleteIcon className="deleteIcon" />
				</span>

				<li>
					<h5>{val.data}</h5>
				</li>
			</div>
		</>
	);
};

export default ListItem;
