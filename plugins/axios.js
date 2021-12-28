export default function ({ $axios, store, redirect }) {
    $axios.interceptors.response.use(
      res => res,
      (err) => {
        store.dispatch('setError', err)
      }
    )
  }
  