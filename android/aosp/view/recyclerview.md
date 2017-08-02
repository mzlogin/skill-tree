# RecyclerView

<!-- vim-markdown-toc GFM -->
* [常见问题解决](#常见问题解决)
    * [设置 OnItemClickListener](#设置-onitemclicklistener)

<!-- vim-markdown-toc -->

## 常见问题解决

### 设置 OnItemClickListener

```java
class MyAdapter extends android.support.v7.widget.RecyclerView.Adapter<MyAdapter.ViewHolder> {

    private OnItemClickListener mItemClickListener;

    interface OnItemClickListener {
        void onItemClick(int position);
    }

    MyAdapter(OnItemClickListener itemClickListener) {
        mItemClickListener = itemClickListener;
    }

    // ...

    static class ViewHolder extends RecyclerView.ViewHolder {
        ViewHolder(View v, final OnItemClickListener listener) {
            super(v);
            v.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    listener.onItemClick(getLayoutPosition());
                }
            });
        }
    }
}
```

```java
RecyclerView.Adapter mAdapter = new MyAdapter(new MyAdapter.OnItemClickListener() {
    @Override
    public void onItemClick(int position) {
        // ...
    }
});
mRecyclerView.setAdapter(mAdapter);
```
