# CheckBox

<!-- vim-markdown-toc GFM -->
* [UI 定制](#ui-定制)
    * [修改 check 与 unchecked 图片](#修改-check-与-unchecked-图片)
    * [修改文字与选择框距离](#修改文字与选择框距离)

<!-- vim-markdown-toc -->

## UI 定制

### 修改 check 与 unchecked 图片

layout/layout_xxx.xml

```xml
<CheckBox
    ...
    android:button="@drawable/check_selector"
    ... />
```

### 修改文字与选择框距离

```xml
android:paddingLeft="10dp"
```
