import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from "./router"

Vue.use(Vuex)

var production = !window.location.host.includes('localhost');
var baseUrl = production ? '//vuespire.herokuapp.com' : '//localhost:3000';

let api = Axios.create({
  baseURL: baseUrl + 'api/',
  timeout: 3000,
  withCredentials: true
})

let auth = Axios.create({
  baseURL: baseUrl + 'auth/',
  timeout: 3000,
  withCredentials: true
})

let weatherApi = Axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=boise&&APPID=bd82255fd0a21fa1238699b9eda2ee35",
  timeout: 3000
})

let apiKey = "10484092-b16f4b86c2e5400452c6b422d"
let imgUrl = ("https://pixabay.com/api/" + apiKey + "/?q=background+images&image_type=photo")
function random() {
  return Math.floor(Math.random() * 3) + 1;
}

let imageApi = Axios.create({
  baseURL: imgUrl,
  timeout: 3000
})


export default new Vuex.Store({
  state: {
    user: {},
    todos: {},
    weather: {},
    image: '',
    quote: {}

  },
  mutations: {
    setWeather(state, weather) {
      state.weather = weather
    },
    setUser(state, user) {
      state.user = user
    },
    clearUser(state) {
      state.user = {},
        state.todos = {},
        state.weather = {},
        state.image = '',
        state.quote = {}
    },
    setTodos(state, todos) {
      state.todos = todos
    },
    setBg(state, img) {
      state.image = img
    }
  },
  actions: {
    getWeather({ commit }) {
      weatherApi.get("")
        .then(res => {
          commit('setWeather', res.data)
        })
    },
    getTodos({ commit }, userId) {
      api.get("todos/" + userId)
        .then(res => {
          commit('setTodos', res.data)
        })
    },
    getBg({ commit }) {
      imageApi.get('')
        .then(res => {
          console.log("image data: ", res)
          commit('setBg', res.data.hits.largeImageUrl)
        })
    },
    //Login Stuff
    register({ commit, dispatch }, newUser) {
      auth.post("register", newUser).then(res => {
        commit("setUser", res.data);
        router.push({ name: "home" });
      })
    },
    authenticate({ commit, dispatch }) {
      auth.get("authenticate").then(res => {
        commit("setUser", res.data);
      })
    },
    login({ commit, dispatch }, creds) {
      auth.post("login", creds).then(res => {
        commit("setUser", res.data);
        dispatch('getTodos', res.data._id)
      })
    },
    logout({ commit }) {
      auth.delete("logout").then(() => {
        commit("clearUser");
        router.push({ name: "home" })
      })
    }
  }
})
