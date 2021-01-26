/* Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus: Aggiungere un’immagine presa anch’essa da un data assieme al valore alt dell'attributo. Poi aggiungete all'immagine una classe sempre presa dal data. */

let app = new Vue({

  el: '#container',
  data: {
    dim: 'dimension',
    message: 'Clicca sull\'immagine',
    src: 'https://cdn.pixabay.com/photo/2020/11/20/16/10/tower-bridge-5762070_960_720.jpg',
  },
  methods: {
    clickImage() {
      (this.dim == 'dimension') ? this.dim = 'dimension_big' : this.dim = 'dimension';
    }
  }

});
