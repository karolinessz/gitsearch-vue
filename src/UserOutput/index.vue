<template>
    <div class="nav">
        <button @click="voltarHome()" class="btn">
          <i class="material-icons" style="font-size:30px;color:white;">arrow_back</i>
        </button>
      <div v-if="this.gitUser.id" >
        <div class="user">
          <img
            :src="gitUser.avatar_url"
            alt="User Image"
            width="100%" height="50%"
          >
          <div class="user-info">
            <h3 v-if="gitUser.login !== null" class="title">{{ gitUser.login }} </h3>
            <h4 v-if="gitUser.name !== null" class="subtitle"> <i class="material-icons">person</i>  {{ gitUser.name }} </h4>
            <p v-if="gitUser.company !== null">  <i class="material-icons">business_center</i> {{ gitUser.company}}</p>
            <p v-if="gitUser.location !== null"> <i class="material-icons">place</i> {{ gitUser.location}}</p>
            <p v-if="gitUser.public_repos !== null"> <i class="material-icons">folder</i> {{ gitUser.public_repos}}</p>
            <p v-if="gitUser.followers !== null"> <i class="material-icons">people</i>  {{ gitUser.followers }}</p>
            <p v-if="stars !== null"> <i class="material-icons">star</i> {{ stars }}</p>
            <p><a
              :href="gitUser.html_url"
              target="_blank"
            >Ver o perfil no site do Github</a>
            </p>
          </div>
        </div>
        <div class="repos">
          <div v-for="gitRepo in gitRepos" 
          :key="gitRepo.id"> 
            <h5 class="title2"> {{ gitRepo.name }} </h5>
            <p class="content"> {{ gitRepo.description }}</p>
            <p> <i class="material-icons">star</i> {{ gitRepo.stargazers_count }} </p>
          </div>
        </div> 
      </div>
      <div v-else class="error-box" >
        <span class="search-box title-1" >
          Usuário não encontrado
        </span>
      </div>
  </div>
</template>

<script src="./script.js"></script>
<style src="./style.css"></style>