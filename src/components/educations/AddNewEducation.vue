<template>
    <div class="shadow-lg px-5 pb-8 rounded-md">
        <h3 class="text-2xl font-semibold">Add New Education</h3>
        <form @submit.prevent="handleAddEducation">
            <div class="mt-4">
                <label for="name" class="block mb-2 text-md font-semibold">Class name:</label>
                <input type="text" id="name" v-model="formData.className"
                    class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
            </div>
            <div class="mt-4">
                <label for="institute" class="block mb-2 text-md font-semibold">Institute name:</label>
                <input type="text" id="name" v-model="formData.institute"
                    class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
            </div>
            <div class="flex justify-between gap-5 mb-4">
                <div class="mt-4 w-4/6">
                    <label for="board" class="block mb-2 text-md font-semibold">Board:</label>
                    <input type="text" id="institute" v-model="formData.board"
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
            <div class="mt-6">
                <button type="submit"
                    class="bg-blue-600 text-white py-2 px-14 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-500">Save
                </button>
            </div>
        </form>
    </div>
</template>



<script>
import { mapActions } from "vuex"
export default {
    methods: {
        ...mapActions(["addNewEducation"]),
        handleAddEducation() {
            this.addNewEducation(this.formData)
        }
    },
    data() {
        return {
            formData: {
                className: "",
                board: "",
                passingYear: 0,
                result: "",
                institute: "",
            }
        }
    },

}

</script>