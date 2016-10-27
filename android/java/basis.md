# 语言基础

**目录**

<!-- vim-markdown-toc GFM -->
* [类型转换](#类型转换)
	* [float to int](#float-to-int)
* [参考](#参考)

<!-- vim-markdown-toc -->

## 类型转换

### float to int

1. 四舍五入

    ```java
    i = Math.round(f);
    ```

    示例结果：

    | float | int |
    |-------|-----|
    | 2.0   | 2   |
    | 2.22  | 2   |
    | 2.68  | 3   |
    | -2.0  | -2  |
    | -2.22 | -2  |
    | -2.68 | -3  |

    相当于 `(int) Math.floor(f + 0.5f)`。

    *Math.round(float) returns a int, Math.round(double) returns a long. see <http://docs.oracle.com/javase/7/docs/api/java/lang/Math.html#round(double)>*

2. 强制转换

    截取整数部分。

    ```java
    i = (int) f;
    ```

    示例结果：

    | float | int |
    |-------|-----|
    | 2.0   | 2   |
    | 2.22  | 2   |
    | 2.68  | 2   |
    | -2.0  | -2  |
    | -2.22 | -2  |
    | -2.68 | -2  |

3. 向下取整

    ```java
    i = (int) Math.floor(f)
    ```

    示例结果：

    | float | int |
    |-------|-----|
    | 2.0   | 2   |
    | 2.22  | 2   |
    | 2.68  | 2   |
    | -2.0  | -2  |
    | -2.22 | -3  |
    | -2.68 | -3  |

4. 向上取整

    ```java
    i = (int) Math.ceil(f)
    ```

    示例结果：

    | float | int |
    |-------|-----|
    | 2.0   | 2   |
    | 2.22  | 3   |
    | 2.68  | 3   |
    | -2.0  | -2  |
    | -2.22 | -2  |
    | -2.68 | -2  |

## 参考

* [How to convert float to int with Java](http://stackoverflow.com/questions/1295424/how-to-convert-float-to-int-with-java)
