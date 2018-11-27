import axios from 'axios'
import _ from 'lodash'

const state = {
    userData:{},
}
const getters = {

}

const mutations = {

}

const actions = {
async getData() {
let load = axios.get('http://192.168.1.6:222/api/user')
    .then((r) => {
        state.userData = r.data;
        console.log(r.data)
    }).catch((e) => {
        console.log(e)
        alert("รับข้อมูลไม่ได้",e.data)

});
    },
async storeData(context, params) {
    let load = axios.post('http://192.168.1.6:222/api/user', params)
    .then((r) => {
        alert('Save Data Success');
    }).catch((e) => {
        alert('Error Save');
    });
},

async updateData(context, params) {
    let load = axios.put('http://192.168.1.6:222/api/user' + params.id, params)
        .then((r) => {
        alert('Update Data Success');
    }).catch((e) => {
        alert('Error Update');
    });
},

async destroyData(context, params) {
    let load = axios.delete('http://192.168.1.6:222/api/user' + params.id)
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