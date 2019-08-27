<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-10">
        <h1>Users # {{$route.params.userId}}</h1>
        <br><br>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Post</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(post, index) in posts" :key="index">
            <td><router-link :to="{name:'post',params:{ postId : post.id }}">{{ post.title }}</router-link> </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
      link: '/post?id=1'
    };
  },
  methods: {
    getPosts() {
      const path = 'https://jsonplaceholder.typicode.com/posts?userId='+this.$route.params.userId;
      axios.get(path)
        .then((res) => {
          this.posts = res.data;
          console.log(res.data);
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
  },
  created() {
    this.getPosts();
  },
};
</script>

