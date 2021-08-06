<template>
  <div id="galleries-index">
    <h1>Browse galleries</h1>
    <div v-for="user in users" :key="user.id">
      <p>{{ user.username }}'s Gallery</p>
      <div v-for="image in images" :key="image.id"></div>
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
