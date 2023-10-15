---
permalink: /
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I am a senior undergraduate major in Information Engineering at [Shanghai Jiao Tong University](https://en.sjtu.edu.cn), where I'm fortunate to be supervised by [Prof. Siheng Chen](https://siheng-chen.github.io/) on **Multi-Agent Intelligence**, specifically **Collaborative Perception**. I also worked on recommendation system with [Prof. Xiaofeng Gao](https://cs.sjtu.edu.cn/~gao-xf/).

I spent the summer this year at the [IDEAS Lab](https://ideas.cs.purdue.edu/), [Purdue University](https://www.purdue.edu/), working on the topics of **Collaborative Multi-Agent System**, tutored by [Prof. Aniket Bera](https://www.cs.purdue.edu/homes/ab/) and [Dr. Kshitij Tiwari](https://kshitijtiwari.com/).

## Publications
{% assign i = 1 %}
{% for post in site.publications %}
  {% assign color = i  %}
  {% include archive-single.html %}
  {% assign i =  i | plus: 1  %}
{% endfor %}


## RoboCup Small Size League

I'm one of the core members of SRC, the team representing Shanghai Jiao Tong University in [RoboCup](https://www.robocup.org/) [SSL](https://www.robocup.org/leagues/7) since 2021. Small Size League in RoboCup soccer competition emphasizes **collaboration* of all the robots more, than single agents manipulations.

We experienced great challenges in the past a few years but we are now making technical updates to make our team competitve worldwide again. I'm contributing to both electornic design and algorithm development. 


## Teaching Assistance


{% for post in site.teaching reversed %}
  {% include archive-single.html %}
{% endfor %}


