<template>
  <div class="flex justify-between">
    <h1 class="text-3xl font-semibold mb-4">Comments</h1>
    <p>
      <span class="text-xl">Filter: </span>
      <select v-model="selectedItem" class="bg-blue-600 px-5 py-2 outline-none  rounded-md text-white" name="filter"
        id="filter">
        <option value="" disabled>Select an item</option>
        <option value="All">All</option>
        <option class="mb-2" v-for="project in projects" :key="project.id" :value="project.id">
          {{ project.name.length >= 20 ? `${project.name.slice(0, 20)} ...` : project.name }}
        </option>
        <option v-for="blog in blogs" :key="blog.id" :value="blog.id">{{ blog.title.length >= 20 ?
          `${blog.title.slice(0, 20)} ...` : blog.title }}</option>
      </select>
    </p>
  </div>
  <div v-for="comment in comments" :key="comment.id" class="shadow-md p-4 rounded-md border mb-5">
    <h5> <span class="text-lg font-semibold text-gray-600">Name: </span> {{ comment.name }}</h5>
    <p> <span class="text-lg font-semibold text-gray-600">Comment: </span> {{ comment.comment }}</p>
    <h6> <span class="text-lg font-semibold text-gray-600">Post: </span>{{ comment.postId.title || comment.postId.name
      }} </h6>
    <button @click="handleDeleteComment(comment.id)"
      class="bg-red-500 px-5 py-1 rounded-md text-white mt-4">Delete</button>
    <button @click="handleToggleSuspensive(comment)" class="bg-yellow-500 px-5 py-1 rounded-md text-white mt-4 ml-2">{{
      comment.suspend ? "Unsuspend" : "Suspend" }}</button>
  </div>
</template>



<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(["comments", "blogs", "projects"])
  },
  methods: {
    ...mapActions(["getComments", "getBlogs", "getProjects", "toggleSuspend", "deleteComment"]),
    handleToggleSuspensive(comment){
      const { id, suspend } = comment
      this.toggleSuspend({ id, suspend: !suspend })
    },
    handleDeleteComment(id){
      this.deleteComment({id: id})
    }
  },
  created() {
    this.getComments({ postId : ""})
    this.getBlogs()
    this.getProjects()
  },
  watch: {
    selectedItem(newFilter) {
      this.getComments({ postId: newFilter });
    }
  },
  data(){
    return {
      selectedItem: ""
    }
  }
}
</script>