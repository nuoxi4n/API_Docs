---
api: ip
---

# IP位置查询

> 可以获取本机IP地址，输入IP还可以查询对应的归属地信息，地理位置信息可以精确到运营商和国家、省市级别。

## 接口地址

```http-vue
https://api.nxvav.cn/api/{{$frontmatter.api}}/
```

## 请求示例

::: code-group

<!--@include: ./example/code.md-->

:::

## 请求参数

| 参数名 | 类型 | 必填 | 说明 |
| - | - | - | - |
| ip | string | 否 | 输入需要查询的IP，不填默认获取当前IP |
| format | string | 否 | 输出格式，可选值`js`，`json`，`jsonp`，`text`，`xml`，不填默认`json` |

## 返回响应

| 字段名 | 类型 | 说明 |
| - | - | - |
| code | integer | 状态码 |
| data | string | ip数据 |
| data > ip | string | ip地址 |
| data > ipVersion | string | ip协议版本 |
| data > countryName | string | 国家 |
| data > regionName | string | 省份 |
| data > cityName | string | 城市 |
| data > districtName | string | 地区 |
| data > internetServiceProvider | string | 运营商 |

## 返回示例

::: code-group

```json [成功 200]
{
    "code": 200,
    "data": {
        "ip": "114.114.114.114",
        "ipVersion": "ipv4",
        "countryName": "中国",
        "regionName": "江苏",
        "cityName": "南京",
        "districtName": null,
        "internetServiceProvider": "南京信风网络科技有限公司GreatbitDNS服务器"
    }
}
```

```json [失败 201]
{
    "code": 201,
    "msg": "输入的IP地址格式不正确"
}
```

:::
