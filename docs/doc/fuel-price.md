---
api: fuel-price
---

# 油价查询

> 提供最新的油价数据，包括全国各地的 92 号、95 号、98 号汽油和 0 号柴油的价格

## 接口地址

```http-vue
https://api.nxvav.cn/api/{{$frontmatter.api}}/
```

## 请求示例

::: code-group

<!--@include: ./example/code.md-->

:::

## 请求参数

| 参数名   | 类型   | 必填 | 默认值 | 枚举值             | 说明               |
| -------- | ------ | ---- | ------ | ------------------ | ------------------ |
| region   | string | 否   | -      | -                  | 待查询地区         |
| encoding | string | 否   | json   | json,text,markdown | 返回数据的编码格式 |

## 返回响应

#### 基础数据

| 字段名  | 类型    | 说明     |
| ------- | ------- | -------- |
| code    | integer | 状态码   |
| message | string  | 状态信息 |
| data    | object  | 返回数据 |

#### 数据对象 [data]

| 字段名     | 类型    | 说明               |
| ---------- | ------- | ------------------ |
| region     | string  | 地区名称           |
| items      | array   | 油品列表           |
| link       | string  | 详情链接           |
| updated    | string  | 更新时间           |
| updated_at | integer | 更新时间戳（毫秒） |

#### 数据数组 [items]

| 字段名     | 类型   | 说明                  |
| ---------- | ------ | --------------------- |
| name       | string | 油品名称              |
| price      | float  | 油品价格（元/升）     |
| price_desc | string | 油品价格描述（元/升） |

## 返回示例

::: code-group

```json [成功 200]
{
  "code": 200,
  "message": "获取成功",
  "data": {
    "region": "北京",
    "items": [
      {
        "name": "92#汽油",
        "price": 6.94,
        "price_desc": "6.94 元/升"
      },
      {
        "name": "95#汽油",
        "price": 7.39,
        "price_desc": "7.39 元/升"
      },
      {
        "name": "98#汽油",
        "price": 8.89,
        "price_desc": "8.89 元/升"
      },
      {
        "name": "0#柴油",
        "price": 6.62,
        "price_desc": "6.62 元/升"
      }
    ],
    "link": "http://www.qiyoujiage.com/beijing.shtml",
    "updated": "2025-11-17 19:36:04",
    "updated_at": 1763379364000
  }
}
```

```json [失败 201]
{
  "code": 201,
  "msg": "查询失败"
}
```

```json [错误 400]
{
  "code": 400,
  "msg": "暂不支持 日本 区域查询",
  "data": null
}
```

:::
