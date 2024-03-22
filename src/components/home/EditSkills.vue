<template>
    <div>
        <h3 class="text-2xl font-semibold mb-4">Edit skills data</h3>
        <form @submit.prevent="handleEditSkills" >
        <p class="text-sm mb-1">Note: Write skills by comma separated.</p>
        <textarea
            class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
            v-model="formData.skills" name="" id="" cols="30" rows="5"></textarea>
        <div class="mt-6">
            <button type="submit"
                class="bg-blue-600 text-white py-2 px-10 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-500">Save changes</button>
        </div>
        </form>
    </div>
</template>

<script>
import {mapState, mapActions} from "vuex"
import makeArrayFromString from '@/utils/makeArrayFromString';

export default {
    computed: {
        ...mapState(["homeData"])
    },
    methods: {
        ...mapActions(["getHomeData", "updateSkillsData"]),
        handleEditSkills(){
            this.formData.skills = makeArrayFromString(this.formData.skills)
            this.updateSkillsData({ id: this.id, data: this.formData.skills });
        }
    },
    data() {
        return {
            id: "",
            formData: {
                skills: ""
            }
        }
    },
    created() {
        this.getHomeData()
    },
    watch: {
        homeData: {
            immediate: true,
            handler(data) {
                if(data?.skills){
                    const {id, skills} = data
                    this.id = id
                    this.formData.skills = skills.join(", ")
                }
            }
        }
    }
}

</script>