<template>
    <div>
        <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4">
            <h4 class="text-2xl font-semibold text-gray-600">Add New Blog</h4>
            <router-link to="/dashboard/blogs">
                <button class="bg-blue-500 px-10 py-2 mt-4 lg:mt-0 rounded-md text-white">Back</button>
            </router-link>
        </div>
        <form @submit.prevent="handleAddNewBlog" class="lg:shadow-md lg:border rounded-md lg:p-5">
            <div class="mb-3">
                <label class="text-xl font-semibold text-gray-600" for="title">Title:</label>
                <input v-model="formData.title"
                    class="border w-full py-2 mt-1 px-3 focus:border-sky-300 focus:outline-sky-300  rounded-md"
                    type="text" name="title" id="title" placeholder="Enter blog title">
            </div>
            <div class="mb-3">
                <label class="text-xl font-semibold text-gray-600" for="title">Type:</label>
                <select v-model="formData.type" class="border w-full py-2 mt-1 px-3 focus:border-sky-300 focus:outline-sky-300  rounded-md">
                    <option v-for="blogType in blogTypes">{{ blogType }}</option>
                </select>
            </div>
            <div class="mb-3">
                <label class="text-xl font-semibold text-gray-600" for="body">Body:</label>
                <textarea v-model="formData.body"
                    class="border w-full py-2 mt-1 px-3 focus:border-sky-300 focus:outline-sky-300  rounded-md"
                    name="body" id="body" cols="20" rows="5"
                    placeholder="Enter blog body"></textarea>
            </div>
            <div class="mb-3">
                <label class="text-xl font-semibold text-gray-600" for="Image">Image:</label>
                <div v-if="!uploadedImage"
                    class="border mt-1 w-72 h-40 rounded-md px-10  flex text-center justify-center items-center">
                    <input @change="handleUploadImage" class=" py-3 mt-1 rounded-md" type="file" name="image"
                        id="image">
                </div>
            </div>
            <div class="mt-3" v-if="uploadedImage">
                <img class="h-40 w-60 border rounded-md" :src="uploadedImage" alt="blog image">
                <button type="button" @click="handleToggleImageChange"
                    class="bg-blue-500 px-3 py-1 rounded-md mt-1 text-white">Change</button>
            </div>
            <button type="submit" class="bg-blue-500 w-full px-10 mt-5 py-2 rounded-md text-white">Create</button>
        </form>
    </div>
</template>

<script>
import {  mapActions } from 'vuex';

export default {
    methods: {
        ...mapActions(["uploadSingleImage", "addNewBlog"]),
        async handleAddNewBlog() {
            if(this?.file){
                const result = await this.uploadSingleImage(this.file)
                if (result && result?.url){
                    this.addNewBlog({ payload: { ...this.formData, image: result?.url } })
                }else{
                    this.addNewBlog({ payload: { ...this.formData, image: "" } })
                }
            }else{
                 this.addNewBlog({ payload: { ...this.formData, image: "" } })
            }
        },
        handleToggleImageChange() {
            this.isChangeImage = !this.isChangeImage;
            this.uploadedImage = ""
        },
        handleUploadImage(event) {
            const file = event.target.files[0];
            if (file) {
                this.uploadedImage = URL.createObjectURL(file);
                this.isChangeImage = false;
                this.file = file
            }
        }
    },
    data() {
        return {
            formData: {
                type: "JavaScript"
            },
            isChangeImage: false,
            uploadedImage: "",
            file: "",
            blogTypes: ["JavaScript", "Web Design", "CSS", "Node.js", "React", "Tutorial", "Tips", "Programming","Front-End Development","Back-End Development"]
        };
    }
};
</script>
