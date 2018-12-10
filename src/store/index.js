import Vue from 'vue'
import Vuex from 'vuex'
import pathify from 'vuex-pathify';
import loading from './loading';
import error from "./error"
import user from './user/user';
import test from './test';

Vue.use(Vuex)

const modules = {
    loading : loading,
  
    error : error,
    user:user,
    test:test
    
}

export default new Vuex.Store({
    plugins: [pathify.plugin],
    modules : modules
})
