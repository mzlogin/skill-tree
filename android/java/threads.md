# 多线程

**目录**

<!-- vim-markdown-toc GFM -->
* [线程同步机制](#线程同步机制)
    * [synchronized 关键字](#synchronized-关键字)
    * [java.util.concurrent.lock 包中的 Lock 对象](#javautilconcurrentlock-包中的-lock-对象)

<!-- vim-markdown-toc -->

## 线程同步机制

### synchronized 关键字

可以用于同步方法与同步代码块，是**可重入**的。

* 静态方法是使用 class 对象作为对象锁。

* 非静态方法是使用 this 对象作为对象锁。（所以多个对象的 synchronized 方法是可以同时执行的）

* synchronized 实现的锁是可重入锁。

### java.util.concurrent.lock 包中的 Lock 对象

ReetrantLock 提供了 synchronized 相关的并发性和内存主义，但是添加了类投票、定时锁等候和可中断锁等。激烈竞争下有更好的性能。
