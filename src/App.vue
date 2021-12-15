<template>
  <div id="app">
    <!-- <div id="nav">
      <top-header></top-header>
    </div> -->
    <div id="sidebar-1-btn-sticky" class="text-left sticky-top">
      <b-button v-b-toggle.sidebar-1 class="btn-sticky" id="override-bootstrap-btn-secondary">
        <b-img srcset="tordlangedalness_squared.png" rounded="circle" width="75" height="75"></b-img>
      </b-button>
    </div>
    <div>
      <b-sidebar id="sidebar-1" bg-variant="dark" text-variant="light" backdrop-variant="dark" backdrop shadow>
        <div class="px-3 py-2">
          <b-container>
          <!-- <b-container class="bv-example-row"> -->
            <b-row class="mb-6">
                <b-col>
                  <b-img src="tordlangedalness_squared.png" rounded="circle" fluid></b-img>
                </b-col>
            </b-row>
            <b-row class="mt-2">
                <b-col>
                  <h2>
                    Tord Langedal Ness
                  </h2>
                </b-col>
            </b-row>
            <b-row>
              <b-col>
                <h4>Business Consultant</h4>
                <h6>Agile Advocator</h6>
                <h6>Team Leader</h6>
                <h6>IT Architect</h6>
                <h6>Father</h6>
              </b-col>
            </b-row>
            <b-row class="mt-4 mb-4" align-h="center">
              <b-list-group horizontal>
                <b-list-group-item href="https://www.linkedin.com/in/tord-langedal-ness-5b687480" target="_blank" class="sidebar-listed-items">
                <b-icon icon="linkedin" scale="2" aria-hidden="true" style="color: #fff;"></b-icon>
                </b-list-group-item>
                <b-list-group-item href="https://github.com/tirrrred/" target="_blank" class="sidebar-listed-items">
                  <b-icon icon="github" scale="2" aria-hidden="true" style="color: #fff;"></b-icon>
                </b-list-group-item>
                <!-- <b-list-group-item href="https://ciber.no/" target="_blank" class="flex-fill sidebar-listed-items">
                  <b-icon icon="x-circle" scale="2" style="color: #fff;"></b-icon>
                </b-list-group-item> -->
              </b-list-group>
            </b-row>
            <b-row class="mt-4 mb-4" align-h="center">
              <b-list-group>
                <b-list-group-item to='/' class="d-flex justify-content-between align-items-center sidebar-listed-items text-center">
                  <b-container>
                    About Me
                  </b-container>
                </b-list-group-item>
                <b-list-group-item to='/blog' class="d-flex justify-content-between align-items-center sidebar-listed-items">
                  <b-container>
                    Blog
                  </b-container>
                </b-list-group-item>
                <!-- TO-BE: Project page displaying protofiol og projects and acheivements -->
                <!-- <b-list-group-item to='/projects' class="flex-fill d-flex justify-content-between sidebar-listed-items">
                  Projects
                </b-list-group-item> -->
                <b-list-group-item to='/cv' class="d-flex justify-content-between align-items-center sidebar-listed-items">
                  <b-container>
                    CV
                  </b-container>
                </b-list-group-item>
                <b-list-group-item to='/about-page' class="d-flex align-items-center sidebar-listed-items">
                  <b-container>
                    About This Homepage
                  </b-container>
                </b-list-group-item>
              </b-list-group>
            </b-row>
          </b-container>
        </div>
      </b-sidebar>
    </div>
    <router-view/>
  </div>
</template>

<script>
// import TopHeader from '@/components/TopHeader.vue'
// import SideHeader from '@/components/SideHeader.vue'

export default {
  components: {
    // 'top-header': TopHeader,
    // 'side-header': SideHeader
  }
}

// function calculateAge(birthday) { // birthday is a date
//    var ageDifMs = Date.now() - birthday;
//    var ageDate = new Date(ageDifMs); // miliseconds from epoch
//    return Math.abs(ageDate.getUTCFullYear() - 1970);
//  }

