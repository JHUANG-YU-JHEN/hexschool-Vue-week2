import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

const site ='https://vue3-course-api.hexschool.io/v2';
const apiPath = 'jhuangyujhen'

const app = createApp({
    data() {
      return {
        tempProduct : {},
        products : {}
      }
    },
    methods: {
     //驗證資料
     checkUser() {
      const api = `${site}/api/user/check`; 
      axios.post(api)
      .then((res) => {
         // this.products = res.data.products;
         // console.log(this.products);
         console.log(res.data.success); 
         if (res.data.success){
          this.getData()
         }
        })
      .catch((err) =>{
        alert(err.response.data.message) ;
        window.location = 'login.html' ; 
      })
     },
     //取得資料
     getData() {
      const api = `${site}/api/${apiPath}/admin/products/all`;
      axios.get(api).then((res) => {
          this.products = res.data.products;
          console.log(this.products);
        });
     }
    },
    mounted() {
      // 取出 Token
        const token =  document.cookie.replace(
            /(?:(?:^|.*;\s*)hexschoolToken\s*\=\s*([^;]*).*$)|^.*$/,
            "$1",
        );
        axios.defaults.headers.common['Authorization'] = token;

       //this.getData()
       this.checkUser()
    }
})


app.mount('#app')