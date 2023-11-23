# Dave Hulbert's Today I Learned (TIL)

## [`https://til.dave.engineer`](https://til.dave.engineer)

Inspired by [Simon Willison's TIL](https://til.simonwillison.net/) and [jbranchaud/til](https://github.com/jbranchaud/til).

Run with `npm run build` or `npm run serve`

<!-- TODO: add this into README.md automatically -->

{% for category in collections.nestedPosts | sort %}
  <h2>{{ category[0] }}</h2>
  <ul>
    {% for post in category[1] | sort: 'title' %}<li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}


