---
api: dongman
---

# 随机动漫图

> 随机二次元图片 API，随机动漫壁纸，每天刷一刷，每次不一样。

## 接口地址

```http-vue
https://api.nxvav.cn/api/{{$frontmatter.api}}/
```

## 请求示例

::: code-group

<!--@include: ./example/code.md-->

:::

## 请求参数

| 参数名 | 类型   | 必填 | 说明                                                              |
| ------ | ------ | ---- | ----------------------------------------------------------------- |
| encode | string | 否   | 返回数据格式，可选值`json`，`js`，`text`，不填默认返回`image/png` |

## 返回响应

| 字段名 | 类型    | 说明     |
| ------ | ------- | -------- |
| code   | integer | 状态码   |
| imgurl | string  | 图片链接 |

## 返回示例

::: code-group

```json [成功 200]
{
  "code": 200,
  "imgurl": "https://cdn.cdnjson.com/pic.html?url=https://tva3.sinaimg.cn/large/a15b4afegy1fmvj54szzxj21hc0u01ku"
}
```

```json [失败 201]
{
  "code": 201,
  "imgurl": "Failed to read the file."
}
```

:::
