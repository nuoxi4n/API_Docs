---
api: password
---

# 密码生成/强度检测器

> 帮助生成更安全的密码和检测密码强度。

## 接口地址

```http-vue
https://api.nxvav.cn/api/{{$frontmatter.api}}/
```

## 请求示例

::: code-group

<!--@include: ./example/code.md-->

:::

## 请求参数

| 参数名   | 类型   | 必填 | 默认值   | 枚举值                         | 说明     |
| -------- | ------ | ---- | -------- | ------------------------------ | -------- |
| action   | string | 否   | generate | generate,check                 | 使用功能 |
| encoding | string | 否   | json     | json,text,text-detail,markdown | 返回格式 |

#### Generate 模式请求参数

| 参数名            | 类型    | 必填 | 默认值 | 枚举值     | 说明         |
| ----------------- | ------- | ---- | ------ | ---------- | ------------ |
| length            | integer | 否   | 16     | 4-128      | 密码长度     |
| numbers           | boolean | 否   | true   | true,false | 包含数字     |
| symbols           | boolean | 否   | false  | true,false | 包含特殊符号 |
| lowercase         | boolean | 否   | true   | true,false | 包含小写字母 |
| uppercase         | boolean | 否   | true   | true,false | 包含大写字母 |
| exclude_similar   | boolean | 否   | true   | true,false | 排除相似字符 |
| exclude_ambiguous | boolean | 否   | true   | true,false | 排除模糊字符 |

> [!WARNING] 警告
> `numbers`, `symbols`, `lowercase`, `uppercase` 中至少必须开启一项，否则会恢复默认配置。

#### Check 模式请求参数

| 参数名   | 类型   | 必填 | 默认值 | 枚举值 | 说明                 |
| -------- | ------ | ---- | ------ | ------ | -------------------- |
| password | string | 是   | -      | -      | 需要检测的密码字符串 |

## 返回响应

#### 基础数据

| 字段名 | 类型    | 说明   |
| ------ | ------- | ------ |
| code   | integer | 状态码 |
| msg    | string  | 消息   |
| data   | object  | 数据   |

#### 数据对象 [data]

| 字段名          | 类型    | 说明         |
| --------------- | ------- | ------------ |
| password        | string  | 生成的字符串 |
| length          | integer | 密码长度     |
| config          | object  | 配置信息     |
| character_sets  | object  | 字符集信息   |
| generation_info | object  | 生成信息     |

#### 数据对象 [config]

| 字段名            | 类型    | 说明             |
| ----------------- | ------- | ---------------- |
| include_numbers   | boolean | 是否包含数字     |
| include_symbols   | boolean | 是否包含特殊符号 |
| include_lowercase | boolean | 是否包含小写字母 |
| include_uppercase | boolean | 是否包含大写字母 |
| exclude_similar   | boolean | 是否排除相似字符 |
| exclude_ambiguous | boolean | 是否排除模糊字符 |

#### 数据对象 [character_sets]

| 字段名    | 类型   | 说明               |
| --------- | ------ | ------------------ |
| lowercase | string | 小写字母字符集     |
| uppercase | string | 大写字母字符集     |
| numbers   | string | 数字字符集         |
| symbols   | string | 特殊符号字符集     |
| used_sets | array  | 已使用的字符集列表 |

#### 数据对象 [generation_info]

| 字段名        | 类型   | 说明     |
| ------------- | ------ | -------- |
| entropy       | float  | 熵值     |
| strength      | string | 强度等级 |
| time_to_crack | string | 破解时间 |

## 返回示例

::: code-group

```json [成功 200]
{
  "code": 200,
  "msg": "获取成功。",
  "data": {
    "password": "Bm8PZQMS3mwWw6Gp",
    "length": 16,
    "config": {
      "include_numbers": true,
      "include_symbols": false,
      "include_lowercase": true,
      "include_uppercase": true,
      "exclude_similar": true,
      "exclude_ambiguous": true
    },
    "character_sets": {
      "lowercase": "abcdefghjkmnpqrstuvwxyz",
      "uppercase": "ABCDEFGHIJKMNPQRSTUVWXYZ",
      "numbers": "23456789",
      "symbols": "",
      "used_sets": ["lowercase", "uppercase", "numbers"]
    },
    "generation_info": {
      "entropy": 92.5,
      "strength": "极强",
      "time_to_crack": "数百万年"
    }
  }
}
```

```json [失败 500]
{
  "code": 500,
  "msg": "Internal Server Error",
  "data": null
}
```

:::
