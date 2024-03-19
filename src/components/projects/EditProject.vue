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
        <h3 class="font-semibold mb-1 text-lg">Features</h3>
        <p class="text-sm mb-1">Note: Write feature by comma separated.</p>
        <textarea v-model="formData.features " name="technologies" id="" cols="30" rows="5" class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"></textarea>
      </div>
      <div class="mb-4">
        <h3 class="font-semibold mb-1 text-lg">Technologies</h3>
        <p class="text-sm mb-1">Note: Write tech by comma separated.</p>
        <textarea v-model="formData.techStack " name="technologies" id="" cols="30" rows="5" class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"></textarea>
      </div>
      <div class="flex justify-between items-center gap-5 mb-4">
        <div class="w-1/2">
          <label for="startDate" class="block text-gray-700 font-semibold mb-2 text-lg">Start Date:</label>
          <input type="date" v-model="formData.projectLength.startDate" id="startDate" name="startDate" class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500">
        </div>
        <div class="w-1/2">
          <label for="endDate" class="block text-gray-700 font-semibold mb-2 text-lg">End Date:</label>
          <input type="date" v-model="formData.projectLength.endDate" id="endDate" name="endDate" class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500">
        </div>
      </div>
      <div class="mb-4">
        <label for="sourceCode" class="block text-gray-700 font-semibold mb-2 text-lg">Repository link:</label>
        <input type="text" v-model="formData.sourceCode" id="sourceCode" name="sourceCode" class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500">
      </div>
      <div class="mb-4">
        <label for="liveLink" class="block text-gray-700 font-semibold mb-2 text-lg">Live Link:</label>
        <input type="text" v-model="formData.liveLink" id="liveLink" name="liveLink" class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500">
      </div>
      <div class="mb-4 flex items-center gap-2">
        <label for="projectStatus" class="block text-gray-700 font-semibold mb-2 text-lg">Project Status:</label>
        <select id="projectStatus" name="projectStatus" v-model="formData.projectStatus" class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500">
      <option v-for="status in projectStatus" :value="status" :key="status">{{ status }}</option>
    </select>
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
      this.formData.projectStatus = this.project.projectStatus;
      this.formData.features = this.project.features.join(", ");
      this.formData.techStack = this.project.techStack.join(", ");
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
        projectStatus: "",
        features: [],
        techStack: []
      },
      projectStatus: [
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
