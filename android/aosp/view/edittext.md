# EditText


<!-- vim-markdown-toc GFM -->
* [常见问题及解决方案](#常见问题及解决方案)
    * [限制为单行](#限制为单行)
    * [更改背景为底部一条线](#更改背景为底部一条线)
    * [更换光标颜色](#更换光标颜色)

<!-- vim-markdown-toc -->

## 常见问题及解决方案

### 限制为单行

`android:inputType="text"`

### 更改背景为底部一条线

drawable/edittext_background.xml

```xml
<?xml version="1.0" encoding="utf-8"?>
<selector xmlns:android="http://schemas.android.com/apk/res/android">
    <item android:state_focused="true" android:drawable="@drawable/edittext_focused" />
    <item android:drawable="@drawable/edittext_normal" />
</selector>
```

drawable/edittext_normal.xml

```xml
<?xml version="1.0" encoding="utf-8"?>
<layer-list xmlns:android="http://schemas.android.com/apk/res/android">
    <item
        android:left="-1dp"
        android:right="-1dp"
        android:top="-1dp">
        <shape>
            <solid android:color="#00FFFFFF" />
            <stroke
                android:width="1dp"
                android:color="#FFFFFF" />
        </shape>
    </item>
</layer-list>
```

drawable/edittext_focused.xml

```xml
<?xml version="1.0" encoding="utf-8"?>
<layer-list xmlns:android="http://schemas.android.com/apk/res/android">
    <item
        android:left="-1dp"
        android:right="-1dp"
        android:top="-1dp">
        <shape>
            <solid android:color="#00FFFFFF" />
            <stroke
                android:width="1dp"
                android:color="@android:color/holo_green_dark" />
        </shape>
    </item>
</layer-list>
```

### 更换光标颜色


layout/xxx.xml

```xml
<EditText
    ...
    android:textCursorDrawable="@drawable/edittext_cursor"
/>
```

drawable/edittext_cursor.xml

```xml
<?xml version="1.0" encoding="utf-8"?>
<shape xmlns:android="http://schemas.android.com/apk/res/android">
    <size android:width="1dp" />
    <solid android:color="@android:color/holo_green_dark" />
</shape>
```
