---
api: exchange-rate
---

# 当日货币汇率

> 提供全球主要货币的实时汇率，支持美元、欧元、英镑、日元等常见币种的数据查询，帮您轻松完成外币汇率查询。

## 接口地址

```http-vue
https://api.nxvav.cn/api/{{$frontmatter.api}}/
```

## 请求示例

::: code-group

<!--@include: ./example/code.md-->

:::

## 请求参数

| 参数名   | 类型   | 必填 | 说明                                                                           |
| -------- | ------ | ---- | ------------------------------------------------------------------------------ |
| currency | string | 否   | 货币代码，可以在 https://coinyep.com/zh/currencies 查询，默认为 CNY （人民币） |
| encoding | string | 否   | 编码方式，支持 `text` `json` `markdown`                                        |

## 返回响应

| 字段名       | 类型           | 说明                                |
| ------------ | -------------- | ----------------------------------- |
| code         | integer        | 状态码                              |
| message      | string         | 返回信息                            |
| data         | object         | 返回数据                            |
| base_code    | string         | 基准货币代码，默认为 CNY （人民币） |
| updated      | string         | 更新时间                            |
| updated_at   | integer        | 更新时间，格式为时间戳（毫秒）      |
| next_updated | string         | 下次更新时间                        |
| rates        | array          | 汇率数据，包含货币代码和对应汇率    |
| currency     | string         | 货币代码，例如 USD、EUR 等          |
| rate         | integer/number | 对应货币的汇率                      |

## 返回示例

::: code-group

```json [成功 200]
{
  "code": 200,
  "message": "获取成功。数据来自官方/权威源头，以确保稳定与实时。",
  "data": {
    "base_code": "CNY",
    "updated": "2025/11/17 08:02:32",
    "updated_at": 1763337752000,
    "next_updated": "2025/11/18 08:17:02",
    "next_updated_at": 1763425022000,
    "rates": [
      {
        "currency": "CNY",
        "rate": 1
      },
      {
        "currency": "AED",
        "rate": 0.516828
      },
      {
        "currency": "AFN",
        "rate": 9.323724
      },
      {
        "currency": "ALL",
        "rate": 11.691294
      },
      {
        "currency": "AMD",
        "rate": 53.779007
      },
      {
        "currency": "ANG",
        "rate": 0.251905
      },
      {
        "currency": "更多汇率...",
        "rate": 0
      }
    ]
  }
}
```

```json [失败 201]
{
  "code": 201,
  "msg": "参数错误"
}
```

:::
