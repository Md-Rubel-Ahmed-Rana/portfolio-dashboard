<template>
  <div class="p-10 shadow-md">
    <h3 class="text-4xl font-bold mb-8">Skills content</h3>
    <div>
       <div class="flex gap-5 font-semibold mb-4">
            <p v-for="skill in skills" class="text-lg border shadow-md rounded-md px-3 py-1">{{ skill }}</p>
       </div>
       <p>
        <router-link to="/dashboard/utils/skills-content/edit">
            <button class="bg-blue-500 text-white px-5 py-2 rounded-md">Edit content</button>
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>

export default {
    props: {
        skills: {
            type: Array,
            required: true
        }
    },
    computed: {
        content(){
            return this.skills
        }
    }
}

</script>