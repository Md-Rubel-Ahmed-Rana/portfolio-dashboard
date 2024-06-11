<template>
    <div class="lg:flex justify-between gap-3">
        <h1 class="lg:text-3xl text-2xl font-semibold mb-4">Experiences</h1>
        <p>
            <router-link to="/dashboard/experiences/add-new-experience">
                <button class="bg-blue-600 lg:px-5 px-3 lg:py-2 py-1 rounded-md text-white">Add Experience</button>
            </router-link>
        </p>
    </div>
    <router-link to="/dashboard">
        <button class="bg-blue-600 lg:hidden block px-5 text-white rounded-md my-5 py-1">Back</button>
    </router-link>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div v-for="(experience, index) in experiences" :key="index"
            class="p-4 border rounded-lg flex flex-col justify-between ">
            <div>
                <h2 class="font-semibold mb-2"><span class="font-semibold">Company:</span> {{ experience.name }}
                </h2>
                <p class="mb-4"><span class="font-semibold">Type:</span> {{ experience.workType }}</p>
                <p class="mb-4"><span class="font-semibold">Location:</span> {{ experience.location }}</p>
                <p class="mb-4"><span class="font-semibold">Work Location:</span> {{ experience.workLocation }}</p>
                <p class="mb-4"><span class="font-semibold">Designation:</span> {{ experience.designation }}</p>

                <p class="mb-4"><span class="font-semibold">Website:</span> <a :href="experience.website"
                        class="text-blue-500 hover:underline">{{ experience.website }}</a></p>
                <p class="mb-4"><span class="font-semibold">LinkedIn:</span> <a :href="experience.linkedIn"
                        class="text-blue-500 hover:underline break-words">{{ experience.linkedIn }}</a>
                </p>
            </div>
            <div class="flex justify-between items-center gap-3 w-full">
                <router-link class="w-1/3" :to="`/dashboard/experiences/${experience.id}`">
                    <button class="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Details
                    </button>
                </router-link>
                <router-link class="w-1/3" :to=" `/dashboard/experiences/edit/${experience.id}`">
                    <button class="bg-yellow-500 w-full hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                        Edit
                    </button>
                </router-link>
                <button @click="handleDeleteExperience(experience.id)"
                    class="bg-red-500 w-1/3 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Delete
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    computed: {
        ...mapState(["experiences"])
    },
    methods: {
        ...mapActions(["getExperiences", "deleteExperience"]),
        handleDeleteExperience(id){
            this.deleteExperience(id)
        }
    },
    created() {
        this.getExperiences();
    }
};
</script>

