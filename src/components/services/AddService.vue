<template>
    <div>
        <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4">
            <h4 class="text-2xl font-semibold text-gray-600">Add New Service</h4>
            <router-link to="/dashboard/services">
                <button class="bg-blue-500 px-10 mt-4 lg:mt-0 py-2 rounded-md text-white">Back</button>
            </router-link>
        </div>
        <form @submit.prevent="handleAddNewService" class="lg:shadow-md lg:border rounded-md lg:p-5">
            <div class="mb-3">
                <label class="text-xl font-semibold text-gray-600" for="name">Name:</label>
                <input v-model="formData.name"
                    class="border w-full py-2 mt-1 px-3 focus:border-sky-300 focus:outline-sky-300  rounded-md"
                    type="text" name="name" id="name" placeholder="Enter service name">
            </div>
            <div class="mb-3">
                <label class="text-xl font-semibold text-gray-600" for="description">Description:</label>
                <textarea v-model="formData.description"
                    class="border w-full py-2 mt-1 px-3 focus:border-sky-300 focus:outline-sky-300  rounded-md"
                    name="description" id="description" cols="20" rows="5"
                    placeholder="Enter service description"></textarea>
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
                <img class="h-40 w-60 border rounded-md" :src="uploadedImage" alt="service image">
                <button type="button" @click="handleToggleImageChange"
                    class="bg-blue-500 px-3 py-1 rounded-md mt-1 text-white">Change</button>
            </div>
            <button type="submit" class="bg-blue-500 w-full px-10 mt-5 py-2 rounded-md text-white">Create</button>
        </form>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    methods: {
        ...mapActions(["addNewService", "uploadSingleImage"]),
        async handleAddNewService() {
           const result = await this.uploadSingleImage(this.file)
            if (result && result?.url){
                this.addNewService({ payload: { ...this.formData, image: result?.url } })
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
            formData: {},
            isChangeImage: false,
            uploadedImage: "",
            file: ""
        };
    }
};
</script>
