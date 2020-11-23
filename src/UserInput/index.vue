<template>
    <div class="nav-box">
        <span> <span class="title-1"> Github</span> <span class="title-2">Search </span> </span>
        <form class="search-box">
            <input id="search" type="text" v-model="username" required /> 
            <button id="button-search" @click.prevent="submitUser" type="submit"><i class="material-icons" style="font-size:30px;color:white;">search</i></button>
        </form>
    </div>
</template>

<script src="./script.js"></script>
<style src="./style.css"></style>