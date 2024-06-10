<template>
    <div>
        <div class="flex justify-between items-center mb-4">
            <h4 class="text-2xl font-semibold text-gray-600">Edit Blog</h4>
            <router-link to="/dashboard/blogs">
                <button class="bg-blue-500 px-10 py-2 rounded-md text-white">Back</button>
            </router-link>
        </div>
        <form @submit.prevent="handleEditBlog" class="shadow-md border rounded-md p-5">
            <div class="mb-3">
                <label class="text-xl font-semibold text-gray-600" for="title">Title:</label>
                <input v-model="formData.title"
                    class="border w-full py-2 mt-1 px-3 focus:border-sky-300 focus:outline-sky-300  rounded-md"
                    type="text" name="title" id="title" placeholder="Enter blog title">
            </div>
            <div class="mb-3">
                <label class="text-xl font-semibold text-gray-600" for="type">Type:</label>
                <select v-model="formData.type" class="border w-full py-2 mt-1 px-3 focus:border-sky-300 focus:outline-sky-300  rounded-md">
                    <option v-for="blogType in blogTypes" :key="blogType">{{ blogType }}</option>
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
                <label class="text-xl font-semibold text-gray-600" for="image">Image:</label>
                <div v-if="!uploadedImage"
                    class="border mt-1 w-72 h-40 rounded-md px-10 flex text-center justify-center items-center">
                    <input @change="handleUploadImage" class="py-3 mt-1 rounded-md" type="file" name="image"
                        id="image">
                </div>
            </div>
            <div class="mt-3" v-if="uploadedImage">
                <img class="h-40 w-60 border rounded-md" :src="uploadedImage" alt="blog image">
                <button type="button" @click="handleToggleImageChange"
                    class="bg-blue-500 px-3 py-1 rounded-md mt-1 text-white">Change</button>
            </div>
            <button type="submit" class="bg-blue-500 px-10 mt-5 py-2 rounded-md text-white">Save</button>
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
        ...mapState(["blog"])
    },
    methods: {
        ...mapActions(["uploadSingleImage", "getSingleBlog", "updateBlog"]),
        async fetchBlogDetails() {
            await this.getSingleBlog({ id: this.id });
            this.setDefaultValues();
        },
        setDefaultValues() {
            this.formData = { ...this.blog };
            this.uploadedImage = this.blog.image;
        },
        async handleEditBlog() {
            let imageUrl = this.uploadedImage;
            if (this.file) {
                const result = await this.uploadSingleImage(this.file);
                if (result && result?.url) {
                    imageUrl = result.url;
                }
            }
            this.updateBlog({id: this.id, payload: { ...this.formData, image: imageUrl } });
        },
        handleToggleImageChange() {
            this.isChangeImage = !this.isChangeImage;
            this.uploadedImage = "";
        },
        handleUploadImage(event) {
            const file = event.target.files[0];
            if (file) {
                this.uploadedImage = URL.createObjectURL(file);
                this.isChangeImage = false;
                this.file = file;
            }
        }
    },
    mounted() {
        this.fetchBlogDetails();
    },
    watch: {
        blog: {
            immediate: true,
            handler() {
                if (this.blog) {
                    this.setDefaultValues();
                }
            }
        }
    },
    data() {
        return {
            formData: {},
            isChangeImage: false,
            uploadedImage: "",
            file: "",
            blogTypes: ["JavaScript", "Web Design", "CSS", "Node.js", "React", "Tutorial", "Tips", "Programming","Front-End Development","Back-End Development"]
        };
    }
};
</script>
