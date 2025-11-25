---
api: yiyan
---

# 一言

> 提供一句话服务。不论在哪里，总有那么几个句子能穿透你的心。把这些句子汇聚起来，传递更多的感动。

## 接口地址

```http-vue
https://api.nxvav.cn/api/{{$frontmatter.api}}/
```

## 请求示例

::: code-group

<!--@include: ./example/code.md-->

:::

## 请求参数

| 参数名  | 类型   | 必填 | 默认值 | 枚举值             | 说明         |
| ------- | ------ | ---- | ------ | ------------------ | ------------ |
| charset | string | 否   | utf8   | utf8,gbk           | 返回编码格式 |
| encode  | string | 否   | json   | json,text,markdown | 返回数据格式 |

## 返回响应

#### 基础数据

| 字段名     | 类型    | 说明     |
| ---------- | ------- | -------- |
| id         | integer | id       |
| yiyan      | string  | 内容     |
| createTime | integer | 发布时间 |
| nick       | string  | 作者     |

## 返回示例

::: code-group

```json [成功 200]
{
  "id": 101177,
  "yiyan": "你总盼着遇贵人，贵人不曾记得你，因为贵人多忘事。",
  "createTime": 1612054332000,
  "nick": "包子再咬两个没关系阿"
}
```

```json [失败 400]
{
  "code": 400,
  "msg": "无法请求数据，请稍后再试"
}
```

:::
