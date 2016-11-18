# Intent

**目录**

<!-- vim-markdown-toc GFM -->
* [Intent 匹配](#intent-匹配)
    * [使用 PackageManager 返回能接受特定 Intent 的组件](#使用-packagemanager-返回能接受特定-intent-的组件)
    * [判断是否有 Activity 能处理 Intent](#判断是否有-activity-能处理-intent)
    * [强制使用应用选择器](#强制使用应用选择器)
* [参考](#参考)

<!-- vim-markdown-toc -->

## Intent 匹配

### 使用 PackageManager 返回能接受特定 Intent 的组件

* [queryIntentActivities()](https://developer.android.com/reference/android/content/pm/PackageManager.html#queryIntentActivities(android.content.Intent, int))

* [queryIntentServices()](https://developer.android.com/reference/android/content/pm/PackageManager.html#queryIntentServices(android.content.Intent, int))

* [queryBroadcastReceivers()](https://developer.android.com/reference/android/content/pm/PackageManager.html#queryBroadcastReceivers(android.content.Intent, int))

### 判断是否有 Activity 能处理 Intent

* [Intent.resolveActivity()](https://developer.android.com/reference/android/content/Intent.html#resolveActivity(android.content.pm.PackageManager))

* [Intent.resolveActivityInfo()](https://developer.android.com/reference/android/content/Intent.html#resolveActivityInfo(android.content.pm.PackageManager, int))

### 强制使用应用选择器

```java
Intent sendIntent = new Intent(Intent.ACTION_SEND);
...

// Always use string resources for UI text.
// This says something like "Share this photo with"
String title = getResources().getString(R.string.chooser_title);
// Create intent to show the chooser dialog
Intent chooser = Intent.createChooser(sendIntent, title);

// Verify the original intent will resolve to at least one activity
if (sendIntent.resolveActivity(getPackageManager()) != null) {
    startActivity(chooser);
}
```

## 参考

* [Intent 和 Intent 过滤器](https://developer.android.com/guide/components/intents-filters.html)
