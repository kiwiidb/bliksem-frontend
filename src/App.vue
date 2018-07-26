<template>
<div class="b">
<button v-on:click="getInvoice">Pay</button>
<div >{{ invoice }}</div>
<qrcode-vue :value=invoice></qrcode-vue>
</div>
</template>

<script>
import axios from 'axios'
import QrcodeVue from 'qrcode.vue'

export default {
  data () {
    return {
      invoice: '',
      posts: [],
      errors: []
    }
  },
  methods: {
    getInvoice: function (event) {
      axios.post(`http://localhost:8081/addinvoice`, {body: '"value" : 10'})
        .then(response => {
          console.log(response.data.payment_request)
          this.invoice = response.data.payment_request
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  },
  components: {
    QrcodeVue
  },
  // Fetches posts when the component is created.
  created () {
    axios.get(`http://jsonplaceholder.typicode.com/posts`)
      .then(response => {
        this.posts = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}

</script>

<style>
  div.b {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    word-wrap: break-word;
    max-width: 300px;
}
</style>
