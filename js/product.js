const app = Vue.createApp({
    data() {
      return {
        url: 'https://vue3-course-api.hexschool.io/v2',
        apiPath: 'lingxuan',
        products: [],
        tempProduct: {},
      }
    },
    methods: {
      checkLogin() {
        axios.post(`${this.url}/api/user/check`)
          .then(() => {
            this.getAllProducts();
          })
          .catch((err) => {
            alert(err.data.message);
            window.location.href = 'index.html';
          })
      },
      getAllProducts() {
        axios.get(`${this.url}/api/${this.apiPath}/admin/products`)
          .then((res) => {
            this.products = res.data.products;
          })
          .catch((err) => {
            alert(err.data.message);
          })
      },
    },
    created() {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)vueWeek2Token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
      axios.defaults.headers.common['Authorization'] = token;
      this.checkLogin();
    },
  })
  
  app.mount('#app')