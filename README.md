# til
Dave Hulbert's Today I Learned

<!-- TODO: add this into README.md automatically -->
<ul>
{%- for post in collections.all -%}
  {%- if post.url != "/" -%}
    <li><a href="{{ post.url }}">{{ post.url }}</a></li>
  {%- endif -%}
{%- endfor -%}
</ul>