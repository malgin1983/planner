import { Dispatch } from 'redux';
import { addData } from '../CountReducer/Reducer';

export const fetchUserById = (userId: number) => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await fetch(`https://reqres.in/api/users/${userId}`);
            const data = await response.json();
            dispatch(addData(data));
            // @ts-ignore
        } catch (e: any) {
            console.log('ERROR', e);
        }
    };
};
