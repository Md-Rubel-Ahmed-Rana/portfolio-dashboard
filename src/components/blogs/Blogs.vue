<template>
    <div class="flex justify-between">
        <h1 class="text-3xl font-semibold mb-4">Blogs: {{ blogs.length }}</h1>
        <p>
            <router-link to="/dashboard/blogs/add-new-blog">
                <button class="bg-blue-600 px-5 py-2 rounded-md text-white">Add Blog</button>
            </router-link>
        </p>
    </div>
    <div v-for="blog in blogs" :key="blog.id" class="shadow-md p-5 flex flex-col mb-4 rounded-md border gap-1" >
        <img class="h-40 w-64 border" :src="blog.image" alt="blog image">
        <h5><span class="text-lg font-semibold text-gray-600">Title:</span> {{ blog.title }} </h5>
        <p><span class="text-lg font-semibold text-gray-600">Type:</span> {{ blog.type }} </p>
        <p><span class="text-lg font-semibold text-gray-600">Comments:</span> {{ blog.comments }} </p>
        <div><span class="text-lg font-semibold text-gray-600">Body:</span> <div v-html="blog.body"></div></div>
        <div class="flex gap-3 mt-5">
            <button @click="handleDeleteBlog(blog.id)" class="bg-red-600 px-5 py-2 rounded-md text-white">Delete</button>
             <router-link :to="`/dashboard/blogs/edit/${blog.id}`">
                <button class="bg-blue-600 px-5 py-2 rounded-md text-white">Update</button>
            </router-link>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    computed: {
        ...mapState(["blogs"])
    },
    methods: {
        ...mapActions(["getBlogs", "deleteBlog"]),
        handleDeleteBlog(id){
            this.deleteBlog({id})
        }
    },
    created() {
        this.getBlogs();
    }
};
</script>
