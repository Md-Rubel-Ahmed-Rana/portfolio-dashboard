<template>
    <div class="p-10 shadow-md">
        <h3 class="text-4xl font-bold mb-8">About content</h3>
        <div>
            <img :src="content?.image" alt="About image" class="w-60 h-48 p-3 border rounded-md mb-4">
            <p class="mb-4"><span class="text-xl font-semibold">Description 1: </span> <span class="text-lg">{{ content?.description1}}</span>
            </p>
            <p class="mb-4"><span class="text-xl font-semibold">Description 2: </span> <span class="text-lg">{{content?.description2}}</span>
            </p>
            <p class="mt-4">
                <router-link to="/dashboard/utils/about-content/edit">
                    <button class="bg-blue-500 text-white px-5 py-2 rounded-md">Edit content</button>
                </router-link>
            </p>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        aboutSection: {
            type: Object,
            required: true
        }
    },
    computed: {
        content(){
            return this.aboutSection
        }
    }
}

</script>