<template>
    <div>
        <h3>Edit about section</h3>
        <form @submit.prevent="handleEditAboutData">
            <div class="mb-4">
                <label for="description" class="block text-gray-700 font-semibold mb-2 text-lg">Description 1:</label>
                <textarea required v-model="formData.description1" id="description" name="description" rows="4"
                    class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"></textarea>
            </div>
            <div class="mb-4">
                <label for="description" class="block text-gray-700 font-semibold mb-2 text-lg">Description 2:</label>
                <textarea required v-model="formData.description2" id="description" name="description" rows="4"
                    class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"></textarea>
            </div>
            <div class="mb-4">
                <label for="image" class="block text-gray-700 w-40 h-40 border p-3 rounded-md font-semibold mb-2 text-lg">Image:</label>
                <img :src="formData.image" alt="About section image">
            </div>
            <div class="mt-6">
                <button 
                type="submit"
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
    data() {
        return {
            id: "",
            formData: {
                description1: "",
                description2: "",
                image: "",
            }
        };
    },
    methods: {
        ...mapActions(["getHomeData"]),
        handleEditAboutData(){
            console.log(this.id, this.formData);
        }
    },
    created() {
        this.getHomeData();
    },
    watch: {
        homeData: {
            immediate: true,
            handler(data){
                if (data?.aboutSection){
                    const { id, aboutSection: { description1, description2, image }} = data || {}
                    this.id = id
                    this.formData.description1 = description1
                    this.formData.description2 = description2
                    this.formData.image = image
                }
            }
        }
    }
};
</script>
