<template>
    <div class="aboutMe">
        <b-container fluid class="background-cover tech-stack">
            <b-container class="info-block">
                <b-container class="text-block tb-header">
                Tech <span class="contrast-blue">Stack</span><br><p>Curious about the technology used to create this page?</p>
                </b-container>
                <b-container class="text-block">
                <b-row>
                    <b-col>
                        <h3><span class="contrast-blue">Front End</span></h3>
                        <p>VUE.JS</p>
                        <p>Wordpress (blog)</p>
                    </b-col>
                    <b-col>
                        <h3><span class="contrast-blue">Infrastructure</span></h3>
                        <p>GCP Cloud Run</p>
                        <p>GCP Cloud Container Registry</p>
                        <p>GCP Cloud Function</p>
                        <p>GCP Cloud SQL</p>
                        <p>Github Actions</p>
                        <p>Docker Containers</p>
                    </b-col>
                </b-row>
                <br><br>
                <p class="small"><router-link to="/cv">See what else I've <span class="contrast-blue">done</span></router-link></p>
                </b-container>
            </b-container>
        </b-container>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Roboto:400,900);
.background-cover {
    /* Full height */
    height: 100%;
    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: rgba(0, 0, 0, 0);
    min-height: 100vh;
    opacity: 1;
}

.background-cover.tech-stack {
  background-image:
    linear-gradient(
      rgba(0,0,0,0.7),
      rgba(0,0,0,0.7)
    ), 
    url("https://source.unsplash.com/Im7lZjxeLhg/1600x900")
}
</style>
