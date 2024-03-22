<template>
    <div>
        <h2 class="text-xl font-semibold"> Edit banner data</h2>
        <form @submit.prevent="handleEditBannerData">
            <div class="mb-4">
                <label for="description" class="block text-gray-700 font-semibold mb-2 text-lg">Name:</label>
                <input required v-model="formData.name" id="name" name="name"
                    class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"></input>
            </div>
            <div class="mb-4">
                <label for="description" class="block text-gray-700 font-semibold mb-2 text-lg">Position:</label>
                <input required v-model="formData.position" id="name" name="name"
                    class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"></input>
            </div>
            <div class="mb-4">
                <label for="description" class="block text-gray-700 font-semibold mb-2 text-lg">Description:</label>
                <textarea required v-model="formData.description" id="name" name="name" rows="5"
                    class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"></textarea>
            </div>
            <div class="mb-4">
                <label for="description" class="block text-gray-700 font-semibold mb-2 text-lg">Resume link:</label>
                <input required v-model="formData.resumeLink" id="name" name="name"
                    class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"></input>
            </div>
            <div class="mb-4">
                <div class="block text-gray-700  font-semibold text-lg">
                    <label for="image">Image:</label>
                    <img class="w-48 h-40 border p-3 rounded-md" v-if="!isUploadImage" :src="formData.image"
                        alt="Banner section image">
                </div>
                <input v-on:change="handleUploadImage" v-if="isUploadImage" accept="image/*" type="file" required
                    id="image" name="image"
                    class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500" />
                <p>
                    <span class="text-sm font-semibold" v-if="isUploading">Uploading Image. Please wait...</span>
                </p>
                <button v-if="!isUploadImage" @click="toggleImageUpload" type="button"
                    class="bg-purple-500 text-white mt-4 py-2 px-3 rounded-md hover:bg-purple-700 focus:outline-none focus:ring focus:border-purple-500">
                    Change image
                </button>
                <button v-if="isUploadImage" @click="toggleImageUpload" type="button"
                    class="bg-purple-500 text-white mt-5 py-2 px-3 rounded-md hover:bg-purple-700 focus:outline-none focus:ring focus:border-purple-500">
                    Cancel
                </button>
            </div>
            <div class="mt-6">
                <button type="submit"
                    class="bg-blue-600 text-white py-2 px-14 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-500">
                    Save changes
                </button>
            </div>
        </form>
    </div>
</template>


<script>
import { mapState, mapActions } from "vuex";

export default {
    computed: {
        ...mapState(["homeData"])
    },
    methods: {
        ...mapActions(["getHomeData", "uploadSingleImage", "updateBannerData"]),
        handleEditBannerData(){
            this.updateBannerData({ id: this.id, data: this.formData })
        },
       async handleUploadImage(event){
            this.isUploading = true
            const data = await this.uploadSingleImage(event.target.files[0]);
            if(data?.url){
                this.isUploading = false
                this.formData.image = data?.url
                this.isUploadImage = false
            }
        },
        toggleImageUpload(){
            this.isUploadImage = !this.isUploadImage
        }
    },
    data() {
        return {
            id: "",
            formData: {
                name: "",
                image: "",
                position: "",
                description: "",
                resumeLink: "",
                uploadedImage: ""
            },
            isUploadImage: false,
            isUploading: false,
        }
    },
    created() {
        this.getHomeData()
    },
    watch: {
        homeData: {
            immediate: true,
            handler(data){
                if (data?.bannerSection){
                    const { id, bannerSection : {name, image, position, description, resumeLink}} = data
                    this.id = id
                    this.formData.name = name
                    this.formData.image = image
                    this.formData.position = position
                    this.formData.description = description
                    this.formData.resumeLink = resumeLink
                }
            }
        }
    }
}


</script>