<template>
    <div>
        <h3 class="text-2xl font-semibold">Edit course</h3>
        <div class="mt-4">
            <label for="name" class="block mb-2">Course Name:</label>
            <input type="text" id="name" v-model="editedCourse.name"
                class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
        </div>
        <div class="mt-4">
            <label for="image" class="block mb-2">Image URL:</label>
            <input type="text" id="image" v-model="editedCourse.image"
                class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
        </div>
        <div class="mt-4">
            <label for="duration" class="block mb-2">Duration:</label>
            <input type="text" id="duration" v-model="editedCourse.duration"
                class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
        </div>
        <div class="mt-4">
            <label for="startDate" class="block mb-2">Start Date:</label>
            <input type="date" id="startDate" v-model="editedCourse.startDate"
                class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
        </div>
        <div class="mt-4">
            <label for="endDate" class="block mb-2">End Date:</label>
            <input type="date" id="endDate" v-model="editedCourse.endDate"
                class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
        </div>
        <div class="mt-4">
            <label for="passingYear" class="block mb-2">Passing Year:</label>
            <input type="text" id="passingYear" v-model="editedCourse.passingYear"
                class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
        </div>
        <div class="mt-4">
            <label for="result" class="block mb-2">Result:</label>
            <input type="text" id="result" v-model="editedCourse.result"
                class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
        </div>
        <div class="mt-4">
            <label for="institute" class="block mb-2">Institute:</label>
            <input type="text" id="institute" v-model="editedCourse.institute"
                class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    props: {
        id: ""
    },
    computed: {
        ...mapState(["course"])
    },
    data() {
        return {
            editedCourse: {} // Initialize empty object to hold edited course data
        };
    },
    methods: {
        ...mapActions(["getCourse"])
    },
    created() {
        this.getCourse({ courseId: this.id });
    },
    watch: {
        // Update editedCourse data when course data changes
        course: {
            handler(newVal) {
                this.editedCourse = { ...newVal };
            },
            immediate: true // Trigger on initial load
        }
    }
};
</script>

<style>
/* You can add Tailwind CSS classes here for additional styling */
</style>
