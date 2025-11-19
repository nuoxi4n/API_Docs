---
api: mcuuid
---

# MC 正版用户 UUID 获取

> 可以获取到正版 MC 用户名的 UUID

## 接口地址

```http-vue
https://api.nxvav.cn/api/{{$frontmatter.api}}/
```

## 请求示例

::: code-group

<!--@include: ./example/code.md-->

:::

## 请求参数

| 参数名 | 类型   | 必填 | 说明           |
| ------ | ------ | ---- | -------------- |
| id     | string | 是   | 正版 MC 用户名 |

## 返回响应

| 字段名 | 类型    | 说明      |
| ------ | ------- | --------- |
| code   | integer | 状态码    |
| name   | string  | 玩家昵称  |
| uuid   | string  | 玩家 UUID |

## 返回示例

::: code-group

```json [成功 200]
{
  "code": 200,
  "name": "123",
  "uuid": "687ad06c0bf14aa4af9e49d97f4104b7"
}
```

```json [失败 400]
{
  "code": 400,
  "msg": "查询失败"
}
```

:::
