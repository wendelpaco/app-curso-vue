<template>
  <div id="app">
    <div id="slogan" class="text-center">
      <h1>Name Generator</h1>
      <br />
      <h6 class="text-secondary">
        Gerador de nomes utilizando Vue.js
        <span class="fa fa-check" />
      </h6>
    </div>
    <div id="main">
      <div class="container">
        <div class="row">
          <div class="col-md cel">
            <card-prefixo v-bind:prefixos="prefixos" />
          </div>
          <div class="col-md cel">
            <card-sufixo v-bind:sufixos="sufixos" />
          </div>
        </div>
        <br />
        <card-domain v-bind:domains="domains" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
// imports de components
import CardPrefixo from "./components/CardPrefixo";
import CardSufixo from "./components/CardSufixo";
import Domain from "./components/Domain";

export default {
  name: "app",
  components: {
    "card-prefixo": CardPrefixo,
    "card-sufixo": CardSufixo,
    "card-domain": Domain
  },
  computed: {
    ...mapState(["prefixos"]),
    ...mapState(["sufixos"]),
    ...mapState(["domains"])
  }
};
</script>

<style>
#slogan {
  margin-top: 30px;
  margin-bottom: 30px;
}
#main {
  background-color: #f1f1f1;
  padding-top: 30px;
  padding-bottom: 30px;
}
.cel {
  margin: 5px 0 5px 0;
}
</style>
