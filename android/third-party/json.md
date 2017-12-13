# JSON

## gson

## FastJson

### 循环引用的问题

如果往一个 List 里多次添加了同一对象，在 `JSON.toJSONString` 时默认会被转换成这样：

```json
[
    {
        "k1": "v1",
        "k2": []
    },
    {"$ref": "$.paras[0]"},
    {"$ref": "$.paras[0]"},
    {"$ref": "$.paras[0]"},
    {"$ref": "$.paras[0]"},
    {"$ref": "$.paras[0]"},
    {"$ref": "$.paras[0]"},
    {"$ref": "$.paras[0]"},
    {"$ref": "$.paras[0]"},
    {"$ref": "$.paras[0]"},
    {"$ref": "$.paras[0]"},
    {"$ref": "$.paras[0]"},
    {"$ref": "$.paras[0]"}
]
```

我这里因为是误操作才往 List 里多次添加的，所以解决误操作就好了。

至于确实是真实意图的情况（可能一般前端才有？），可以参考 <http://blog.csdn.net/Singleton1900/article/details/50435247> 解决。
