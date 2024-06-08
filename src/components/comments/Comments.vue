<template>
    <div class="flex justify-between">
      <h1 class="text-3xl font-semibold mb-4">Comments</h1>
      <p>
        <span class="text-xl" >Filter: </span>
        <select class="bg-blue-600 px-5 py-2 rounded-md text-white" name="filter" id="filter">
            <option value="Project1">Project1</option>
            <option value="Project1">Project2</option>
            <option value="Project1">Project3</option>
            <option value="Project1">Blog1</option>
            <option value="Project1">Blog2</option>
            <option value="Project1">Blog3</option>
        </select>
      </p>
    </div>
    <div v-for="comment in comments" :key="comment.id" class="shadow-md p-4 rounded-md border mb-5">
        <h5> <span class="text-lg font-semibold text-gray-600">Name: </span> {{ comment.name }}</h5>
        <p> <span class="text-lg font-semibold text-gray-600">Comment: </span> {{ comment.comment }}</p>
        <h6> <span class="text-lg font-semibold text-gray-600">Post: </span>{{ comment.postId.title || comment.postId.name }} </h6>
        <button class="bg-blue-500 px-5 py-1 rounded-md text-white mt-4">Delete</button>
    </div>
</template>



<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(["comments"])
  },
  methods: {
    ...mapActions(["getComments"]),
    
  },
    created() {
    this.getComments()
  },
 
}
</script>