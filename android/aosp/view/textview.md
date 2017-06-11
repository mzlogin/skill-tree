# TextView

<!-- vim-markdown-toc GFM -->
* [常见问题及解决方案](#常见问题及解决方案)
    * [限制为单行](#限制为单行)
    * [文字过长时省略或跑马灯](#文字过长时省略或跑马灯)
    * [添加边框](#添加边框)

<!-- vim-markdown-toc -->

## 常见问题及解决方案

### 限制为单行

`android:lines="1"`

### 文字过长时省略或跑马灯

`android:ellipsize="end"`

取值可以有 start、middle、end 和 marquee。

### 添加边框

layout/layout_xxx.xml

```xml
<TextView
    ...
    android:background="@drawable/text_border"
    ... />
```

drawable/text_border.xml

```xml
<?xml version="1.0" encoding="utf-8"?>
<shape xmlns:android="http://schemas.android.com/apk/res/android">
    <solid android:color="@android:color/transparent" />
    <stroke android:color="#cccccc" android:width="1px" />
</shape>
```
