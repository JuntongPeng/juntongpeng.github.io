---
layout: about_preview
title: preview
permalink: /preview/
home_preview: true
editorial: true
chinese_name: 彭钧桐
nav: false
sitemap: false
subtitle: Ph.D. Student, Purdue ECE

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false
  more_info:

selected_papers: true
social: true

announcements:
  enabled: true
  scrollable: false
  limit: 5

latest_posts:
  enabled: false
---

{% assign homepage = site.pages | where: "permalink", "/" | first %}
{{ homepage.content | markdownify }}
