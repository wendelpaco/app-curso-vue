<template>
  <div id="card-prefixo">
    <h5>
      Prefixos
      <span class="badge badge-info">{{ prefixos.length }}</span>
    </h5>
    <div class="card">
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item" v-for="pre in prefixos" v-bind:key="pre.id">{{ pre.name }}</li>
        </ul>
        <br />
        <div class="input-group">
          <input class="form-control" type="text" placeholder="Digite o sufixo" />
          <div class="input-group-append">
            <button class="btn btn-info">
              <span class="fa fa-plus"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card-prefixo",
  props: {
    prefixos: Array
  }
};
</script>
