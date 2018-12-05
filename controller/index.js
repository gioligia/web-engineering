const router = new VueRouter({
  routes:[
    {
      path: '/',
      component: {
        template: '<overview></overview>'
      }
    },
    {
      path: '/salesByLocation',
      component: {
        template: '<div class="row"><navigation></navigation></div>'
      }
    },
    {
      path: '/inventory',
      component: {
        template: '<div class="row"><navigation></navigation></div>'
      }
    },
    {
      path: '/salesByDivision',
      component: {
        template: '<div class="row"><navigation></navigation></div>'
      }
    },
    {
      path: '/customerRetention',
      component: {
        template: '<div class="row"><navigation></navigation></div>'
      }
    },
    {
      path: '/revenue',
      component: {
        template: '<div class="row"><navigation></navigation></div>'
      }
    },
    {
      path: '/suppliers',
      component: {
        template: '<div class="row"><navigation></navigation></div>'
      }
    }
  ]
})

var app = new Vue({
  router,
  el: '#dashboard',
  data: {
  },
});

function formatNumber(number) {
  return (number).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&\'');
}

function toKorM(number){
  if(number/1000000 > 1){
    return number/1000000+'M';
  }else if(number/1000 > 1){
    return number/1000+'K';
  }else {
    return number;
  }
}
