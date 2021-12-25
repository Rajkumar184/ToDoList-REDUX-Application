import {
	SET_TODO,
	DELETED_TODO,
	REMOVE_SELECTED_TODO,
} from "../Constants/actionTypes";

export const setTodo = (data) => {
	return {
		type: SET_TODO,
		payload: {
			id: new Date().getTime().toString(),
			data: data,
		},
	};
};

export const deletedTodo = (id) => {
	return {
		type: DELETED_TODO,
		payload: id,
	};
};

export const removeSelectedTodo = () => {
	return {
		type: REMOVE_SELECTED_TODO,
	};
};
