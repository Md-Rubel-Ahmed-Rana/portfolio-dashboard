<template>
    <div class="flex justify-between">
        <h1 class="text-3xl font-semibold mb-4">Educations</h1>
        <p>
            <router-link to="/dashboard/educations/add-new-education">
                <button class="bg-blue-600 px-5 py-2 rounded-md text-white">Add education</button>
            </router-link>
        </p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
        <div v-for="education in educations" :key="education.id" class="bg-white rounded-lg shadow-md p-4">
            <h3 class="text-lg font-bold mb-2">{{ education.className }}</h3>
            <p class="mb-2">Board: {{ education.board }}</p>
            <p class="mb-2">Passing Year: {{ education.passingYear }}</p>
            <p class="mb-2">Result: {{ education.result }}</p>
            <p class="mb-2">Institute: {{ education.institute }}</p>
            <p class="mb-2">Created: {{ education.createdAt?.slice(0, 10) }}</p>
            <p class="mb-2">Last updated: {{ education.updatedAt?.slice(0, 10) }}</p>
            <div class="flex justify-between items-center gap-4 mt-4">
                <p class="w-1/2">
                    <button class="bg-red-600 w-full px-4 py-2 rounded-md text-white">
                        Delete
                    </button>
                </p>
                <router-link class="w-1/2" :to="`/dashboard/educations/edit/${education.id}`">
                    <button class="bg-blue-600 px-4 w-full py-2 rounded-md text-white">
                        Edit
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    computed: {
        ...mapState(["educations"])
    },
    methods: {
        ...mapActions(["getEducations"])
    },
    created() {
        this.getEducations();
    }
};
</script>
