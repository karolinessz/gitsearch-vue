
export default {
    name: 'UserOutput',
    data() {
        return {
          newUsername: null,
          noUserFound: true,
          gitUser: {},
          repos: null,
          stars: null,
          gitRepos: {}
        }
    },
    methods: {
      newUserSearch(username) {
        this.getUserData(username)
      },
      getUserData(username) {
        const url = `https://api.github.com/users/${username}`
        this.$http
          .get(url)
          .then((result) => {
            this.gitUser = result.data
            this.repos = result.data.public_repos
            this.getUserRepos(username, this.repos)
          })
        },
        getUserRepos(username, repos) {
        const url = `https://api.github.com/users/${username}/repos?per_page=${repos}`
        this.$http
        .get(url)
        .then((result) => {
          result.data.sort(function compare(a, b) {
            if ( a.watchers < b.watchers ){
              return 1;
            }
            if ( a.watchers > b.watchers ){
              return -1;
            }
            return 0;
          });
        
          this.gitRepos = result.data
          for (let index = 0; index < result.data.length; index++) {
            this.stars += result.data[index].watchers 
          }
        })
      },
      voltarHome() {
        this.$router.push({ name: 'UserInput' })
      }
    },
    computed: {
      starsRepos() {
        return 
      }
    },
    created() {
      this.newUsername=this.$route.params.data
      this.newUserSearch(this.newUsername)
    }
  }