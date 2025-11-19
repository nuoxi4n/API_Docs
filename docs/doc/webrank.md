---
api: webrank
---

# 网站权重查询

> 网站权重查询可查到各大搜索引擎的权重

## 接口地址

```http-vue
https://api.nxvav.cn/api/{{$frontmatter.api}}/
```

## 请求示例

::: code-group

<!--@include: ./example/code.md-->

:::

## 请求参数

| 参数名 | 类型   | 必填 | 说明                                                                                                           |
| ------ | ------ | ---- | -------------------------------------------------------------------------------------------------------------- |
| url    | string | 是   | 网站域名，不加 http(s)                                                                                         |
| type   | string | 否   | 请求网站权重类型，可选值`json`，`baidupc`，`baidum`，`sougou`，`google`，默认`baidupc`，除`json`其他均图片输出 |

## 返回响应

| 字段名       | 类型    | 说明           |
| ------------ | ------- | -------------- |
| code         | integer | 状态码         |
| host         | string  | 查询域名       |
| data.baidupc | integer | 百度 pc 的权重 |
| data.baidum  | integer | 百度 m 的权重  |
| data.sougou  | integer | 搜狗的权重     |
| data.google  | integer | 谷歌的权重     |

## 返回示例

::: code-group

```json [成功 200]
{
  "code": 200,
  "host": "baidu.com",
  "data": {
    "baidupc": "10",
    "baidum": "10",
    "sougou": "10",
    "google": "10"
  }
}
```

:::
