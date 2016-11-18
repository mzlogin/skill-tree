# Activity

**目录**

<!-- vim-markdown-toc GFM -->
* [生命周期](#生命周期)
    * [生命周期回调](#生命周期回调)
    * [需要注意的点](#需要注意的点)
* [Activity 设计的好处](#activity-设计的好处)

<!-- vim-markdown-toc -->

## 生命周期

### 生命周期回调

![Activity Lifecycle](assets/activty-lifecycle.png)

### 需要注意的点

1. 如果有数据需要持久化，在 onPause() 的时候就做，因为 onStop() 返回之后 Activity 随时可能被杀死，而在 Pre-HONEYCOMB 版本里 onPause() 返回之后就可能被杀死。

2. onSaveInstanceState(Bundle) 的调用时机是 Activity 被杀掉之前，onStop() 之前，但因为它不是生命周期回调函数，所以并不能确保所有情况都能被调用到。

## Activity 设计的好处

* 可以很方便地调起别的 Activity（包括应用内和应用外）并获取调用结果。

* 不可见状态就停止活动，节约系统资源。

* 用栈管理，切换行为符合用户心理预期。
