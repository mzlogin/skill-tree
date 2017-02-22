# 更新 UI

一般要求在 UI 线程中更新 UI，但在子线程中直接操作 UI 也并非不可能，比如在 ViewRootImpl 初始化（Activity 的 onResume 里）之前，操作 UI 不会调用到 ViewRootImpl 的 checkThread。

## 在子线程中操作 UI 的方法

1. 通过 handler。

2. Activity 的 runOnUiThread 方法。

3. View.post(Runnable) 方法。
