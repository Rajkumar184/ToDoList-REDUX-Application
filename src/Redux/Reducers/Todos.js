import { ActionTypes } from "../Constants/actionTypes";
const intialState = {
	list: [],
};

const Todos = (state = intialState, action) => {
	switch (action.type) {
		case ActionTypes.SET_TODO:
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
		case ActionTypes.DELETED_TODO:
			const newList = state.list.filter((elem) => elem.id === action.id);

			return {
				...state,
				list: newList,
			};
		default:
			return state;
	}
};

export default Todos;
