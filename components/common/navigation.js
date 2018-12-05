Vue.component('navigation',{
  data: function(){
    return{
      languages: ['IT', 'DE', 'EN', 'FR'],
    }
  },
  template:
      `<div class="col-sm-3">
        <div class="list-group">
          <router-link to="/revenue" class="list-group-item">Revenue</router-link>
          <router-link to="/inventory" class="list-group-item">Inventory</router-link>
          <router-link to="/salesByDivision" class="list-group-item">Sales by Division</router-link>
          <router-link to="/customerRetention" class="list-group-item">Customer Retention</router-link>
          <router-link to="/salesByLocation" class="list-group-item">Sales by Location</router-link>
          <router-link to="/suppliers" class="list-group-item">Suppliers</router-link>
        </div>
      </div>`,

})
