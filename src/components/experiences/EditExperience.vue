<template>
    <div class="shadow-lg px-5 pb-8 rounded-md">
        <h3 class="text-2xl font-semibold">Edit Experience</h3>
        <form @submit.prevent="handleEditExperience">
            <div class="mt-4">
                <label for="name" class="block mb-2 text-md font-semibold">Company Name:</label>
                <input type="text" id="name" v-model="formData.name"
                    class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
            </div>
            <div class="flex justify-between gap-5">
                <div class="mt-4 w-1/2">
                    <label for="board" class="block mb-2 text-md font-semibold">Designation:</label>
                    <input type="text" id="institute" v-model="formData.designation"
                        class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
                </div>
                <div class="mt-4 w-1/2">
                    <label for="institute" class="block mb-2 text-md font-semibold">Company Type:</label>
                    <select name="" id="" v-model="formData.type"
                        class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
                        <option v-for="type in companyTypes" :value="type">{{ type }}</option>
                    </select>
                </div>
            </div>

            <div class="mt-4">
                <label for="location" class="block mb-2 text-md font-semibold">Location:</label>
                <input type="text" id="location" v-model="formData.location"
                    class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
            </div>
            <div class="flex justify-between gap-5">
                <div class="mt-4 w-1/3">
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
                <input type="text" id="website" v-model="formData.website"
                    class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
            </div>
            <div class="mt-4">
                <label for="linkedIn" class="block mb-2 text-md font-semibold">LinkedIn:</label>
                <input type="text" id="linkedIn" v-model="formData.linkedIn"
                    class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
            </div>
            <div class="mt-4">
                <label for="responsibilities" class="block mb-2 text-md font-semibold">Responsibilities:</label>
                <p class="text-sm mb-1">Note: Write Responsibilities by comma separated.</p>
                <textarea type="text" rows="5" column="10" id="responsibilities" v-model="formData.responsibilities"
                    class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </div>
            <div class="mt-4">
                <label for="learnedNewTech" class="block mb-2 text-md font-semibold">Learned New Tech:</label>
                <p class="text-sm mb-1">Note: Write Learned New Tech by comma separated.</p>
                <textarea type="text" rows="5" column="10" id="learnedNewTech" v-model="formData.learnedNewTech"
                    class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </div>
            <div class="mt-6">
                <button type="submit"
                    class="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-500">Save
                    Changes</button>
            </div>
        </form>
    </div>
</template>



<script>
import { mapState, mapActions } from "vuex"
import makeArrayFromString from '@/utils/makeArrayFromString';
export default {
    props: {
        id: {
            type: String,
            require: true
        }
    },
    computed: {
        ...mapState(["experience"])
    },
    methods: {
        ...mapActions(["getExperience", "updateExperience"]),
        getSingleExperience() {
            this.getExperience(this.id)
        },
        handleEditExperience() {
            this.formData.responsibilities = makeArrayFromString(this.formData.responsibilities)
            this.formData.learnedNewTech = makeArrayFromString(this.formData.learnedNewTech)
            this.updateExperience({ id: this.id, updatedData: this.formData });
        }
    },
    mounted() {
        this.getSingleExperience()
    },
    data() {
        return {
            formData: {
                name: "",
                size: 0,
                type: "",
                designation: "",
                workLocation: "",
                location: "",
                startDate: "",
                endDate: "",
                website: "",
                linkedIn: "",
                endDate: "",
                responsibilities: [],
                learnedNewTech: [],
            },
            companyTypes : [
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
    watch: {
        experience: {
            immediate: true,
            handler(data) {
                if (data) {
                    this.formData.name = data.name
                    this.formData.size = data.size
                    this.formData.type = data.type
                    this.formData.designation = data.designation
                    this.formData.workLocation = data.workLocation
                    this.formData.location = data.location
                    this.formData.website = data.website
                    this.formData.linkedIn = data.linkedIn
                    this.formData.startDate = data.startDate?.slice(0, 10)
                    this.formData.endDate = data.endDate?.slice(0, 10)
                    this.formData.responsibilities = data.responsibilities?.join(", ");
                    this.formData.learnedNewTech = data.learnedNewTech?.join(", ");
                }
            }
        }
    }
}

</script>