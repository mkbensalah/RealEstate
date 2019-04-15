import axios from 'axios';

const headers = {
    'Content-Type': 'application/json'
}
const burl = "http://localhost:5000"

export default {

    signup : function(send){
        return axios.post(burl + '/user/signup',send,{headers: headers})
    },
    
    isAuth : function() {
        return (localStorage.getItem('token') !== null);
    },
    logout : function() {
        localStorage.clear();
    }
}