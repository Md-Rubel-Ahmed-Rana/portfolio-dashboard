<template>
    <div>
        <div class="flex flex-col lg:flex-row justify-between">
            <h1 class="text-3xl font-semibold mb-2 lg:mb-4">Courses</h1>

            <p>
                <router-link to="/dashboard/courses/add-new-course">
                    <button class="bg-blue-600 px-5 py-2 mb-4 lg:mb-0 rounded-md text-white">Add Course</button>
                </router-link>
            </p>
            <router-link to="/dashboard">
                <button class="bg-blue-600 lg:hidden block px-5 text-white rounded-md my-2 py-1">Back</button>
            </router-link>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div class="bg-white rounded-lg shadow-md p-4 border flex flex-col justify-between"
                v-for="course in courses" :key="course.id">
                <div>
                    <img :src="course.image" alt="Course Image" class="w-full rounded-md h-48 object-top mb-4">
                    <h3 class="text-lg font-semibold mb-2">{{ course.name }}</h3>
                    <p><strong>Institute:</strong> {{ course.institute }}</p>
                    <p><strong>Duration:</strong> {{ course.duration }}</p>
                    <p><strong>Start Date:</strong> {{ course.startDate.slice(0, 10) }}</p>
                    <p><strong>End Date:</strong> {{ course.endDate.slice(0, 10) }}</p>
                </div>
                <div class="flex justify-between items-center gap-4 mt-4">
                    <p class="w-1/2">
                        <button @click="handleDeleteCourse(course.id)"
                            class="bg-red-600 w-full px-4 py-2 rounded-md text-white">
                            Delete
                        </button>
                    </p>
                    <router-link class="w-1/2" :to="`/dashboard/courses/edit/${course.id}`">
                        <button class="bg-blue-600 px-4 w-full py-2 rounded-md text-white">
                            Edit
                        </button>
                    </router-link>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    computed: {
        ...mapState(["courses"])
    },
    methods: {
        ...mapActions(["getCourses", "deleteCourse"]),
        handleDeleteCourse(id){
           this.deleteCourse(id)
        }
    },
    created() {
        this.getCourses();
    }
};
</script>
