# ViewPager

**目录**

<!-- vim-markdown-toc GFM -->

* [获取 ViewPager 中的当前 Fragment](#获取-viewpager-中的当前-fragment)
* [参考：](#参考)

<!-- vim-markdown-toc -->

## 获取 ViewPager 中的当前 Fragment

```java
Fragment fragment = (Fragment) mAdapter.instantiateItem(mViewPager, mViewPager.getCurrentItem());
```

## 参考：

* [一行代码获取ViewPager中当前显示的Fragment](https://blog.csdn.net/Xk632172748/article/details/53325718)
