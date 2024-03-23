<template>
    <div class="shadow-lg px-5 pb-8 rounded-md">
        <h3 class="text-2xl font-semibold">Edit course</h3>
        <form @submit.prevent="handleAddCourse">
            <div class="mt-4">
                <label for="name" class="block mb-2 text-md font-semibold">Course Name:</label>
                <input type="text" id="name" v-model="formData.name"
                    class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
            </div>

            <div class="flex justify-between gap-5">
                <div class="mt-4 w-full">
                    <label for="duration" class="block mb-2 text-md font-semibold">Duration:</label>
                    <input type="text" id="duration" v-model="formData.duration"
                        class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
                </div>
                <div class="mt-4 w-full">
                    <label for="startDate" class="block mb-2 text-md font-semibold">Start Date:</label>
                    <input type="date" id="startDate" v-model="formData.startDate"
                        class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
                </div>
                <div class="mt-4 w-full">
                    <label for="endDate" class="block mb-2 text-md font-semibold">End Date:</label>
                    <input type="date" id="endDate" v-model="formData.endDate"
                        class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
                </div>
            </div>
            <div class="flex justify-between gap-5 mb-4">
                <div class="mt-4 w-4/6">
                    <label for="institute" class="block mb-2 text-md font-semibold">Institute:</label>
                    <input type="text" id="institute" v-model="formData.institute"
                        class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
                </div>
                <div class="mt-4 w-1/6">
                    <label for="passingYear" class="block mb-2 text-md font-semibold">Passing Year:</label>
                    <input type="text" id="passingYear" v-model="formData.passingYear"
                        class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
                </div>
                <div class="mt-4 w-1/6">
                    <label for=" result" class="block mb-2 text-md font-semibold">Result:</label>
                    <input type="text" id="result" v-model="formData.result"
                        class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
                </div>

            </div>
            <div class="mb-4">
                <div class="block text-gray-700  font-semibold text-lg">
                    <label for="image">Image:</label>
                    <img class="w-48 h-40 border p-3 rounded-md" v-if="isUploadedImage" :src="formData.image"
                        alt="Banner section image">
                </div>
                <input v-on:change="handleUploadImage" v-if="!isUploadedImage" accept="image/*" type="file" required
                    id="image" name="image"
                    class="w-full border mt-4 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500" />
                <p>
                    <span class="text-sm font-semibold" v-if="isUploading">Uploading Image. Please wait...</span>
                </p>
            </div>
            <div class="mt-6">
                <button type="submit"
                    class="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-500">Save
                    Changes</button>
            </div>
        </form>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    methods: {
        ...mapActions(["uploadSingleImage", "addNewCourse"]),
        async handleUploadImage(event) {
            this.isUploading = true
            const data = await this.uploadSingleImage(event.target.files[0]);
            if (data?.url) {
                this.isUploading = false
                this.formData.image = data?.url
                this.isUploadedImage = true
            }
        },
        handleAddCourse(){
            this.addNewCourse(this.formData);
        }
    },
    data() {
        return {
            formData: {
                name: "",
                image: "",
                duration: "",
                startDate: "",
                endDate: "",
                passingYear: 0,
                result: "",
                institute: ""
            },
            isUploadedImage: false,
            isUploading: false
        };
    },
};
</script>