</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Roboto:400,900);

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(52, 58, 64);
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.sidebar-listed-items {
    background-color: rgb(52, 58, 64);
    color: rgb(255, 255, 255);
    border-style: none;
}

#sidebar-1-btn-sticky {
  top: 5vh;
  position: fixed;
  z-index: 100;
}

#override-bootstrap-btn-secondary {
    color: transparent;
    background-color: transparent;
    border-style: none;
    border-color: none;
}

.card {
    border-style: none;
}

.row-background-cover {
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

.row-background-cover.pre-education {
    background-image:
      // linear-gradient(
      //   to top,
      //   rgba(0, 0, 0, 0.8),
      //   rgba(0, 0, 0, 0) 60%,
      //   rgba(0, 0, 0, 0.8) 100%
      // ),
    linear-gradient(
      rgba(0,0,0,0.85),
      rgba(0,0,0,0.85)
    ), 
    url("https://source.unsplash.com/u9m_vp7ZhUY/1600x900");
}


.row-background-cover.education {
  background-image:
    linear-gradient(
      rgba(0,0,0,0.5),
      rgba(0,0,0,0.5)
    ), 
    url("https://source.unsplash.com/uhjiu8FjnsQ/1600x900")
}

.row-background-cover.intro {
  background-image:
    linear-gradient(
      rgba(0,0,0,0.7),
      rgba(0,0,0,0.7)
    ), 
    url("https://source.unsplash.com/u-n1AFjUclo/1600x900")
}

.row-background-cover.post-education {
  background-image:
    linear-gradient(
      rgba(0,0,0,0.7),
      rgba(0,0,0,0.7)
    ), 
    url("https://source.unsplash.com/U4wcrDteZ2Y/1600x900")
}

.row-background-cover.post-education {
  background-image:
    linear-gradient(
      rgba(0,0,0,0.7),
      rgba(0,0,0,0.7)
    ), 
    url("https://source.unsplash.com/C6duwascOEA/1600x900")
}

.row-background-cover.civilian-dnb {
  background-image:
    linear-gradient(
      rgba(0,0,0,0.7),
      rgba(0,0,0,0.7)
    ), 
    url("https://source.unsplash.com/vGCErDhrc3E/1600x900")
}

.row-background-cover.civilian-experis {
  background-image:
    linear-gradient(
      rgba(0,0,0,0.7),
      rgba(0,0,0,0.7)
    ), 
    url("https://source.unsplash.com/PZKe_hQSaJc/1600x900")
}

.row-background-cover.the-future {
  background-image:
    linear-gradient(
      rgba(0,0,0,0.7),
      rgba(0,0,0,0.7)
    ), 
    url("https://source.unsplash.com/DOIgz9_qmFI/1600x900")
}

.row-background-cover.call-to-action {
  background-image:
    linear-gradient(
      rgba(0,0,0,0.7),
      rgba(0,0,0,0.7)
    ), 
    url("https://source.unsplash.com/JYGnB9gTCls/1600x900")
}

.info-block {
    text-align: center;
    height: 100%;
    //line-height: 100vh;
    min-height: 100vh;
}

.text-block {
    color: #fff;
    font: 12px Monaco, Mono-Space;
    font-size: 15px;
    font-weight: 900;
    max-width: 700px;
    text-align: center;
    line-height: 30px;
    display: inline-block;
    vertical-align: middle;
    user-select: all;
    cursor: default;
    &.tb-header {
      height: 20vh;
      font-size: 25px;
      font-weight: 900;
      font-family: 'Roboto', sans-serif;
      text-transform: uppercase;
      padding: 10vh 0 24vh;
      & p {
        font: 12px Monaco, Mono-Space;
        font-size: 15px;
        font-weight: 900;
        padding: 15px 0px;
      }
    }

}

.contrast-blue {
  color: #04b4e0;
}

a {
  text-decoration: none;
  text-align: center;
  color: white;
  :hover {
    color: rgb(214, 212, 212);
  }
}
</style>
