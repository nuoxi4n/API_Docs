---
api: bing
---

# 必应每日美图

> 超高质量的必应壁纸与必应美图，你可以获取到每日精彩的官方必应壁纸

## 接口地址

```http-vue
https://api.nxvav.cn/api/{{$frontmatter.api}}/
```

## 请求示例

::: code-group

<!--@include: ./example/code.md-->

:::

## 请求参数

| 参数名 | 类型   | 必填 | 说明                                                                         |
| ------ | ------ | ---- | ---------------------------------------------------------------------------- |
| encode | string | 否   | 返回数据格式，可选值`json`，`text`，`markdown`，`image`，不填默认返回`image` |
| type   | string | 否   | 返回数据类型，可选值`auto`，`pc`、`mobile`。不填默认`pc`                     |

## 返回响应

| 字段名         | 类型    | 说明             |
| -------------- | ------- | ---------------- |
| code           | integer | 状态码           |
| message        | string  | 壁纸模糊开始日期 |
| data           | object  | 返回数据详情     |
| title          | string  | 壁纸标题         |
| description    | string  | 壁纸描述         |
| cover          | string  | 壁纸直链         |
| cover_4k       | string  | 壁纸 4k 直链     |
| copyright      | string  | 壁纸版权         |
| update_date    | string  | 壁纸更新时间     |
| update_date_at | integer | 壁纸更新时间戳   |

## 返回示例

::: code-group

```json [成功 200]
{
  "code": 200,
  "message": "获取成功",
  "data": {
    "title": "小径在召唤",
    "description": "谢南多厄国家公园的秋色，弗吉尼亚州，美国",
    "cover": "https://bing.com/th?id=OHR.ShenandoahTrail_ZH-CN8626326726_1920x1080.jpg",
    "cover_4k": "https://bing.com/th?id=OHR.ShenandoahTrail_ZH-CN8626326726_UHD.jpg",
    "copyright": "© Michael Ver Sprill/Getty Images",
    "update_date": "2025-11-17 09:15:50",
    "update_date_at": 1763370950
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
