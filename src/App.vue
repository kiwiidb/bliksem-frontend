<template>
<div>
<v-app>
<body >
<h1 align="center" id="header">Give me some money, thanks.</h1>
  <div align="center">
<v-btn @click="getInvoice($event, '1000')">
1000 sats
</v-btn>
<v-btn @click="getInvoice($event, '10000')">
10000 sats
</v-btn>
<v-btn @click="getInvoice($event, '100000')">
100000 sats
</v-btn>
  </div>
<div id="wrapper" >
<div id="first" v-show="invoice != ''">Invoice for {{ value_invoice }} satoshis: {{ invoice }}</div>
<qrcode-vue v-show="invoice != ''" id="second" :value=invoice size=150></qrcode-vue>
</div>
</body>
</v-app>
</div>
</template>

<script>
import axios from 'axios'
import QrcodeVue from 'qrcode.vue'

export default {
  data () {
    return {
      invoice: '',
      value_invoice: '',
      errors: []
    }
  },
  methods: {
    getInvoice: function (event, amount) {
      axios.post(`http://localhost:8081/addinvoice`, {body: '"value" : ' + amount})
        .then(response => {
          console.log(response.data.payment_request)
          this.invoice = response.data.payment_request
          this.value_invoice = amount
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

#wrapper {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    word-wrap: break-word;
    width: 600px;
    overflow: hidden; /* will contain if #first is longer than #second */
}
#first {
    width: 300px;
    margin-right: 80px;
    float:left; /* add this */
}
#second {
    overflow: hidden; /* if you don't want #second to wrap below #first */
}
</style>
