import TOKEN from '../.env'

export const GridServiceName = 'aww'
export const GridService = [
  '$http',
  class GridService {
    constructor ($http) {
      this.$http = $http
      this.endpoint = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=12222568.73b7a9b.d6c5efbfb8d343729cee75ee52576a1e'
    }

    getPosts () {
      return this.$http.get(this.endpoint)
    }
  }
]
