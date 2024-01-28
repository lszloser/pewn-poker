import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    user: {
      name: "",
      vote: 0,
      voted: false,
    },
    tableData: {
      id: "",
    },
    users: [],
  },
  getters: {
    myId: (state) => {
      return state.users.findIndex((item) => item.name === state.user.name);
    },
    getUserByName: (state) => (name) => {
      return state.users.find((user) => user.name === name);
    },
    getUser: (state) => {
      return state.user;
    },
  },
  mutations: {
    setVote(state, vote) {
      state.user.vote = vote;
    },
    setVoted(state) {
      state.user.voted = true;
    },
    setName(state, name) {
      state.user.name = name;
    },
    setTableId(state, id) {
      state.tableData.id = id;
    },
    addUser(state, user) {
      if (state.users.findIndex((item) => item.name === user.name) === -1) {
        state.users.push(user);
      }
    },
    removeUser(state, user) {
      if (state.users.findIndex((item) => item.name === user.name) === -1) {
        state.users.pop(user);
      }
    },
    setUserVoted(state, user) {
      let idx = state.users.findIndex((item) => item.name === user.name);
      if (idx != -1) {
        state.users[idx].voted = true;
      }
    },
    setUserList(state, userList) {
      if (userList.isArray()) {
        state.users = userList;
      }
    },
  },
  actions: {
    setVote({ commit }, vote) {
      commit("setVote", vote);
    },
    setVoted({ commit }) {
      commit("setVoted");
    },
    setName({ commit }, name) {
      commit("setName", name);
    },
    addUser({ commit }, user) {
      commit("addUser", user);
    },
    removeUser({ commit }, user) {
      commit("removeUser", user);
    },
    setTableId({ commit }, id) {
      commit("setTableId", id);
    },
    setUserVoted({ commit }, user) {
      commit("setUserVoted", user);
    },
    setUserList({ commit }, userList) {
      commit("setUserList", userList);
    },
    initTable({ commit, state }) {
      commit("addUser", state.user);
    },
  },
  modules: {},
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],
});
