<template>
  <div class="container mx-auto py-8">
    <h1 class="text-3xl font-semibold mb-4">Projects</h1>
    <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <li v-for="project in projects" :key="project.id" class="bg-white shadow-md rounded-md overflow-hidden">
        <img :src="projectImage(project)" alt="Project Image" class="w-full h-40 object-cover">
        <div class="p-4">
          <h2 class="text-xl font-semibold text-gray-800">{{ project.name }}</h2>
          <p class="text-gray-600 mt-2">{{ project.description }}</p>
          <div class="flex justify-between items-center mt-4">
            <a :href="project.sourceCode" target="_blank" class="text-blue-600 hover:underline">Source Code</a>
            <a :href="project.liveLink" target="_blank" class="text-blue-600 hover:underline">Live Link</a>
          </div>
        </div>
        <div class="p-4 bg-gray-100">
          <h3 class="text-lg font-semibold text-gray-800">Project Details</h3>
          <ul class="mt-2">
            <li v-for="(value, key) in projectDetails(project)" :key="key" class="text-gray-600">
              <span class="font-semibold">{{ key }}:</span> {{ value }}
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(["projects"])
  },
  methods: {
    ...mapActions(["getProjects"]),
    projectDetails(project) {
      return {
        "Start Date": project.projectLength.startDate,
        "End Date": project.projectLength.endDate,
        "Features": project.features.join(", "),
        "Tech Stack": project.techStack.join(", "),
        "Is Developing": project.isDeveloping ? "Yes" : "No"
      };
    },
    projectImage(project) {
      return `https://via.placeholder.com/400x200?text=${project.name}`;
    }
  },
  created() {
    this.getProjects()
  },
}
</script>

<style>
/* You can add custom styles specific to this component if needed */
</style>
