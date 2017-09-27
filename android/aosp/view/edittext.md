# EditText


<!-- vim-markdown-toc GFM -->

* [常见问题及解决方案](#常见问题及解决方案)
    * [限制为单行](#限制为单行)
    * [更改背景为底部一条线](#更改背景为底部一条线)
    * [更换光标颜色](#更换光标颜色)
    * [解决获取到焦点后光标自动跳到最前面的问题](#解决获取到焦点后光标自动跳到最前面的问题)
    * [限制只能输入数字，最大长度为 9 位](#限制只能输入数字最大长度为-9-位)
    * [限制只能输入 IP 地址](#限制只能输入-ip-地址)

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

### 解决获取到焦点后光标自动跳到最前面的问题

```java
editText.setText(content);
editText.setSelection(content.length());
```

### 限制只能输入数字，最大长度为 9 位

```xml
<EditText
    ...
    android:inputType="number"
    android:digits="0123456789"
    android:maxLength="9"
    ...
/>
```

### 限制只能输入 IP 地址

```java
EditText ipEditText = (EditText) root.findViewById(R.id.ip_address);

InputFilter[] filters = new InputFilter[1];
filters[0] = new InputFilter() {
    @Override
    public CharSequence filter(CharSequence source, int start,
                               int end, Spanned dest, int dstart, int dend) {
        if (end > start) {
            String destTxt = dest.toString();
            String resultingTxt = destTxt.substring(0, dstart) +
                    source.subSequence(start, end) +
                    destTxt.substring(dend);
            if (!resultingTxt.matches ("^\\d{1,3}(\\." +
                    "(\\d{1,3}(\\.(\\d{1,3}(\\.(\\d{1,3})?)?)?)?)?)?")) {
                return "";
            } else {
                String[] splits = resultingTxt.split("\\.");
                for (int i=0; i<splits.length; i++) {
                    if (Integer.valueOf(splits[i]) > 255) {
                        return "";
                    }
                }
            }
        }
        return null;
    }
};
ipEditText.setFilters(filters);
```

顺便给一个校验 IP 地址是否有效的工具方法：

```java
public static boolean isIpAddress(String text) {
    Pattern p = Pattern.compile("^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$");
    Matcher m = p.matcher(text);
    return m.find();
}
```
