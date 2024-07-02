<template>
    <div class="lg:p-10 p-3 shadow-md">
        <h3 class="text-2xl font-semibold">Skill Icons</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-5 mt-4">
            <div v-for="(icon, skill) in skillIcons" :key="skill" class="border rounded-md shadow-md p-2">
                <p> <b>Skill: </b> <span>{{ skill }}</span></p>
                <p> <b>Icon:</b> <span>{{ icon }}</span></p>
            </div>
        </div>
        <p class="mt-5">
            <router-link to="/dashboard/homes/skill-icons/edit">
                <button class="bg-blue-500 text-white px-5 py-2 rounded-md">Edit content</button>
            </router-link>
        </p>
    </div>
</template>

<script>
export default {
    props: {
        skillIcons: {
            type: Object,
            required: true
        }
    }
}
</script>
