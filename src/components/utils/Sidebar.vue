<template>
  <aside class="">
    <router-link to="/dashboard">
       <h3 class="text-xl font-semibold mb-2 border px-5 py-2 rounded-md">Dashboard</h3>
    </router-link>
    <router-link v-for="(card, index) in cards" :key="index" :to="`/dashboard/${card.name.toLowerCase()}`">
        <h3 class="text-xl font-semibold mb-2 border px-5 py-2 rounded-md">{{ card.name }}</h3>
    </router-link>
  </aside>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(["cards"])
  },
  methods: {
    ...mapActions(["getCards"])
  },
  created() {
    this.getCards()
  }
};
</script>

