<template>
    <div class="flex justify-between items-center mb-4">
        <h4 class="text-2xl font-semibold text-gray-600">Add New Update</h4>
        <router-link to="/dashboard/updates">
            <button class="bg-blue-500 px-10 py-2 rounded-md text-white">Back</button>
        </router-link>
    </div>
    <form @submit.prevent="handleAddNewUpdate" class="shadow-md border rounded-md p-5">
        <div class="mb-3">
            <label class="text-xl font-semibold text-gray-600" for="title">Title:</label>
            <input v-model="formData.title"
                class="border w-full py-2 mt-1 px-3 focus:border-sky-300 focus:outline-sky-300  rounded-md" type="text"
                name="title" id="title" placeholder="Enter update title">
        </div>
        <div class="mb-3">
            <label class="text-xl font-semibold text-gray-600" for="category">Category:</label>
            <select v-model="formData.category"
                class="border w-full py-2 mt-1 px-3 focus:border-sky-300 focus:outline-sky-300  rounded-md">
                <option v-for="category in categories">{{ category }}</option>
            </select>
        </div>
        <div class="mb-3">
            <label class="text-xl font-semibold text-gray-600" for="category">Status:</label>
            <select v-model="formData.status"
                class="border w-full py-2 mt-1 px-3 focus:border-sky-300 focus:outline-sky-300  rounded-md">
                <option v-for="status in statuses">{{ status }}</option>
            </select>
        </div>
        <div class="mb-3">
            <label class="text-xl font-semibold text-gray-600" for="category">Priority:</label>
            <select v-model="formData.priority"
                class="border w-full py-2 mt-1 px-3 focus:border-sky-300 focus:outline-sky-300  rounded-md">
                <option v-for="priority in priorities">{{ priority }}</option>
            </select>
        </div>
        <div class="mb-3 flex items-center">
            <label class="text-xl font-semibold text-gray-600 " for="category">Deployment:</label>
            <input v-model="formData.isLive" type="checkbox" class="border-2 checked:border-sky-400 w-10 h-5 rounded-md"
                name="isLive" id="isLive">
        </div>
        <div class="mb-3">
            <label class="text-xl font-semibold text-gray-600" for="description">Description:</label>
            <textarea v-model="formData.description"
                class="border w-full py-2 mt-1 px-3 focus:border-sky-300 focus:outline-sky-300  rounded-md"
                name="description" id="description" cols="20" rows="5"
                placeholder="Enter update description"></textarea>
        </div>
        <button type="submit" class="bg-blue-500 px-10 mt-5 py-2 rounded-md text-white">Create</button>
    </form>
</template>

<script>

import { mapActions } from 'vuex';
export default {
    methods: {
        ...mapActions(["addNewUpdate"]),
        handleAddNewUpdate(){
            this.addNewUpdate({payload: this.formData});
        }
    },
    data() {
        return {
            formData: {
                title: "",
                description: "",
                category: "Feature",
                isLive: false,
                status: "Planned",
                priority: "Medium"
            },
            categories: ["Feature" , "Bug Fix" , "Improvement"],
            statuses: ["Planned" , "In Progress" , "Completed" , "Delayed"],
            priorities: ["Low" , "Medium" , "High" , "Critical"]
        };
    }
}

</script>