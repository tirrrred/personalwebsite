<template>
  <div class="home">
    <b-container>
      <b-row align-v="center">
        <!-- component imported from the java script (<script>) section -->
        <home-card v-for="page in pages" :key="page.id" :name="page.name" :desc="page.description" :img="page.image"></home-card> 
      </b-row> 
</b-container>
  </div>
</template>

<script>
// @ is an alias to /src

import HomeCard from "@/components/HomeCard.vue";

export default {
  name: 'Home',
  components: {
    "home-card": HomeCard
  },
  mounted(){
    this.fetchData();
  },
  data(){
    return {
      pages: []
    }
  },
  methods: {
    async fetchData(){
      const res = await fetch("homePages.json");
      const page = await res.json();
      this.pages = page
      console.log(page)
    }
  }
}
</script>
