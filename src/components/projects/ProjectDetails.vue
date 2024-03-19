<template>
  <div class="">
    <div class="rounded-lg shadow-md px-8 pb-6">
      <h2 class="text-2xl font-semibold mb-4">{{ project?.name }}</h2>
      <p class="text-gray-700 mb-4">{{ project?.description }}</p>
      <div class="mb-4">
        <h3 class="text-lg font-semibold mb-2">Project Length</h3>
        <p><span class="font-semibold">Start Date:</span> {{ project?.projectLength?.startDate }}</p>
        <p><span class="font-semibold">End Date:</span> {{ project?.projectLength?.endDate }}</p>
      </div>
      
      <div class="mb-4">
        <h3 class="text-lg font-semibold mb-2">Features</h3>
        <ul>
          <li v-for="(feature, index) in project?.features" :key="index" class="list-disc ml-4">{{ feature }}</li>
        </ul>
      </div>
      
      <div class="mb-4">
        <h3 class="text-lg font-semibold mb-2">Technologies</h3>
        <ul>
          <li v-for="(tech, index) in project?.techStack" :key="index" class="list-disc ml-4">{{ tech }}</li>
        </ul>
      </div>
      
      <div class="mb-4">
        <p><span class="font-semibold">Status:</span> {{ project?.projectStatus }}</p>
      </div>
      
      <div class="mb-4">
        <a :href="project?.sourceCode" target="_blank" class="text-blue-600 hover:underline">Source Code</a>
        <span class="text-gray-400 mx-2">|</span>
        <a :href="project?.liveLink" target="_blank" class="text-blue-600 hover:underline">Live Link</a>
      </div>
      
      <div class="mb-4">
        <p><span class="font-semibold">Created At:</span> {{ project?.createdAt }}</p>
        <p><span class="font-semibold">Last updated At:</span> {{ project?.updatedAt }}</p>
      </div>
      
      <div class="flex">
        <router-link :to="`/dashboard/projects/edit/${project?.id}`">
          <button class="bg-blue-600 px-10 py-2 rounded-md text-white mr-4 hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">Edit</button>
        </router-link>
        <button @click="deleteProject(project?.id)" class="bg-red-600 px-10 py-2 rounded-md text-white hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState(["project"])
  },
  methods: {
    ...mapActions(["getSingleProject", "deleteProject"]),
    fetchProjectDetails() {
      this.getSingleProject(this.id);
    },
  },
  mounted() {
    this.fetchProjectDetails();
  }
};
</script>
