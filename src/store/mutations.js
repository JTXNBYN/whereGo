export default {
  changeCity (state, city) {
    state.defaultCity = city
    localStorage.setItem('city', city)
    // console.log(state, city)
  }
}
