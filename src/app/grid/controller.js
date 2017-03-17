export const GridCtrl = ['$scope', 'grid', class GridCtrl {
  constructor ($scope, GridService) {
    $scope.posts = []
    this.title = 'Aww Title from the Controller'
    GridService.getPosts()
      .then(({
        status,
        data
      }) => {
        console.log(data, 'data')
        if (status !== 200) {
          $scope.error = `Error fetching /r/aww.json\nStatus: ${status}`
        }
        $scope.posts = data
          .filter(child => child.images)
          // .map(child => child.data)
      })
  }
}]
