---
api: encryption
---

# 个性化加密/解密

> 这是一个用于加密/解密文本的接口，支持多种个性化加密算法。

## 接口地址

```http-vue
https://api.nxvav.cn/api/{{$frontmatter.api}}/
```

## 请求示例

::: code-group

<!--@include: ./example/code.md-->

:::

## 请求参数

| 参数名 | 类型   | 必填 | 默认值  | 枚举值            | 说明                |
| ------ | ------ | ---- | ------- | ----------------- | ------------------- |
| text   | string | 是   | -       | -                 | 输入加密/解密的文本 |
| mode   | string | 否   | encrypt | encrypt,decrypt   | 模式，加密/解密     |
| algo   | string | 否   | nuoxian | nuoxian,tcc,modtt | 加密算法            |
| key    | string | 否   | -       | -                 | 加密密钥            |

## 返回响应

#### 基础数据

| 字段名 | 类型    | 说明     |
| ------ | ------- | -------- |
| code   | integer | 状态码   |
| msg    | string  | 状态信息 |
| data   | object  | 数据对象 |

#### 数据对象 [data]

| 字段名 | 类型   | 说明              |
| ------ | ------ | ----------------- |
| algo   | string | 加密算法          |
| mode   | string | 模式              |
| text   | string | 加密/解密后的文本 |

## 返回示例

::: code-group

```json [成功 200]
{
  "code": 200,
  "msg": "获取成功",
  "data": {
    "algo": "nuoxian",
    "mode": "encrypt",
    "text": "长望世唤，冠饮无无，无无无无。间饮君，望他巅，人食岁星星星言人。长袍知，袍有，仙静，着其，笑笑静望着人间。"
  }
}
```

```json [失败 400]
{
  "code": 400,
  "msg": "参数不能为空",
  "data": {
    "algo": "nuoxian",
    "mode": "encrypt",
    "text": null
  }
}
```

:::
