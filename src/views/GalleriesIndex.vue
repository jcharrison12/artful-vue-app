<template>
  <div id="galleries-index">
    <h1>Browse galleries</h1>
    <div v-for="user in users" :key="user.id">
      <h2>{{ user.username }}'s Gallery</h2>
      <div v-for="image in user.images" :key="image.id">
        <router-link v-bind:to="`/images/${image.id}`">
          <img :src="image.image_url" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      users: [],
      images: [],
    };
  },
  created: function () {
    this.indexUsers();
  },
  methods: {
    indexUsers: function () {
      axios.get("/users").then((response) => {
        console.log(response.data);
        this.users = response.data;
        this.images = response.data.images;
      });
    },
  },
};
</script>
