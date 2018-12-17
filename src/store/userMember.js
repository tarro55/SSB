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
    let load = axios.post('api/userreg', params)
    .then((r) => {
        alert('Save Data Success');
    }).catch((e) => {
        alert('Error Save');
    });
},

async checkUsernameMember(context,params){
    let userreg = 0;
    let load = await axios.get('api/checkreg/'+params)
    .then((r) => {
        userreg = r.data;
    }).catch((e) => {
        
    });
    return userreg;
}



}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
    }