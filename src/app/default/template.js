<h1>{{ default.title }}</h1>


<ul class="post-thumb-list">
  <li ng-repeat="post in posts">
    <img ng-src="{{ post.preview.images[0].source.url }}" alt="{{ post.title }}"/>
  </li>
</ul>
