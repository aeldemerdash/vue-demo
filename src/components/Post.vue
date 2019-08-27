<template>
  <div class="container">
      <div class="row">
	      <div class="col-sm-10">
			  <div v-if="post">
			    <h1>{{ post.title }}</h1>
			    <p> {{ post.body }}</p>
			  </div>
			</div>  
		</div>	
  </div>
	</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      post: [],
    };
  },
  methods: {
    getPost() {
      const path = 'https://jsonplaceholder.typicode.com/posts?id='+this.$route.params.postId;
      axios.get(path)
        .then((res) => {
          this.post = res.data[0];
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  created() {
    this.getPost();
  },
};
</script>