export default {
    name: 'UserInput',
    data () {
      return {
        username: ''
      }
    },
    methods: {
      submitUser() {
        if (this.username && this.username !== '') {
          this.$router.push({ name: 'UserOutput', params: { data: this.username } });
          this.username = ''
        }
      }
    }
  }