<template>
  <div class="flex p-10 gap-5">
    <div class="w-1/6">
      <Sidebar />
    </div>
    <div class="w-5/6">
        <router-view/>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';


export default {
  components: {
    Sidebar 
  }
}
</script>
