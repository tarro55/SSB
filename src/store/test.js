import axios from '@/axios'
import _ from 'lodash'
const state = {
    test:{},
}
const getters = {

}

const mutations = {

}

const actions = {

async getData() {

let load = axios.get('/api/test')
    .then((r) => {
        state.test = r.data;
    }).catch((e) => {
        alert('error');
        });
    },

async storeData(context, params) {
    let load = axios.post('/api/test', params)
    .then((r) => {
        alert('Save Data Success');
    }).catch((e) => {
        alert('Error Save');
    });
},

async updateData(context, params) {
    let load = axios.put('/api/test' + params.id, params)
        .then((r) => {
        alert('Update Data Success');
    }).catch((e) => {
        alert('Error Update');
    });
},

async destroyData(context, params) {
    let load = axios.delete('/api/test' + params.id)
        .then((r) => {
        alert('Delete Data Success');
    }).catch((e) => {
        alert('Error Delete');
    });
    },

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
    }