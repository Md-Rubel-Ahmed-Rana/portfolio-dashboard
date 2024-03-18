<template>
  <div class="px-8 pb-8 bg-white shadow-md rounded-lg">
    <h2 class="text-2xl font-semibold mb-4">Edit Project</h2>
    <form @submit.prevent="submitForm">
      <div class="mb-4">
        <label for="name" class="block text-gray-700 font-semibold mb-2 text-lg">Project Name:</label>
        <input type="text" v-model="formData.name" id="name" name="name" class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500">
      </div>
      <div class="mb-4">
        <label for="description" class="block text-gray-700 font-semibold mb-2 text-lg">Description:</label>
        <textarea v-model="formData.description" id="description" name="description" rows="4" class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"></textarea>
      </div>
      <div class="mb-4">
        <h3 class="font-semibold mb-2 text-lg">Features</h3>
        <div v-for="(feature, index) in formData.features" :key="index" class="mb-4">
          <div class="flex items-center">
        <input type="text" v-model="formData.features[index]" name="feature" class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500">
        <fa icon="trash" class="-ml-5 cursor-pointer text-red-500" />
        </div>
        </div>
      </div>
      <div class="mb-4">
        <h3 class="font-semibold mb-2 text-lg">Technologies</h3>
        <div v-for="(tech, index) in formData.techStack" :key="index" class="mb-4">
          <div class="flex items-center">
            <input type="text" v-model="formData.techStack[index]" name="feature" class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500">
            <fa icon="trash" class="-ml-5 cursor-pointer text-red-500" />
          </div>
        </div>
      </div>
      <div class="mb-4">
        <label for="startDate" class="block text-gray-700 font-semibold mb-2 text-lg">Start Date:</label>
        <input type="date" v-model="formData.projectLength.startDate" id="startDate" name="startDate" class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500">
      </div>
      <div class="mb-4">
        <label for="endDate" class="block text-gray-700 font-semibold mb-2 text-lg">End Date:</label>
        <input type="date" v-model="formData.projectLength.endDate" id="endDate" name="endDate" class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500">
      </div>
      <div class="mb-4">
        <label for="sourceCode" class="block text-gray-700 font-semibold mb-2 text-lg">Source Code:</label>
        <input type="text" v-model="formData.sourceCode" id="sourceCode" name="sourceCode" class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500">
      </div>
      <div class="mb-4">
        <label for="liveLink" class="block text-gray-700 font-semibold mb-2 text-lg">Live Link:</label>
        <input type="text" v-model="formData.liveLink" id="liveLink" name="liveLink" class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500">
      </div>
      <div class="mb-4">
        <label for="isDeveloping" class="block text-gray-700 font-semibold mb-2 text-lg">Is Developing:</label>
        <input type="checkbox" v-model="formData.isDeveloping" id="isDeveloping" name="isDeveloping" class="mr-2">
        <span class="text-gray-600">Check if project is still in development</span>
      </div>
      <div class="mt-6">
        <button type="submit" class="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-500">Save Changes</button>
      </div>
    </form>
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
    ...mapActions(["getSingleProject"]),
    fetchProjectDetails() {
      this.getSingleProject(this.id);
    },
    setDefaultValues() {
      this.formData.name = this.project.name;
      this.formData.description = this.project.description;
      this.formData.projectLength.startDate = this.project.projectLength.startDate;
      this.formData.projectLength.endDate = this.project.projectLength.endDate;
      this.formData.sourceCode = this.project.sourceCode;
      this.formData.liveLink = this.project.liveLink;
      this.formData.isDeveloping = this.project.isDeveloping;
      this.formData.features = this.project.features;
      this.formData.techStack = this.project.techStack;
    },
    submitForm() {
      // Handle form submission here
      console.log("Form submitted with data:", this.formData);
    }
  },
  mounted() {
    this.fetchProjectDetails();
  },
  watch: {
    project: {
      immediate: true,
      handler() {
        if (this.project) {
          this.setDefaultValues();
        }
      }
    }
  },
  data() {
    return {
      formData: {
        name: "",
        description: "",
        projectLength: {
          startDate: "",
          endDate: ""
        },
        sourceCode: "",
        liveLink: "",
        isDeveloping: false,
        features: [],
        techStack: []
      }
    };
  }
};
</script>
