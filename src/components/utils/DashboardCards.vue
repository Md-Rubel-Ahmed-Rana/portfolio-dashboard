<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10">
    <router-link v-for="(card, index) in cards" :key="index" :to="`/dashboard/${card.name.toLowerCase()}`">
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <img v-if="card.name === 'Utils'" :src="homeIcon" alt="Card Image" class="w-full h-48 object-cover p-4">
        <img v-if="card.name === 'Experiences'" :src="experienceIcon" alt="Card Image"
          class="w-full h-48 object-cover p-4">
        <img v-if="card.name === 'Educations'" :src="educationIcon" alt="Card Image"
          class="w-full h-48 object-cover p-4">
        <img v-if="card.name === 'Projects'" :src="projectIcon" alt="Card Image" class="w-full h-48 object-cover p-4">
        <img v-if="card.name === 'Courses'" :src="courseIcon" alt="Card Image" class="w-full h-48 object-cover p-4">
        <div class="p-4">
          <h3 class="text-xl font-semibold mb-2">{{ card.name }}</h3>
          <p class="text-gray-700">{{ card.total }} Total</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import homeIcon from "../../assets/cardIcons/homeIcon.png";
import courseIcon from "../../assets/cardIcons/courseIcon.png";
import educationIcon from "../../assets/cardIcons/educationIcon.png";
import experienceIcon from "../../assets/cardIcons/experienceIcon.jpeg";
import projectIcon from "../../assets/cardIcons/projectIcon.jpeg";

export default {
  computed: {
    ...mapState(["cards"])
  },
  methods: {
    ...mapActions(["getCards"])
  },
  created() {
    this.getCards();
  },
  data() {
    return {
      homeIcon: homeIcon,
      courseIcon: courseIcon,
      educationIcon: educationIcon,
      experienceIcon: experienceIcon,
      projectIcon: projectIcon
    };
  }
};
</script>
