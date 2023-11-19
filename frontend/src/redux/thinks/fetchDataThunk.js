import axios from 'axios';
import { fetchDataRequest,fetchDataSuccess,fetchDataFailure } from '../actions/fetchDataActions';


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

export default fetchDataThunk;

