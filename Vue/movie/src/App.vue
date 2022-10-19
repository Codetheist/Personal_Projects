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
    <!--<nav class="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between">
        <div class="px-6 w-full flex flex-wrap items-center justify-between">
            <div class="flex items-center">
                <div class="navbar-collapse collapse grow items-center" id="nav-bar">
                    <ul class="navbar-nav mr-auto lg:flex lg:flex-row">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/movies" class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light">Movies</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/shows" class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light">TV Shows</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/release" class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light">New Release</router-link>
                        </li>
                        !--<router-link to="">Search</router-link>--
                    </ul>
                </div>
            </div>
            
            <form class="order-first mb-10 md:mb-0 md:order-last md:pr-8" action="">
                <input class="w-72 py-1 pl-3 pr-10 rounded-full focus:outline-0" type="text" placeholder="Search.." name="search" id="search-bar">
                <button class="-ml-8 border-6 bg-trasparent" type="submit"><i class="fa fa-search text-gray-400"></i></button>
            </form>
        </div>
    </nav>
    <div>
        <router-link to="/" >Home</router-link>
        <router-link to="/movies" >Movies</router-link>
        <router-link to="/shows" >TV Shows</router-link>
        <router-link to="/release" >New Release</router-link>
    </div>
    <router-view/>-->
    <router-view/>
    <Home
    msg="Personal Favorite"
    title="Let's Watch"
    />
    <Movies
    msg="Movies"
    title="Movies"
    />
    <Release
    msg="Release"
    title="New Release"
    />
    <Shows
    msg="Shows"
    title="TV Shows"
    />
    <Search
    msg="Search Results"
    title=""
    />
</template>