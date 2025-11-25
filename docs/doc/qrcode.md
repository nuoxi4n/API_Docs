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

| 参数名   | 类型    | 必填 | 默认值 | 枚举值             | 说明         |
| -------- | ------- | ---- | ------ | ------------------ | ------------ |
| text     | string  | 是   | -      | -                  | URL/文本内容 |
| size     | integer | 否   | 256px  | -                  | 尺寸         |
| margin   | integer | 否   | 10px   | -                  | 外边距       |
| level    | string  | 否   | M      | L,M,Q,H            | 容错         |
| label    | string  | 否   | -      | -                  | 文本标签     |
| encoding | string  | 否   | image  | text,json,markdown | 编码方式     |

## 返回响应

#### 基础数据

| 字段名  | 类型    | 说明     |
| ------- | ------- | -------- |
| code    | integer | 状态码   |
| message | string  | 状态信息 |
| data    | object  | 返回数据 |

#### 数据对象 [data]

| 字段名    | 类型   | 说明                |
| --------- | ------ | ------------------- |
| mime_type | string | 图片类型            |
| text      | string | URL/文本内容        |
| base64    | string | base64 编码图片数据 |
| data_uri  | string | data uri 图片数据   |

## 返回示例

::: code-group

```json [成功 200]
{
  "code": 200,
  "message": "获取成功",
  "data": {
    "mime_type": "image/png",
    "text": "nuoxian",
    "base64": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEAAQMAAABmvDolAAAABlBMVEUEAgT8/vxJvsdeAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABJklEQVRoge3ZMQ6DMAwFUKMOjByhR+Fo9Gg5Ckdg7IBw4zgOoa2KVEzV4XtC0euCzU+gxDtFAL8DE1kNU8OB4k/msnQF8ASN3vSZBl6ov5NeaiMAnEGQu66roVUrHWoBTgPSltwLgPOBzDrAacASJq5+jiCAY2C7b7apFx82VoCvQVWaMHG1KgA/sMaKlIz9qH3oN88FgAOgFNt04ZuCZLtFVrUXAL4grbIdUXIBuAJ5sWHtRacHbxn7fAngDfKsk+6b2WquAziCtSZNcClJGALwBfVpMIcN6xNQRRCAC3j+HmWAN2cYABcQiOzNXRowlrG3XgB4A7ZYYYl4evNtEMALcPnvoD54A/iBkjBaceyzfYkggEOArIbtEaW3MAdwAjsF8D/gAQrPwygIu686AAAAAElFTkSuQmCC",
    "data_uri": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEAAQMAAABmvDolAAAABlBMVEUEAgT8/vxJvsdeAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABJklEQVRoge3ZMQ6DMAwFUKMOjByhR+Fo9Gg5Ckdg7IBw4zgOoa2KVEzV4XtC0euCzU+gxDtFAL8DE1kNU8OB4k/msnQF8ASN3vSZBl6ov5NeaiMAnEGQu66roVUrHWoBTgPSltwLgPOBzDrAacASJq5+jiCAY2C7b7apFx82VoCvQVWaMHG1KgA/sMaKlIz9qH3oN88FgAOgFNt04ZuCZLtFVrUXAL4grbIdUXIBuAJ5sWHtRacHbxn7fAngDfKsk+6b2WquAziCtSZNcClJGALwBfVpMIcN6xNQRRCAC3j+HmWAN2cYABcQiOzNXRowlrG3XgB4A7ZYYYl4evNtEMALcPnvoD54A/iBkjBaceyzfYkggEOArIbtEaW3MAdwAjsF8D/gAQrPwygIu686AAAAAElFTkSuQmCC"
  }
}
```

```json [失败 400]
{
  "code": 400,
  "message": "参数 text 不能为空"
}
```

:::
