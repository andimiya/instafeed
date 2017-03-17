export const AwwCtrl = ['$scope', 'grid', class GridCtrl {
  constructor ($scope, GridService) {
    $scope.posts = []
    this.title = 'Grid Photos'
    GridService.getPosts()
      .then(({
        status,
        data: {
          images: {
            thumbnail
          }
        }
      }) => {
        if (status !== 200) {
          $scope.error = `Error fetching from Instagram\nStatus: ${status}`
        }
        $scope.posts = children
          .filter(child => child.data.images)
          .map(child => child.data)
      })
  }
}]
