import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        List: [],
    },
    mutations: {
        setList(state, pay) {
            state.List = pay
        },
        addList(state, pay) {
            state.List.push(pay)
        }
    },
    actions: {
        fetchData({commit}){
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    const items = []
                    for(let i = 1; i <= 50; i++){
                        items.push({
                            date: "23.12.2020",
                            category: "Sport",
                            cost: i,
                            id: i
                        })
                    }
                    resolve(items)
                }, 10)
            }).then(res=>{
                commit('setList', res)
            })
        },
    },
    getters: {
        getList: state => state.List,

        getFullListValue: state => {
            return state.List.reduce((res, cur) => res + cur.cost, 0)
        },

        getLength: state => state.List.length
    },
})