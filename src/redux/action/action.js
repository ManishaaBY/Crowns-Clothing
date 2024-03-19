import axios from "axios";
//action types:
export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST"
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS"
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE"

//action creators
export const fetchDataRequest = () => ({
    type: FETCH_DATA_REQUEST
})
export const fetchDataSuccess = (category) => ({
    type: FETCH_DATA_SUCCESS,
    payload: category

})
export const fetchDataFailure = (error) => ({
    type: FETCH_DATA_FAILURE,
    payload: error
})
export const fetchData = () => {
   return (dispatch) => {
       dispatch(fetchDataRequest())
       axios.get('http://localhost:8000/category/findall')
           .then(response => {
               const data = response.data
               dispatch(fetchDataSuccess(data))
           })
           .catch(error => {
               dispatch(fetchDataFailure(error))
           })
   }
}
