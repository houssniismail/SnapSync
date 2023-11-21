import axios from 'axios';
import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from '../actions/fetchDataActions';


const fetchDataThunk = () => async (dispatch) => {
    try {
        dispatch(fetchDataRequest());
        const response = await axios.get("http://localhost:5000/api/post/getAll");
        const data = response.data;
        dispatch(fetchDataSuccess(data));
    } catch (error) {
        dispatch(fetchDataFailure(error.message));
    }
};

const postDataThunk = (requestData) => async (dispatch) => {
    try {
        dispatch(fetchDataRequest());
        const response = await axios.post("http://localhost:5000/api/post/Create", {
            title: requestData.Title,
            message: requestData.Message,
            tags: requestData.Tags,
            image: requestData.image
        });
        const data = response.data;
        if (data) {
            dispatch(fetchDataThunk())
        }
    } catch (error) {
        dispatch(fetchDataFailure(error.message));
    }
};

const postDeleteTunk = (requestData) => async (dispatch) => {

    try {
        const response = await axios.delete(`http://localhost:5000/api/post/delete/${requestData}`)
        if (response) {
            dispatch(fetchDataThunk())
        }
    } catch (error) {
        dispatch(fetchDataFailure(error.message))
    }
}

export { fetchDataThunk, postDataThunk, postDeleteTunk };

