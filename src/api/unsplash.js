import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ddcaf1be492c65b7f94be269f0afe1c092271de0422cc727f4d0457ce3df763b'
    }
});