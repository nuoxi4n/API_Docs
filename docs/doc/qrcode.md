---
api: qrcode
---

# 生成二维码

> 通过文本或 url 生成二维码，支持自定义尺寸

## 接口地址

```http-vue
https://api.nxvav.cn/api/{{$frontmatter.api}}/
```

## 请求示例

::: code-group

<!--@include: ./example/code.md-->

:::

## 请求参数

| 参数名 | 类型    | 必填 | 说明                        |
| ------ | ------- | ---- | --------------------------- |
| text   | string  | 是   | 返回文本/网址二维码         |
| size   | integer | 否   | 返回文本/网站二维码像素大小 |

## 返回响应

| 字段名 | 类型      | 说明                             |
| ------ | --------- | -------------------------------- |
| image  | image/png | 返回的二维码图片，图片格式为 PNG |

## 返回示例

::: code-group

```text [成功 200]
Content-Type: image/png
Url: https://api.nxvav.cn/api/qrcode/?text=https://api.nxvav.cn/&size=100
```

```text [失败 201]
参数错误或没有内容！
```

:::
