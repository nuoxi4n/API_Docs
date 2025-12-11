---
api: luck
---

# 随机运势

> 随机获取运势，帮助您把握每一天的机遇。

## 接口地址

```http-vue
https://api.nxvav.cn/api/{{$frontmatter.api}}/
```

## 请求示例

::: code-group

<!--@include: ./example/code.md-->

:::

## 请求参数

| 参数名   | 类型    | 必填 | 默认值 | 枚举值             | 说明               |
| -------- | ------- | ---- | ------ | ------------------ | ------------------ |
| id       | integer | 否   | -      | 0~18               | 返回指定类型运势   |
| encoding | string  | 否   | json   | json,text,markdown | 返回数据的编码格式 |

## 返回响应

#### 基础数据

| 字段名 | 类型    | 说明     |
| ------ | ------- | -------- |
| code   | integer | 状态码   |
| msg    | string  | 状态信息 |
| data   | object  | -        |

#### 数据对象 [data]

| 字段名         | 类型    | 说明         |
| -------------- | ------- | ------------ |
| luck_desc      | string  | 运势类型     |
| luck_rank      | integer | 运势等级     |
| luck_tip       | string  | 运势提示     |
| luck_tip_index | integer | 运势提示索引 |

## 返回示例

::: code-group

```json [成功 200]
{
  "code": 200,
  "msg": "获取成功。",
  "data": {
    "luck_desc": "恋愛運",
    "luck_rank": 21,
    "luck_tip": "比起自己，要优先考虑对方，是加深爱情的一天",
    "luck_tip_index": 18
  }
}
```

```json [失败 500]
{
  "code": 500,
  "msg": "无法请求数据，请稍后再试"
}
```

:::
