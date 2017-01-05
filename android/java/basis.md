# 语言基础

**目录**

<!-- vim-markdown-toc GFM -->
* [Object 类的方法及用途](#object-类的方法及用途)
* [类型转换](#类型转换)
    * [float to int](#float-to-int)
* [参考](#参考)

<!-- vim-markdown-toc -->

## Object 类的方法及用途

公有方法：

* equals

    用于对象间的比较。一般用于判断两个对象的内容是否相同。

* getClass

    返回类对象。

* hashCode

    返回对象的 hash code。一般在 HashSet、HashMap 和 HashTable 里会被调用到。

    一些约定：

    * 如果对象的 equals 方法做比较所用到的信息没有被修改，那对它多次调用 hashCode 方法返回的值应该相同。
    * 如果两个对象调用 equals 方法返回 true，那么它们的 hashCode 方法应该返回相同的值。
    * 如果两个对象调用 equals 方法返回 false，它们的 hashCode 方法不是必须返回不相同的值。但给不同对象返回不同 hash code 能提升散列表的性能。

* notify

    唤醒一个正在等待此对象的线程。

* notifyAll

    唤醒所有正在等待此对象的线程。

* toString

    返回该对象的字符串表示。

* wait

    让当前线程进入等待状态，直到另一个线程调用了该对象的 notify 或 notifyAll 方法。

保护方法：

* clone

    创建并返回该对象的拷贝。

* finalize

    垃圾收集器认为不存在该对象的引用后调用。

## 类型转换

### float to int

**四舍五入**

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

**截取整数部分**

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

**向下取整**

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

**向上取整**

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
