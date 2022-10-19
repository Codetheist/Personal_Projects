<script setup>
// This starter template is using Vue 3 < setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Home from './views/Home.vue'
import Movies from './views/Movies.vue'
import Release from './views/Release.vue'
import Shows from './views/Shows.vue'
import Search from './views/Search.vue'
import { ref } from 'vue'
</script>

<template>
    <Home msg="Personal Favorite" />
    <Movies msg="Movies" />
    <Release msg="Release" />
    <Shows msg="Shows" />
    <Search msg="Search Results" />
</template>