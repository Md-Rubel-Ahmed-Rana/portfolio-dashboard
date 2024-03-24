<template>
    <div class="flex justify-between">
        <h1 class="text-3xl font-semibold mb-4">Experiences</h1>
        <p>
            <router-link to="/dashboard/projects/add-new-project">
                <button class="bg-blue-600 px-5 py-2 rounded-md text-white">Add Experience</button>
            </router-link>
        </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div v-for="(experience, index) in experiences" :key="index" class="p-4 border rounded-lg">
            <h2 class="font-semibold mb-2"><span class="font-semibold">Company:</span> {{ experience.name }}</h2>
            <p class="mb-4"><span class="font-semibold">Type:</span> {{ experience.type }}</p>
            <p class="mb-4"><span class="font-semibold">Location:</span> {{ experience.location }}</p>
            <p class="mb-4"><span class="font-semibold">Work Location:</span> {{ experience.workLocation }}</p>
            <p class="mb-4"><span class="font-semibold">Designation:</span> {{ experience.designation }}</p>

            <p class="mb-4"><span class="font-semibold">Website:</span> <a :href="experience.website"
                    class="text-blue-500 hover:underline">{{ experience.website }}</a></p>
            <p class="mb-4"><span class="font-semibold">LinkedIn:</span> <a :href="experience.linkedIn"
                    class="text-blue-500 hover:underline">{{ experience.linkedIn }}</a>
            </p>
            <!-- <div class="flex justify-between items-center">
                <p class="mb-4"><span class="font-semibold">Size: <br> </span> {{ experience.size }}</p>
                <p class="mb-4"><span class="font-semibold">Start Date:<br> </span> {{ experience.startDate?.slice(0,
                    10) }}
                </p>
                <p class="mb-4"><span class="font-semibold">End Date: <br></span> {{ experience.endDate?.slice(0, 10) }}
                </p>
            </div>
            <div class="mb-4">
                <h5 class="text-xl font-semibold">Responsibilities:</h5>
                <ul class="" v-for="(responsibility, index) in experience.responsibilities">
                    <li class="mt-2 text-md font-serif"> {{ index + 1 }}. {{ responsibility }}</li>
                </ul>
            </div>
            <div class="mb-4">
                <h5 class="text-xl font-semibold">Learned New Technologies:</h5>
                <ul class="" v-for="(tech, index) in experience.learnedNewTech">
                    <li class="mt-2 text-md font-serif"> {{ index + 1 }}. {{ tech }}</li>
                </ul>
            </div> -->
            <div class="flex justify-between items-center gap-3">
                <button @click="showDetails(experience)"
                    class="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Details
                </button>
                <button @click="editExperience(experience)"
                    class="bg-yellow-500 w-full hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                    Edit
                </button>
                <button @click="deleteExperience(experience.id)"
                    class="bg-red-500 w-full hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
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
        editExperience(experience) {
            console.log("Edit:", experience);
        }
    },
    created() {
        this.getExperiences();
    }
};
</script>

