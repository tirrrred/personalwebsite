<template>
    <div class="aboutMe">
        <b-container fluid class="background-cover index">
            <b-container class="info-block">
                <b-container class="text-block intro-header">
                    Welcome!<br><span class="contrast-blue">Good to see you!</span>
                </b-container>
                <b-container class="text-block">
                    I love technology and people and how those two combined can provide business value. My goal is to create strong teams and organizations by exploiting the 
                    synergy between tech, people, and business.<br><br>
                    I currently help businesses create technical solutions that excel the business while also crafting corresponding processes, organizations and mindset. 
                    I previously lead an agile, IT infrastructure team of 13 professionals responsible for secure and stable operations of critical financial systems.<br><br>
                    Operational experience from the <a href="https://www.forsvaret.no/en/organisation/norwegian-cyber-defence" target="_blank">Norwegian Armed Forces Cyber Defence</a>,
                    contribution in both domestic and <a href="https://www.forsvaret.no/en/exercises-and-operations/international-operations" target="_blank">international operations</a>, 
                    and experience at designing, implementing, and operating enterprise infrastructure have provided a solid technical foundation. Leadership roles in both the 
                    Armed Forces and DNB have sparked my love for leadership and people. <br><br>
                </b-container>
                <b-container id="bottom-nav" class="text-block">
                    <b-row>
                        <b-col>
                            <h3><router-link to="/blog"><span class="contrast-blue">THE BLOG</span></router-link></h3>
                        </b-col>
                        <b-col>
                            <h3><router-link to="/cv"><span class="contrast-blue">THE CV</span></router-link></h3>
                        </b-col>
                        <b-col>
                            <h3><router-link to="/about-me"><span class="contrast-blue">THE FABLE</span></router-link></h3>
                        </b-col>
                        <b-col>
                            <h3><router-link to="/about-page"><span class="contrast-blue">THE PAGE</span></router-link></h3>
                        </b-col>
                    </b-row>
                </b-container>
                <b-container id="bottom-nav-small" class="text-block">
                    <b-row>
                        <b-col>
                            <h3><router-link to="/blog"><span class="contrast-blue">THE BLOG</span></router-link></h3>
                        </b-col>
                        <b-col>
                            <h3><router-link to="/cv"><span class="contrast-blue">THE CV</span></router-link></h3>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <h3><router-link to="/about-me"><span class="contrast-blue">THE FABLE</span></router-link></h3>
                        </b-col>
                        <b-col>
                            <h3><router-link to="/about-page"><span class="contrast-blue">THE PAGE</span></router-link></h3>
                        </b-col>
                    </b-row>
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

.background-cover.index {
  background-image:
    linear-gradient(
      rgba(0,0,0,0.7),
      rgba(0,0,0,0.7)
    ), 
    url("https://source.unsplash.com/DjlKxYFJlTc/1600x900")
}

.intro-header {
    //   height: 50vh;
      font-size: 25px;
      font-weight: 900;
      font-family: 'Roboto', sans-serif;
      text-transform: uppercase;
      padding: 10vh 0;
      & p {
        font: 12px Monaco, Mono-Space;
        font-size: 15px;
        font-weight: 900;
        padding: 15px 0px;
      }
    }

#bottom-nav-small {
    display: none;
}
@media only screen and (max-width: 766px) {
    #bottom-nav {
        display: none;
    }
    #bottom-nav-small {
        display: block;
        & .col {
            padding: 25px 10px;
        }
    }
}
</style>
