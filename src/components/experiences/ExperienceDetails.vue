<template>
    <div class="lg:p-4 lg:border rounded-lg">
        <div class="lg:flex justify-between items-center mb-4">
            <h4 class="text-2xl font-semibold text-gray-600">Experience Details</h4>
            <router-link to="/dashboard/experiences">
                <button class="bg-blue-500 px-10 lg:mt-0 mt-4 py-2 rounded-md text-white">Back</button>
            </router-link>
        </div>
            <h2 class="font-semibold mb-2"><span class="font-semibold">Company:</span> {{ experience.name }}</h2>
            <p class="mb-4"><span class="font-semibold">Type:</span> {{ experience.workType }}</p>
            <p class="mb-4"><span class="font-semibold">Location:</span> {{ experience.location }}</p>
            <p class="mb-4"><span class="font-semibold">Work Location:</span> {{ experience.workLocation }}</p>
            <p class="mb-4"><span class="font-semibold">Designation:</span> {{ experience.designation }}</p>

            <p class="mb-4"><span class="font-semibold">Website:</span> <a :href="experience.website"
                    class="text-blue-500 hover:underline">{{ experience.website }}</a></p>
            <p class="mb-4 text-wrap"><span class="font-semibold">LinkedIn:</span> <a :href="experience.linkedIn"
                    class="text-blue-500 hover:underline">{{ experience.linkedIn }}</a>
            </p>
            <p class="mb-4"><span class="font-semibold">Size: </span> {{ experience.size }}</p>
            <p class="mb-4"><span class="font-semibold">Start Date: </span> {{ experience.startDate?.slice(0,
                10) }}
            </p>
            <p class="mb-4"><span class="font-semibold">End Date: </span> {{ experience.endDate?.slice(0, 10) }}
            </p>
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
            </div>
            <div>
                <p class="mb-4"><span class="font-semibold">Created: </span> {{ experience.createdAt?.slice(0,
                    10) }}
                </p>
                <p class="mb-4"><span class="font-semibold">Last updated: </span> {{ experience.updatedAt?.slice(0, 10)
                    }}
                </p>
            </div>
            <div class="flex items-center gap-3">
                <router-link :to="`/dashboard/experiences/edit/${experience.id}`">
                    <button class="bg-yellow-500  hover:bg-yellow-700 text-white font-bold py-2 px-10 rounded">
                        Edit
                    </button>
                </router-link>
                <button @click="handleDeleteExperience(experience.id)"
                    class="bg-red-500  hover:bg-red-700 text-white font-bold py-2 px-10 rounded">
                    Delete
                </button>
            </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },
    computed: {
        ...mapState(["experience"])
    },
    methods: {
        ...mapActions(["getExperience", "deleteExperience"]),
        fetchExperienceDetails() {
            this.getExperience(this.id);
        },
        handleDeleteExperience(id) {
            this.deleteExperience(id)
        }
    },
    mounted() {
        this.fetchExperienceDetails();
    }
};
</script>