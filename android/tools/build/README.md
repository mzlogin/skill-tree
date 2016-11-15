# 构建

**目录**

<!-- vim-markdown-toc GFM -->
* [可能遇到的问题](#可能遇到的问题)
    * [65K 方法数限制](#65k-方法数限制)
* [参考](#参考)

<!-- vim-markdown-toc -->

## 可能遇到的问题

### 65K 方法数限制

简而言之：

编译器生成 classes.dex 文件时会给一个 dex 文件里的所有方法分配一个唯一 ID，而这个 ID 限于 Dalvik bytecode 操作数 16 bits 的限制，范围为 [0, 0xffff]。

## 参考

* [由Android 65K方法数限制引发的思考](https://jayfeng.com/2016/03/10/%E7%94%B1Android-65K%E6%96%B9%E6%B3%95%E6%95%B0%E9%99%90%E5%88%B6%E5%BC%95%E5%8F%91%E7%9A%84%E6%80%9D%E8%80%83/)
* [解决传说中的 Android 65k 问题](http://www.jianshu.com/p/245022d136e1)
