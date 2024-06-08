<template>
    <div class="flex justify-between">
      <h1 class="text-3xl font-semibold mb-4">Feedbacks</h1>
    </div>
    <div v-for="feedback in feedbacks" class="shadow-md p-5 rounded-md border mb-5" :key="feedback.id">
        <h5> <span class="text-lg font-semibold text-gray-600">Name: </span> {{ feedback.name }}</h5>
        <p><span class="text-lg font-semibold text-gray-600">Designation: </span>{{ feedback.designation }}</p>
        <p><span class="text-lg font-semibold text-gray-600">Company: </span>{{ feedback.company }}</p>
        <p><span class="text-lg font-semibold text-gray-600">Feedback: </span>{{ feedback.feedback }}</p>
        <p><span class="text-lg font-semibold text-gray-600">Status: </span>{{ feedback.status }}</p>
        <div class="mt-4">
          <span class="text-xl font-semibold">Change to: </span>
          <select class="bg-blue-600 px-3 py-1 rounded-md text-white outline-none" name="status" id="status">
          <option value="pending">Pending</option>
          <option value="approved">Approve</option>
          <option value="rejected">Reject</option>
        </select>
        </div>
      
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(["feedbacks"])
  },
  methods: {
    ...mapActions(["getFeedbacks"]),
  },
  created() {
    this.getFeedbacks()
  },
}
</script>