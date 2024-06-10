<template>
    <div class="shadow-lg px-5 pb-8 rounded-md">
        <div class="flex justify-between items-center mb-4">
            <h4 class="text-2xl font-semibold text-gray-600">Add New Experience</h4>
            <router-link to="/dashboard/experiences">
                <button class="bg-blue-500 px-10 py-2 rounded-md text-white">Back</button>
            </router-link>
        </div>
        <form @submit.prevent="handleAddNewExperience">
            <div class="mt-4">
                <label for="name" class="block mb-2 text-md font-semibold">Company Name:</label>
                <input type="text" id="name" v-model="formData.name" placeholder="Enter your company name"
                    class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
            </div>
            <div class="flex justify-between gap-5">
                <div class="mt-4 w-1/2">
                    <label for="board" class="block mb-2 text-md font-semibold">Designation:</label>
                    <input placeholder="Enter your position: Full Stack Developer" type="text" id="institute"
                        v-model="formData.designation"
                        class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
                </div>
                <div class="mt-4 w-1/2">
                    <label for="institute" class="block mb-2 text-md font-semibold">Company Type:</label>
                    <select name="" id="" v-model="formData.workType"
                        class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
                        <option v-for="type in companyTypes" :value="type">{{ type }}</option>
                    </select>
                </div>
            </div>

            <div class="mt-4">
                <label for="location" class="block mb-2 text-md font-semibold">Location:</label>
                <input placeholder="Enter your company location" type="text" id="location" v-model="formData.location"
                    class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
            </div>
            <div class="flex justify-between gap-5">
                <div class="mt-4 w-1/4">
                    <label for="workLocation" class="block mb-2 text-md font-semibold">Work Location:</label>
                    <select id="workLocation" v-model="formData.workLocation"
                        class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
                        <option value="Onsite">Onsite</option>
                        <option value="Remote">Remote</option>
                        <option value="Hybrid">Hybrid</option>
                    </select>
                </div>
                <div class="mt-4 w-1/4">
                    <label for="size" class="block mb-2 text-md font-semibold">Company size:</label>
                    <input type="text" id="size" v-model="formData.size"
                        class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
                </div>
                <div class="mt-4 w-1/4">
                    <label for="startDate" class="block mb-2 text-md font-semibold">Start Date:</label>
                    <input type="date" id="startDate" v-model="formData.startDate"
                        class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
                </div>
                <div class="mt-4 w-1/4">
                    <label for="endDate" class="block mb-2 text-md font-semibold">End Date:</label>
                    <input type="date" id="endDate" v-model="formData.endDate"
                        class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
                </div>
            </div>
            <div class="mt-4">
                <label for="website" class="block mb-2 text-md font-semibold">Website:</label>
                <input placeholder="Enter your company website link" type="text" id="website" v-model="formData.website"
                    class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
            </div>
            <div class="mt-4">
                <label for="linkedIn" class="block mb-2 text-md font-semibold">LinkedIn:</label>
                <input placeholder="Enter your company linkedIn link" type="text" id="linkedIn"
                    v-model="formData.linkedIn"
                    class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
            </div>
            <div class="mt-4">
                <label for="responsibilities" class="block mb-2 text-md font-semibold">Responsibilities:</label>
                <p class="text-sm mb-1">Note: Write Responsibilities by comma separated.</p>
                <textarea placeholder="Enter your responsibilities of this company" type="text" rows="3" column="10"
                    id="responsibilities" v-model="formData.responsibilities"
                    class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </div>
            <div class="mt-4">
                <label for="learnedNewTech" class="block mb-2 text-md font-semibold">Learned New Tech:</label>
                <p class="text-sm mb-1">Note: Write Learned New Tech by comma separated.</p>
                <textarea placeholder="Enter tech stack you newly learned from this company" type="text" rows="3"
                    column="10" id="learnedNewTech" v-model="formData.learnedNewTech"
                    class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </div>
            <div class="mt-6">
                <button type="submit"
                    class="bg-blue-600 text-white py-2 px-10 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-500">Save
                </button>
            </div>
        </form>
    </div>
</template>



<script>
import {  mapActions } from "vuex"
import makeArrayFromString from '@/utils/makeArrayFromString';
export default {
    methods: {
        ...mapActions(["addNewExperience"]),
        handleAddNewExperience() {
            this.formData.responsibilities = makeArrayFromString(this.formData.responsibilities)
            this.formData.learnedNewTech = makeArrayFromString(this.formData.learnedNewTech)
            this.addNewExperience(this.formData);
        }
    },
    
    data() {
        return {
            formData: {
                name: "",
                size: 0,
                workType: "Startup",
                designation: "",
                workLocation: "Onsite",
                location: "",
                startDate: "",
                endDate: "",
                website: "",
                linkedIn: "",
                endDate: "",
                responsibilities: [],
                learnedNewTech: [],
            },
            companyTypes: [
                "Startup",
                "SaaS (Software as a Service) Provider",
                "Consulting Firm",
                "Digital Agency",
                "Web Development Company",
                "Mobile App Development Company",
                "Cloud Services Provider",
                "Cybersecurity Firm",
                "Data Analytics Company",
                "E-commerce Platform Provider",
                "AI (Artificial Intelligence) Solutions Provider",
                "Blockchain Technology Company",
                "Game Development Studio",
                "IT Infrastructure Services Company",
                "IoT (Internet of Things) Solutions Provider",
                "Managed Services Provider",
                "Big Data Solutions Company",
                "Software Development Outsourcing Firm",
                "Healthtech Startup",
                "Edtech Startup",
            ]
        }
    },
}

</script>