# 消息机制

## 在工作线程里如何也能处理消息

方法一：

给线程关联一个 Looper.prepare()，然后调用 Looper.loop()。

方法二：

使用 HandlerThread。
