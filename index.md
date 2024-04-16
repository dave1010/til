# Dave Hulbert's Today I Learned (TIL)

## About

I'm [Dave](https://dave.engineer/) and these are a few of the things
I've learned that aren't quite big enough for a blog post.
I'm always learning, so if you spot anything wrong then please submit a
[PR](https://github.com/dave1010/til/pulls) or raise an [issue](https://github.com/dave1010/til/issues).
Find out [how this site works](til/how-this-works/).

You may also want to read things that are big enough for a blog post
on my [blog](https://blog.dave.engineer/).

---

## Tags and Search

{% for categoryObj in collections.nestedPosts %}
<a href="#cat-{{ categoryObj.category }}">`{{ categoryObj.category }}`</a>, {% endfor %}

<form action="https://github.com/search" method="get" onsubmit="this.q.value = 'repo:dave1010/til ' + this.q.value; return true;">
    <input type="hidden" name="type" value="code">
    <input type="text" name="q" placeholder="Search">
    <input type="submit" value="Search">
</form>

---

<!-- TODO: add this into README.md automatically -->

## All TILs

{% for categoryObj in collections.nestedPosts %}
  <h3 id="cat-{{ categoryObj.category }}">{{ categoryObj.category }}</h3>
  <ul>
    {% for post in categoryObj.posts %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>{% endfor %}
  </ul>
{% endfor %}
