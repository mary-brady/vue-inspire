import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from "./router"

Vue.use(Vuex)

let api = Axios.create({
  baseURL: 'api/',
  timeout: 3000,
  withCredentials: true
})

let weatherApi = Axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=boise&&APPID=bd82255fd0a21fa1238699b9eda2ee35",
  timeout: 3000
})


export default new Vuex.Store({
  state: {
    todos: {},
    weather: {},
    image: {},
    quote: {}

  },
  mutations: {
    setWeather(state, weather) {
      state.weather = weather
    }

  },
  actions: {
    getWeather({ commit }) {
      weatherApi.get("")
        .then(res => {
          commit('setWeather', res.data)
        })
    }
  }
})
