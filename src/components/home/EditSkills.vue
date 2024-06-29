<template>
    <div>
        <div class="flex items-center justify-between mb-4">
            <h3 class="text-2xl font-semibold">Edit skills</h3>
            <router-link to="/dashboard/homes">
                <button class="bg-blue-600 px-5 text-white rounded-md my-2 py-1">Back</button>
            </router-link>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-5">
            <div v-for="(skill, index) in formData" :key="index" class="border shadow-md p-2 rounded-md">
                <input v-model="skill.name" placeholder="Skill Name" class="border rounded-md p-2 mb-2 w-full" />
                <input v-model="skill.percentage" type="number" :max="100" :min="30" laceholder="Percentage"
                    class="border p-2 mb-2 w-full rounded-md" />
                <button @click="removeSkill(index)"
                    class="bg-red-500 text-white py-1 px-4 rounded-md hover:bg-red-600">Remove</button>
            </div>
        </div>

        <button @click="addNewSkill"
            class="bg-yellow-500 mt-5 text-white py-2 px-4 rounded-md hover:bg-yellow-600 mb-4">Add
            new skill</button>
        <div class="mt-6">
            <button @click="handleEditSkills" type="submit"
                class="bg-blue-600 text-white py-2 px-10 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-500">Save
                changes</button>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    computed: {
        ...mapState(["homeData"])
    },
    methods: {
        ...mapActions(["getHomeData", "updateSkillsData"]),
        handleEditSkills() {
            console.log({ id: this.id, data: this.formData });
            this.updateSkillsData({ id: this.id, data: this.formData });
        },
        addNewSkill() {
            this.formData.push({ name: "", percentage: 30 });
        },
        removeSkill(index) {
            this.formData.splice(index, 1);
        }
    },
    data() {
        return {
            id: "",
            formData: []
        };
    },
    created() {
        this.getHomeData();
    },
    watch: {
        homeData: {
            immediate: true,
            handler(data) {
                console.log(data.skillIcons);
                if (data?.skills) {
                    const { id, skills } = data;
                    this.id = id;
                    this.formData = skills;
                }
            }
        }
    }
};
</script>
