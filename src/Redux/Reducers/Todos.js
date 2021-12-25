import {
	SET_TODO,
	DELETED_TODO,
	REMOVE_SELECTED_TODO,
} from "../Constants/actionTypes";
import { toast } from "react-toastify";

const intialState = {
	list: [],
};

const Todos = (state = intialState, action) => {
	switch (action.type) {
		case SET_TODO:
			const { id, data } = action.payload;
			return {
				...state,
				list: [
					...state.list,
					{
						id: id,
						data: data,
					},
				],
			};

		case DELETED_TODO:
			toast.success("Todo Deleted successfully!", {
				position: toast.POSITION.TOP_CENTER,
				autoClose: 3000,
			});

			const newList = [
				...state.list.filter((elem) => elem.id !== action.payload),
			];

			return {
				...state,
				list: newList,
			};

		case REMOVE_SELECTED_TODO: {
			toast.success("Your Todo List is Empty Now!", {
				position: toast.POSITION.TOP_CENTER,
				autoClose: 3000,
			});

			return { list: [] };
		}
		default:
			return state;
	}
};

export default Todos;
