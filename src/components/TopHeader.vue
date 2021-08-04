<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark" sticky>
            <b-navbar-brand to='/'>TLN</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item to='/'>Home</b-nav-item>
                    <b-nav-item to='/about-me'>About Me</b-nav-item>
                    <b-nav-item to='/CV'>CV</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
#nav a.nav-link.router-link-exact-active.router-link-active {
    color:white;
}
</style>