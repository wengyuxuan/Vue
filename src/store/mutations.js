export default {
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  },
  changeCity1 (state, city) {
    console.log(state)
  }
}
