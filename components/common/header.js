Vue.component('header-1',{
  data: function(){
    return{
      languages: ['IT', 'DE', 'EN', 'FR'],
    }
  },
  template:
      `<div>
        <p class="languages">
          <a href="#" v-for="language in languages">{{ language }} | </a>
        </p>
        <h1>Assignment 1</h1>
        <p id="copyright">© Giacomo Gioli, Enis Meta, Salahudin Zumberi, Jonas Trautmann</p>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">Dashboard</router-link>
            </li>
          </ol>
        </nav>
        </div>`,

})
