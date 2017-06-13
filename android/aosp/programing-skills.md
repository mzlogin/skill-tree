# 编码技巧

<!-- vim-markdown-toc GFM -->
* [在代码里区分 debug 和 release 版](#在代码里区分-debug-和-release-版)

<!-- vim-markdown-toc -->

## 在代码里区分 debug 和 release 版

```java
if (BuildConfig.DEBUG) {
    ...
} else {
    ...
}
```
