<template>
  <div class="container mx-auto ">
    <div class="flex justify-between">
      <h1 class="text-3xl font-semibold mb-4">Projects</h1>
      <p>
        <router-link to="/dashboard/projects/add-new-project">
        <button class="bg-blue-600 px-5 py-2 rounded-md text-white">Add Project</button> 
      </router-link> 
      </p>
    </div>
    <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <li v-for="project in projects" :key="project.id" class="bg-white shadow-md rounded-md overflow-hidden">
        <img :src="projectImage(project)" alt="Project Image" class="w-full h-40 object-cover">
        <div class="p-4">
          <h2 class="text-xl font-semibold text-gray-800">{{ project.name }}</h2>
          <p class="text-gray-600 mt-2">{{ project.description.slice(0, 35)  }} {{ project.description.length > 35 ? "..." : null}} </p>
          <div class="flex justify-between items-center mt-4">
            <a :href="project.sourceCode" target="_blank" class="hover:underline">
              <button class="bg-blue-600 px-4 py-2 rounded-md text-white">
              Source Code
            </button>
            </a>
            <a :href="project.liveLink" target="_blank" class="hover:underline">
              <button class="bg-blue-600 px-4 py-2 rounded-md text-white">
              Live Link </button> </a>
              <router-link :to="`/dashboard/projects/${project.id}`">
                <button class="bg-blue-600 px-4 py-2 rounded-md text-white">
                Details
              </button>
              </router-link>
          </div>
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
    projectImage(project) {
      return `https://via.placeholder.com/400x200?text=${project.name}`;
    }
  },
  created() {
    this.getProjects()
  },
}
</script>

