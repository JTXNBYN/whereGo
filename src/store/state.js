let defaultCity = '上海'
try {
  defaultCity = localStorage.getItem('city') || defaultCity
} catch (e) {}

export default {
  defaultCity
}
