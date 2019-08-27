<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-10">
        <h1>Users</h1>
        <br><br>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Website</th>

            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in users" :key="index">
			  <td ><router-link  :to="{name:'posts',params:{ userId : user.id }}">{{ user.name }}</router-link> 
              </td>
              <td>{{ user.username }}</td>
              <td>{{ user.email }}</td>
              <td>{{user.phone}}</td>
              <td>{{user.website}}</td>



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
      users: [],
      link : '/posts'
    };
  },
  methods: {
    getUsers() {
      const path = 'https://jsonplaceholder.typicode.com/users';
      axios.get(path)
        .then((res) => {
          this.users = res.data;
          console.log(res.data);
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
  },
  created() {
    this.getUsers();
  },
};
</script>

