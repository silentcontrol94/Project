import axios from 'axios';
import { SERVICE_URL } from '../constants/api';

export default {
    fetchInialData() {
        return axios.get(SERVICE_URL).then(resp => {
            console.log(resp);
        })
    },
    fetchRoomsData() {
        return axios.get(`SERVICE_URL/rooms`).then(resp => {
            console.log(resp);
        })
    },
    fetchUsersData() {
        return axios.get(`SERVICE_URL/users`).then(resp => {
            console.log(resp);
        })
    },
    fetchTicketsData() {
        return axios.get(`SERVICE_URL/tickets`).then(resp => {
            console.log(resp);
        })
    }
}
