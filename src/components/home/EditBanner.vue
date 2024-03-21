<template>
    <div>
        <h2 class="text-xl font-semibold"> Edit banner section</h2>
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
                <label for="image"
                    class="block text-gray-700 w-40 h-40 border p-3 rounded-md font-semibold mb-2 text-lg">Image:</label>
                <img :src="formData.image" alt="About section image">
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
        ...mapActions(["getHomeData"]),
        handleEditBannerData(){
            console.log(this.id, this.formData);
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
                resumeLink: ""
            }
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