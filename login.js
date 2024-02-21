import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
//// https://cdnjs.cloudflare.com/ajax/libs/vue/3.4.15/vue.esm-browser.prod.js

const site ='https://vue3-course-api.hexschool.io/v2';


const app = createApp({
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    }
  },
  methods: {
    login() {
      const api = `${site}/admin/signin`;
      axios.post(api, this.user)
      .then((response) => {
        const { token, expired } = response.data;
        // 寫入 cookie token
        // expires 設置有效時間
        document.cookie = `hexschoolToken=${token}; expires=${new Date(expired)}`;
        window.location = 'products.html' //從全域window的location代入product.html, 登入之後會跳轉至product.html 
      }).catch((err) => {
        alert('登入失敗'); //錯誤則會跳出error的message
      });
    },
  },
}).mount('#app');
