---
api: garbages
---

# 垃圾分类查询

> 垃圾分类查询，可以帮助用户识别和分类各种垃圾，包括可回收物、干垃圾、湿垃圾和有害垃圾。

## 接口地址

```http-vue
https://api.nxvav.cn/api/{{$frontmatter.api}}/
```

## 请求示例

::: code-group

<!--@include: ./example/code.md-->

:::

## 请求参数

| 参数名 | 类型   | 必填 | 说明                 |
| ------ | ------ | ---- | -------------------- |
| name   | string | 是   | 输入需要查询的垃圾名 |

## 返回响应

| 字段名        | 类型    | 说明             |
| ------------- | ------- | ---------------- |
| code          | integer | 状态码           |
| data          | array   | 垃圾分类数据数组 |
| data.name     | string  | 垃圾名称         |
| data.category | string  | 垃圾分类         |
| data.content  | string  | 垃圾分类内容描述 |

## 返回示例

::: code-group

```json [成功 200]
{
  "code": 200,
  "data": [
    {
      "name": "烂苹果",
      "category": "湿垃圾",
      "content": "易腐垃圾，如：食材废料、剩饭剩菜、过期食品"
    },
    {
      "name": "苹果",
      "category": "湿垃圾",
      "content": "易腐垃圾，如：食材废料、剩饭剩菜、过期食品"
    },
    {
      "name": "苹果核",
      "category": "湿垃圾",
      "content": "易腐垃圾，如：食材废料、剩饭剩菜、过期食品"
    },
    {
      "name": "苹果派",
      "category": "湿垃圾",
      "content": "易腐垃圾，如：食材废料、剩饭剩菜、过期食品"
    },
    {
      "name": "苹果皮",
      "category": "湿垃圾",
      "content": "易腐垃圾，如：食材废料、剩饭剩菜、过期食品"
    },
    {
      "name": "苹果耳机",
      "category": "可回收物",
      "content": "适宜回收利用和资源化利用的，如：玻、金、塑、纸、衣"
    },
    {
      "name": "苹果肉",
      "category": "湿垃圾",
      "content": "易腐垃圾，如：食材废料、剩饭剩菜、过期食品"
    }
  ]
}
```

```json [失败 400]
{
  "code": 400,
  "msg": "请提供要查询的物品名称"
}
```

:::
