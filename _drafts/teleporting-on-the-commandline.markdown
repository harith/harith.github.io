---
layout: post
title:  "Teleportation on the command line"
date:   2014-01-10
categories: 
    - technology
    - linux
    - command line
excerpt: How to reach deeply nested directories in a jiffy. Stop hitting that TAB already.
---

If you've ever checked out a source code into a deeply nested directory like
```~/workspace/codes/project/website/src/``` you probably share my frustrations
in reaching that directory when needed.  It's particularly difficult if
some of the child directories begin with the same set of characters.  Hitting
TAB won't auto-complete.

I've used ```screen``` instances to stay in the project directory. But it's
difficult to lose the screens during reboot.

You probably trained your brain to ignore these frustrations. I did. 

**But once in a while my brain says screw that, this should not be so
difficult.**

Nobody _types_ an entire URL like
```https://example.com/example-page?input=sample&another-input=2```. We
_bookmark_ it and give it a keyword like ```ex``` or something. From then, we
just type ex and hit return to access the website. 

Things should be just as simple on the shell. So, I wrote this utility.

<script src="https://gist.github.com/harith/8340924.js"></script>

When I am in a source directory I run ```mark <keyword>``` to mark it. Next
time I need to access that source, I type the ```<keyword>``` on the command
line and hit ```return```. That's it. No commands. Just the keyword and whoop,
__teleported__.
