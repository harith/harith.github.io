---
layout: post
title:  "Teleportation on the command line"
date:   2014-01-11
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

Things should be just as simple on the command line. So, I wrote [this utility][shellmarks-gist].

[![shellmarks - instacode](http://instacod.es/file/85856)][shellmarks-gist]
{: .tac }

 ---

To install, add the shellscript to ```.bashrc``` with this command.

```curl https://gist.github.com/harith/8340924/raw/shellmarks.sh >> ~/.bashrc```

When I am in a source directory I run ```mark <keyword>``` to mark it. Next
time I need to access that source, I type the ```<keyword>``` on the command
line and hit ```return```. That's it. No commands. Just the keyword and whoop,
__teleported__.

**Edit:** _People have suggested more robust and sophisticated tools like
[z][z] and [autojump][autojump].  What I [wrote][shellmarks-gist] is nowhere
close to being an alternative to any of them. But for me, this will be a sweet
supplement that takes me where I need without the overhead of another command._

[shellmarks-gist]: https://gist.github.com/harith/8340924/ "shellmarks.sh"
[z]: https://github.com/rupa/z "z"
[autojump]: https://github.com/joelthelion/autojump "autojump"
