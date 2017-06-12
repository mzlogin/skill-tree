# Dialog

<!-- vim-markdown-toc GFM -->
* [AlertDialog](#alertdialog)

<!-- vim-markdown-toc -->

## AlertDialog

创建一个只有进度条的对话框：

xxx.java

```java
AlertDialog.Builder builder = new AlertDialog.Builder(context)
        .setView(R.layout.window_loading)
        .setCancelable(false); // 对话框外点击无法退出
dialog = builder.create();
Window window = dialog.getWindow();
if (window != null) {
    // 设置背景透明
    window.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
}
dialog.show();
```

layout/window_loading.xml

```xml
<?xml version="1.0" encoding="utf-8"?>
<ProgressBar xmlns:android="http://schemas.android.com/apk/res/android"
    style="?android:attr/progressBarStyleLarge"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:indeterminate="true" />
```
