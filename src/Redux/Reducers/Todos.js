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
			const checkTodoLength = action.payload.data.length > 5;
			const checkTodoExits = state.list?.find(
				(e) => e.data === action.payload.data
			);

			if (checkTodoExits) {
				toast.error(`${action.payload.data} is already present!`, {
					position: toast.POSITION.TOP_CENTER,
					autoClose: 3000,
				});

				return {
					list: [...state.list],
				};
			} else if (!checkTodoLength) {
				toast.error("Todo should have minimum 5 characters!", {
					position: toast.POSITION.TOP_CENTER,
					autoClose: 3000,
				});

				return {
					list: [...state.list],
				};
			}

			toast.success("Todo added successfully!", {
				position: toast.POSITION.TOP_CENTER,
				autoClose: 3000,
			});

			console.log(state.list);
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
