<template>
  <div id="card-sufixo">
    <h5>
      Sufixos
      <span class="badge badge-info">{{ sufixos.length }}</span>
    </h5>
    <div class="card">
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item" v-for="su in sufixos" v-bind:key="su.id">{{ su.name }}</li>
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
  name: "card-sufixo",
  props: {
    sufixos: Array
  }
};
</script>
