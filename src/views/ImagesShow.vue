<template>
  <div class="images-show">
    <div class="container">
      <h2>{{ image.title }}</h2>
      <img :src="image.image_url" :alt="image.title" />
      <h2>{{ image.artist }}</h2>
      <p>{{ image.museum }}</p>
      <p>{{ image.description }}</p>
      <button v-if="$parent.isLoggedIn()" v-on:click="addToGallery()">Add to your Gallery</button>
      <dialog id="galleryNotes">
        <form method="dialog">
          Write a note about this piece of art:
          <textarea v-model="galleryParams.notes"></textarea>
          Have you seen this in person?
          <input type="checkbox" v-model="galleryParams.seen" />
          <button v-on:click="galleryCreate()">Submit to gallery</button>
          <h2 v-if="errors.length > 0">{{ errors }}</h2>
          <button>Close</button>
        </form>
      </dialog>
      <router-link to="/images">Back to all images</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      image: [],
      galleryParams: { seen: false },
      errors: {},
    };
  },
  created: function () {
    axios.get("/images/" + this.$route.params.id).then((response) => {
      this.image = response.data;
      console.log(response.data);
    });
  },
  methods: {
    addToGallery: function () {
      document.querySelector("#galleryNotes").showModal();
    },
    galleryCreate: function () {
      this.galleryParams.user_id = this.$parent.getUserId();
      this.galleryParams.image_id = this.image.id;
      axios
        .post("/galleries", this.galleryParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/");
        })
        .catch((errors) => {
          this.errors = errors.response.data.errors;
          console.log(this.errors);
        });
    },
  },
};
</script>
