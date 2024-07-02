<template>
    <div>
        <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl font-semibold ">Edit social links</h2>
            <router-link to="/dashboard/homes">
                <button class="bg-blue-600 px-5 text-white rounded-md my-2 py-1">Back</button>
            </router-link>
        </div>
        <form @submit.prevent="handleEditSocialLinks" class="mb-4 flex flex-col gap-5 lg:border lg:p-4 rounded-lg">
            <div v-for="link in formData?.socialLinks">
                <div class="flex flex-col gap-2 border p-2 rounded-md">
                    <label for="description" class="block text-gray-700 font-semibold text-lg">{{ link.name
                        }}</label>
                    <input required v-model="link.name" id="name" name="name"
                        class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"></input>
                    <input required v-model="link.link" id="name" name="name"
                        class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"></input>
                    <input required v-model="link.icon" id="icon" name="icon"
                        class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"></input>
                    <p>
                        <button @click="handleRemoveLink(link)" type="button"
                            class="bg-red-600 text-white py-1 px-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:border-red-500">
                            Remove
                        </button>
                    </p>
                </div>
            </div>
            <div>
                <button @click="handleAddNewLink" type="button"
                    class="bg-yellow-600 text-white py-1 px-2 rounded-md hover:bg-yellow-700 focus:outline-none focus:ring focus:border-yellow-500">
                    Add new link
                </button>
            </div>
            <div v-if="formData?.socialLinks?.length > 0" class="mt-6">
                <button type="submit"
                    class="bg-blue-600 w-full text-white py-2 px-14 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-500">
                    Save changes
                </button>
            </div>
        </form>
    </div>
</template>



<script>
import {mapState, mapActions} from "vuex"

export default {
    computed: {
        ...mapState(["homeData"])
    },
    methods: {
        ...mapActions(["getHomeData", "updateSocialLinksData"]),
        handleAddNewLink(){
            this.formData.socialLinks.push({ name: "Example name", link: "https://example.com/example-link", icon: "Enter a icon name. e.g (FaWhatsapp)"})
        },
        handleEditSocialLinks(){
            console.log({id: this.id, data: this.formData.socialLinks})
            this.updateSocialLinksData({id: this.id, data: this.formData.socialLinks})
        },
        handleRemoveLink(link){
            this.formData.socialLinks = this.formData.socialLinks.filter((lnk) => lnk?.name !== link?.name)
        }
    },
    data() {
        return {
            id: "",
            formData: {
                socialLinks: []
            }
        }
    },
    created(){
        this.getHomeData()
    },
    watch: {
        homeData: {
            immediate: true,
            handler(data){
                if (data?.socialLinks){
                    this.id = data.id
                    this.formData.socialLinks = data.socialLinks
                }
            }
        }
    }
}

</script>