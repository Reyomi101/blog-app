import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
	items: [],
	item: {},
};

export default function named(state = initialState, action) {
	// console.log('greate!');
	switch (action.type) {
		case FETCH_POSTS:
			return {
				...state,
				items: action.payload,
			};
		case NEW_POST:
			return {
				...state,
				item: action.payload,
			};

		default:
			return state;
	}
}
