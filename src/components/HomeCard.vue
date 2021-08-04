<template>
    <div>
        <b-col>
          <b-card
          :title="name"
          :img-src="img"
          img-alt="This is my card"
          img-top
          tag="article"
          style="max-width:20rem"
          class="mb-2"
          footer="My Foot"
          >
            <b-card-text>
                {{ desc }}
              <!-- Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, quod. -->
            </b-card-text>
            <b-button variant="primary">Click Here</b-button>
          </b-card>
        </b-col>
    </div>
</template>

<script>
    export default {
        props: ['name', 'desc', 'img']
    }
</script>

<style lang="scss" scoped>

</style>

 <!-- <b-col md="4">
          <b-card
          title="Project and portifolio"
          img-src="https://source.unsplash.com/1600x900/?technology,projects"
          img-alt="This is my card"
          img-top
          tag="MyCV"
          style="max-width:20rem"
          class="mb-10"
          >
            <b-card-text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, quod.
            </b-card-text>
            <b-button variant="primary">Projects</b-button>
          </b-card>
        </b-col>
        <b-col md="4">
          <b-card
          title="Technology"
          img-src="https://source.unsplash.com/1600x900/?technology,developer"
          img-alt="This is my card"
          img-top
          tag="MyCV"
          style="max-width:20rem"
          class="mb-10"
          >
            <b-card-text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, quod.
            </b-card-text>
            <b-button variant="primary">Technology</b-button>
          </b-card>
        </b-col>
        <b-col md="4">
          <b-card
          title="Career & Experience"
          img-src="https://source.unsplash.com/1600x900/?CV,career"
          img-alt="This is my card"
          img-top
          tag="MyCV"
          style="max-width:20rem"
          class="mb-10"
          >
            <b-card-text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, quod.
            </b-card-text>
            <b-button variant="primary">Career and CV</b-button>
          </b-card>
        </b-col> -->