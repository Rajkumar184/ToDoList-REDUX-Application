import { ActionTypes } from "../Constants/actionTypes";

export const setTodo = (data) => {
	return {
		type: ActionTypes.SET_TODO,
		payload: {
			id: new Date().getTime().toString(),
			data: data,
		},
	};
};

export const deletedTodo = () => {
	return {
		type: ActionTypes.DELETED_TODO,
	};
};

export const removeSelectedProduct = () => {
	return {
		type: ActionTypes.REMOVE_SELECTED_TODO,
	};
};
