sapsalgae
=========

fast and simple static site generator.

> [Sap-sal-gae](https://en.wikipedia.org/wiki/Sapsali)(Korean: 삽살개) is a shaggy korean breed of dog.

<img src="https://upload.wikimedia.org/wikipedia/commons/3/38/Korea-Jeonju-Sapsal_dog_in_front_of_a_Hanok_Village-01.jpg" width="200" alt="sap-sal-gae" />

### 디렉토리 구조

* src : source directory
  * asset : copy to output
    - css, png, jpg, js, ...
  * layout
    - default.ejs
  - page: merge all html/markdown files with layout into html and emit into output
    - md, html...
* out : output directory

### front-matter

- title[=untitled]
- layout[=default]

### getting started

```console
$ npm ci
$ node index.js
```

---
may the **SOURCE** be with you...
