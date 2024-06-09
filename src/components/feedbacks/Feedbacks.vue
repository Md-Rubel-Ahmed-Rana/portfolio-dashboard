<template>
  <div class="flex justify-between mb-4">
    <h1 class="text-3xl font-semibold">Feedbacks</h1>
    <div class="flex items-center gap-2">
      <h5 class="text-xl font-semibold">Filter: </h5>
      <select v-model="selectedFilter" class="bg-blue-600 px-3 py-1 rounded-md text-white outline-none" name="status"
        id="status">
        <option value="all">All</option>
        <option value="pending">Pending</option>
        <option value="approved">Approved</option>
        <option value="rejected">Rejected</option>
      </select>
    </div>
  </div>
  <div v-for="feedback in feedbacks" class="shadow-md p-5 rounded-md border mb-5" :key="feedback.id">
    <h5> <span class="text-lg font-semibold text-gray-600">Name: </span> {{ feedback.name }}</h5>
    <p><span class="text-lg font-semibold text-gray-600">Designation: </span>{{ feedback.designation }}</p>
    <p><span class="text-lg font-semibold text-gray-600">Company: </span>{{ feedback.company }}</p>
    <p><span class="text-lg font-semibold text-gray-600">Feedback: </span>{{ feedback.feedback }}</p>
    <p><span class="text-lg font-semibold text-gray-600">Status: </span>{{ feedback.status }}</p>
    <div class="mt-4 flex gap-3">
      <button @click="handleDeleteFeedback(feedback.id)"
        class="bg-red-600 px-3 py-1 rounded-md text-white outline-none">Delete</button>
      <select @change="(e) => handleChangeStatus(e.target.value, feedback)"
        class="bg-blue-600 px-3 py-1 rounded-md text-white outline-none" name="status" id="status">
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
  data() {
    return {
      selectedFilter: 'all'
    };
  },
  computed: {
    ...mapState(["feedbacks"])
  },
  watch: {
    selectedFilter(newFilter) {
      this.getFeedbacks({ filter: newFilter });
    }
  },
  methods: {
    ...mapActions(["getFeedbacks", "deleteFeedback", "updateFeedback"]),
    handleDeleteFeedback(id) {
      this.deleteFeedback({ id: id });
    },
    handleChangeStatus(value, feedback) {
      if (value === feedback?.status) {
        return null;
      } else {
        this.updateFeedback({ id: feedback.id, payload: { ...feedback, status: value } });
      }
    }
  },
  created() {
    this.getFeedbacks({ filter: this.selectedFilter });
  },
}
</script>
