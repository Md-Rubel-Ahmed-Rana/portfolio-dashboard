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
import axios from 'axios';

export default {
  data() {
    return {
      cards: []
    };
  },
  async created() {
    try {
      const response = await axios.get('/cards.json');
      this.cards = response.data;
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  }
};
</script>

