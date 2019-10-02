<template>
  <div id="card-domain">
    <h5>
      Domains
      <span class="badge badge-info">{{ domains.length }}</span>
    </h5>
    <div class="card">
      <div class="card-body">
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="domain in domains"
            v-bind:key="domain.id"
          >
            {{ domain.name }}
          </li>
        </ul>
        <br />
        <input
          class="form-control"
          type="text"
          placeholder="Digite o prefixo"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card-domain",
  props: {
    domains: Array
  }
};
</script>

<style scoped></style>
