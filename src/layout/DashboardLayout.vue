<template>
  <div class="flex p-10 gap-5">
    <Sidebar />
    <div>
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
