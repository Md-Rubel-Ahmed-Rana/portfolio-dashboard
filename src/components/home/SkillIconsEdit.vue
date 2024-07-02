<template>
    <div>
        <div class="flex items-center justify-between">
            <h4 class="text-2xl font-semibold">Skill Icons</h4>
            <router-link to="/dashboard/homes">
                <button class="bg-blue-600 px-5 text-white rounded-md my-2 py-1">Back</button>
            </router-link>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5 mt-4">
            <div v-for="(skill, index) in formData" :key="index" class="border rounded-md shadow-md p-2">
                <p><b>Skill:</b> <input type="text" v-model="skill.name" class="border p-1 w-full" /></p>
                <p><b>Icon:</b> <input type="text" v-model="skill.icon" class="border p-1 w-full" /></p>
                <button type="button" @click="handleRemoveIcon(skill)"
                    class="bg-red-500 mt-2 px-5 py-1 rounded-md text-white">Remove</button>
            </div>
        </div>
        <div v-if="newSkill" class="mt-4 border rounded-md shadow-md p-2">
            <p><b>New Skill:</b> <input type="text" v-model="newSkillName" class="border p-1 w-full" /></p>
            <p><b>New Icon:</b> <input type="text" v-model="newIcon" class="border p-1 w-full" /></p>
            <button @click="saveNewIcon" class="bg-blue-500 px-4 text-white rounded-md py-1 mt-2">Save</button>
        </div>
        <div class="mt-4">
            <button @click="addNewIcon" class="bg-green-500 px-4 text-white rounded-md py-1">Add New Icon</button>
        </div>
        <button type="button" @click="handleUpdateSkillIcon"
            class="bg-blue-600 text-white py-2 mt-5 px-14 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-500">
            Save changes
        </button>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    computed: {
        ...mapState(["homeData"])
    },
    methods: {
        ...mapActions(["getHomeData", "updateSkillIcons"]),
        addNewIcon() {
            this.formData.push({ name: "", icon: "" });
        },
        saveNewIcon() {
            if (this.newSkillName && this.newIcon) {
                this.formData.push({ name: this.newSkillName, icon: this.newIcon });
                this.newSkillName = "";
                this.newIcon = "";
                this.newSkill = false;
            }
        },
        handleUpdateSkillIcon() {
            const updatedSkillIcons = {};
            this.formData.forEach(skill => {
                if (skill.name && skill.icon) {
                    updatedSkillIcons[skill.name.toLowerCase()] = skill.icon;
                }
            });
            this.updateSkillIcons({ id: this.id, data: updatedSkillIcons })
        },
        handleRemoveIcon(skill){
            this.formData = this.formData.filter((skl) => skl?.name !== skill?.name)
        }
    },
    data() {
        return {
            id: "",
            formData: [],
            newSkill: false,
            newSkillName: "",
            newIcon: ""
        };
    },
    created() {
        this.getHomeData();
    },
    watch: {
        homeData: {
            immediate: true,
            handler(data) {
                if (data?.skillIcons) {
                    this.id = data.id;
                    this.formData = Object.keys(data.skillIcons).map(key => ({
                        name: key,
                        icon: data.skillIcons[key]
                    }));
                }
            }
        }
    }
};
</script>
