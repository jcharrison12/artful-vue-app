<template>
  <div class="galleries-edit">
    <div class="card">
      <div class="center col-sm-4">
        <img class="card-img-top" :src="image.image_url" :alt="image.title" />
        <div class="card-body">
          <h2 class="card-text">Add to your gallery</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8 col-md-8 center">
          <h3 class="mb-30">Journal Notes</h3>
          <form v-on:submit.prevent="galleryUpdate()">
            <div class="mt-10">
              <textarea
                class="single-textarea"
                v-model="galleryParams.notes"
                placeholder="Type your notes about the art here."
                onfocus="this.placeholder = ''"
                onblur="this.placeholder = 'Message'"
                required
              ></textarea>
            </div>
            <div class="switch-wrap d-flex">
              <p>Have you seen this art in person?</p>
              <div class="primary-checkbox">
                <input v-model="galleryParams.seen" type="checkbox" id="primary-checkbox" />
                <label for="primary-checkbox"></label>
              </div>
            </div>
            <input type="submit" value="Submit" />
            <button v-on:click="destroyGallery()">Remove from Gallery</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      image: [],
      galleryParams: {},
      errors: {},
    };
  },
  created: function () {
    axios.get("/galleries/" + this.$route.params.id).then((response) => {
      this.galleryParams = response.data;
      console.log(this.galleryParams);
      axios.get(`/images/${this.galleryParams.image_id}`).then((response) => {
        this.image = response.data;
        console.log(response.data);
      });
    });
  },
  methods: {
    galleryUpdate: function () {
      axios
        .patch(`/galleries/${this.$route.params.id}`, this.galleryParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/");
        })
        .catch((errors) => {
          this.errors = errors.response.data.errors;
          console.log(this.errors);
        });
    },
    destroyGallery: function () {
      axios.delete(`/galleries/${this.$route.params.id}`).then((response) => {
        console.log("Good job!", response.data);
        this.$router.push("/");
      });
    },
  },
};
</script>
