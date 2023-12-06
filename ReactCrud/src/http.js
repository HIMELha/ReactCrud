import axios from 'axios';

export default axios.create({
    baseURL: 'https://postbd.xyz/TaskApp/public/api',
    headers: {
        'Content-Type':'application/json'
    }
})