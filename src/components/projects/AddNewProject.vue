<template>
  <div class="px-8 pb-8 bg-white shadow-md rounded-lg">
    <h2 class="text-2xl font-semibold mb-4">Add a new project</h2>
    <form @submit.prevent="submitForm">
      <div class="mb-4">
        <label for="name" class="block text-gray-700 font-semibold mb-2 text-lg">Project Name:</label>
        <input placeholder="Enter your project name" required type="text" v-model="formData.name" id="name" name="name"
          class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500">
      </div>
      <div class="mb-4">
        <label for="description" class="block text-gray-700 font-semibold mb-2 text-lg">Description:</label>
        <textarea placeholder="Enter your project description" required v-model="formData.description" id="description"
          name="description" rows="4"
          class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"></textarea>
      </div>
      <div class="mb-4">
        <h3 class="font-semibold mb-1 text-lg">Features</h3>
        <p class="text-sm mb-1">Note: Write feature by comma separated.</p>
        <textarea placeholder="Enter your project features by comma separated." required v-model="formData.features "
          name="technologies" id="" cols="30" rows="5"
          class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"></textarea>
      </div>
      <div class="mb-4">
        <h3 class="font-semibold mb-1 text-lg">Technologies</h3>
        <p class="text-sm mb-1">Note: Write tech by comma separated.</p>
        <textarea placeholder="Enter your project features by comma separated." required v-model="formData.techStack "
          name="technologies" id="" cols="30" rows="3"
          class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"></textarea>
      </div>
      <div class="flex justify-between items-center gap-5 mb-4">
        <div class="w-1/2">
          <label for="startDate" class="block text-gray-700 font-semibold mb-2 text-lg">Start Date:</label>
          <input placeholder="Select your project's starting date" required type="date"
            v-model="formData.projectLength.startDate" id="startDate" name="startDate"
            class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500">
        </div>
        <div class="w-1/2">
          <label for="endDate" class="block text-gray-700 font-semibold mb-2 text-lg">End Date:</label>
          <input placeholder="Select your project's ending date" type="date" v-model="formData.projectLength.endDate"
            id="endDate" name="endDate"
            class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500">
        </div>
      </div>
      <div class="mb-4">
        <label for="sourceCode" class="block text-gray-700 font-semibold mb-2 text-lg">Repository link:</label>
        <input placeholder="Enter your project github repository link." required type="text"
          v-model="formData.sourceCode" id="sourceCode" name="sourceCode"
          class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500">
      </div>
      <div class="mb-4">
        <label for="liveLink" class="block text-gray-700 font-semibold mb-2 text-lg">Live Link:</label>
        <input placeholder="Enter your project live link." type="text" v-model="formData.liveLink"
          id="liveLink" name="liveLink"
          class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500">
      </div>
      <div class="mb-4 flex items-center gap-2">
        <label for="projectStatus" class="block text-gray-700 font-semibold mb-2 text-lg">Project Status:</label>
        <select required id="projectStatus" v-model="formData.projectStatus" name="projectStatus"
          class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500">
          <option v-for="status in projectStatuses" :value="status" :key="status">{{ status }}</option>
        </select>
      </div>
      <div class="mt-6">
        <button type="submit"
          class="bg-blue-600 text-white py-2 px-14 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-500">Save</button>
      </div>
    </form>
  </div>
</template>

<script>
import makeArrayFromString from '@/utils/makeArrayFromString';
import {  mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(["addNewProject"]),
    submitForm() {
      this.formData.features = makeArrayFromString(this.formData.features)
      this.formData.techStack = makeArrayFromString(this.formData.techStack)
      this.addNewProject(this.formData )
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
        projectStatus: "Design",
        features: [],
        techStack: []
      },
      projectStatuses: [
        "Planning",
        "Design",
        "Development",
        "Content Creation",
        "Testing",
        "Deployment",
        "Maintenance",
        "Updates",
        "Optimization",
        "Review",
        "Feedback Incorporation"
      ],
    };
  }
  
};
</script>
