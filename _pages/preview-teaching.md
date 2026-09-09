---
layout: page_preview
permalink: /preview/teaching/
preview_source: /teaching/
preview_section: teaching
home_preview: true
editorial: true
title: Service & Teaching
heading: Service & Teaching.
description: Academic service, teaching, and research experience.
nav: false
sitemap: false
---

{% assign source_page = site.pages | where: "permalink", "/teaching/" | first %}
{{ source_page.content | markdownify }}
