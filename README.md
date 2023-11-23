# Dave Hulbert's Today I Learned (TIL)

## [`https://til.dave.engineer`](https://til.dave.engineer)

Inspired by [Simon Willison's TIL](https://til.simonwillison.net/) and [jbranchaud/til](https://github.com/jbranchaud/til).

Run with `npm run build` or `npm run serve`

<!-- TODO: add this into README.md automatically -->

{% for categoryObj in collections.nestedPosts %}
  <h2>{{ categoryObj.category }}</h2>
  <ul>
    {% for post in categoryObj.posts %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>{% endfor %}
  </ul>
{% endfor %}

