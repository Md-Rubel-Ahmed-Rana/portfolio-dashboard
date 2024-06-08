<template>
    <div>
        <div class="flex justify-between items-center mb-4">
            <h4 class="text-2xl font-semibold text-gray-600">Update Service</h4>
            <router-link to="/dashboard/services">
                <button class="bg-blue-500 px-10 py-2 rounded-md text-white">Back</button>
            </router-link>
        </div>
        <form @submit.prevent="handleUpdateService" class="shadow-md border rounded-md p-5">
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
                <div class="mt-3" v-if="formData.image || !isChangeImage">
                    <img class="h-40 w-60 border rounded-md" :src="formData.image" alt="service image">
                    <button type="button" @click="handleToggleImageChange"
                        class="bg-blue-500 px-3 py-1 rounded-md mt-1 text-white">Change</button>
                </div>
                <div v-if="isChangeImage">
                    <div class="border mt-1 w-72 h-40 rounded-md px-10 flex text-center justify-center items-center">
                        <input @change="handleUploadImage" class="py-3 mt-1 rounded-md" type="file" name="image"
                            id="image">
                    </div>
                    <button type="button" @click="handleToggleImageChange"
                        class="bg-yellow-600 px-3 py-1 rounded-md mt-1 text-white">Cancel</button>
                </div>
            </div>
            <button type="submit" class="bg-blue-500 px-10 mt-5 py-2 rounded-md text-white">Update</button>
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
        ...mapState(["service"])
    },
    methods: {
        ...mapActions(["getSingleService", "updateService"]),
        fetchServiceDetails() {
            this.getSingleService({ id: this.id });
        },
        setDefaultValues() {
            this.formData = { ...this.service };
        },
        handleUpdateService() {
            this.updateService({id: this.id, payload: this.formData})
        },
        handleToggleImageChange() {
            this.isChangeImage = !this.isChangeImage;
            this.formData.image = ""
        },
        handleUploadImage(event) {
            const file = event.target.files[0];
            if (file) {
                this.formData.image = URL.createObjectURL(file);
                this.isChangeImage = false;
            }
        }
    },
    mounted() {
        this.fetchServiceDetails();
    },
    watch: {
        service: {
            immediate: true,
            handler() {
                if (this.service) {
                    this.setDefaultValues();
                }
            }
        }
    },
    data() {
        return {
            formData: {},
            isChangeImage: false,
        };
    }
};
</script>
