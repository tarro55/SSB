import axios from '@/axios'
import _ from 'lodash'

const state = {

}
const getters = {

}

const mutations = {

}

const actions = {
async getData() {
let load = axios.get('')
    .then((r) => {

    }).catch((e) => {

});
    },
async storeData(context, params) {
    let load = axios.post('api/user', params)
    .then((r) => {
        alert('Save Data Success');
    }).catch((e) => {
        alert('Error Save');
    });
},
async checkUsername(context,params){
    let user = 0;
    let load = await axios.get('api/check/'+params)
    .then((r) => {
        user = r.data;
    }).catch((e) => {
        
    });
    return user;
}

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
    }