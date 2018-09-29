<template>
<v-app>
<vue-snotify></vue-snotify>
<body >
<h1 align="center" id="header">Give me some money, thanks.</h1>
  <div align="center">
<v-btn @click="getInvoice($event, '1000')">
1000 Sats
</v-btn>
<v-btn @click="getInvoice($event, '10000')">
10.000 Sats
</v-btn>
<v-btn @click="getInvoice($event, '100000')">
100.000 Sats
</v-btn>
  </div>
  <div align="center">
    <img src="static/first.gif" style="width:110px;height:80px;margin:8px">
    <img src="static/second.gif" style="width:117px;height:80px;margin:8px">
    <img src="static/third.gif" style="width:126px;height:80px;margin:8px">
  </div>
<div id="wrapper" >
<div id="first" v-show="invoice != ''">Invoice for {{ value_invoice }} satoshis: {{ invoice }}</div>
<qrcode-vue v-show="invoice != ''" id="second" :value=invoice size=150></qrcode-vue>
<v-btn v-show="invoice != ''" v-clipboard:copy="invoice">Copy to clipboard</v-btn>
</div>
</body>
</v-app>
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
      axios.post(`http://127.0.0.1:8081/addinvoice`, {body: '"value" : ' + amount})
        .then(response => {
          console.log(response.data.payment_request)
          this.invoice = response.data.payment_request
          this.value_invoice = amount
          this.$socket.send(this.invoice)
          this.$options.sockets.onmessage = (data) => console.log(data)
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    simpleNotification: function (event) {
      this.$snotify.success('Payment received! Thanks!', {
        timeout: 2000,
        showProgressBar: false,
        closeOnClick: true
      })
    }
  },
  components: {
    QrcodeVue
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
