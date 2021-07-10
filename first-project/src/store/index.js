import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        List: [],
        allList: {
            1: [
                { id: 1, date: '12.11.2020', category: 'Clothes', cost: 1900 },
                { id: 2, date: '12.11.2020', category: 'Sport', cost: 500 },
                { id: 3, date: '12.11.2020', category: 'Food', cost: 1300 },
            ],
            2: [
                { id: 4, date: '12.05.2021', category: 'Sport', cost: 100 },
                { id: 5, date: '12.05.2021', category: 'Education', cost: 9000 },
                { id: 6, date: '12.05.2021', category: 'Sport', cost: 1890 },
            ],
            3: [
                { id: 7, date: '12.05.2021', category: 'Sport', cost: 100 },
                { id: 8, date: '12.05.2021', category: 'Sport', cost: 100 },
                { id: 9, date: '12.05.2021', category: 'Education', cost: 9000 },
            ],
            4: [
                { id: 10, date: '12.05.2021', category: 'Education', cost: 9000 },
                { id: 11, date: '12.05.2021', category: 'Sport', cost: 100 },
                { id: 12, date: '12.05.2021', category: 'Sport', cost: 100 },
            ],
            5: [
                { id: 13, date: '12.05.2021', category: 'Sport', cost: 100 },
                { id: 14, date: '12.05.2021', category: 'Education', cost: 9000 },
                { id: 15, date: '12.05.2021', category: 'Sport', cost: 100 },
            ]
        }
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
        fetchData({ commit }, page) {
            return new Promise((resolve) => {
                let items = []
                items = [...this.state.allList[`${page}`]];
                resolve(items)
            }).then(res => {
                commit('setList', res)
            })
        }
    },
    getters: {
        getList: state => state.List,

        getFullListValue: state => {
            return state.List.reduce((res, cur) => res + cur.cost, 0)
        }
    },
})