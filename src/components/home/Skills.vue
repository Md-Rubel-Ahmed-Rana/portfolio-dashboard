<template>
  <div class="p-10 shadow-md">
    <h3 class="text-4xl font-bold mb-8">Skills content: {{ skills?.length }}</h3>
    <div>
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <div v-for="skill in skills" class="text-lg border shadow-md rounded-md px-3 py-1">
          <h5> <span class="text">Name: </span>{{ skill?.name }}</h5>
          <p>Percentage: {{ skill?.percentage }}</p>
        </div>
      </div>
      <p class="mt-5">
        <router-link to="/dashboard/homes/skills-content/edit">
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