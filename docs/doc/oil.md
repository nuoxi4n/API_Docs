# 今日油价查询

> 提供最新的今日油价数据，包括全国各地的92号、95号、98号汽油和0号柴油的价格

## 接口地址

```
https://api.nxvav.cn/api/oil/
```

## 请求示例

[https://api.nxvav.cn/api/oil/?province=上海](https://api.nxvav.cn/api/oil/?province=上海)

::: code-group

```shell
curl "https://api.nxvav.cn/api/oil/?province=上海"
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
   CURLOPT_URL => 'https://api.nxvav.cn/api/oil/?province=上海',
   CURLOPT_RETURNTRANSFER => true,
   CURLOPT_ENCODING => '',
   CURLOPT_MAXREDIRS => 10,
   CURLOPT_TIMEOUT => 0,
   CURLOPT_FOLLOWLOCATION => true,
   CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
   CURLOPT_CUSTOMREQUEST => 'GET',
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
?>
```

:::

## 请求参数

| 参数名 | 类型 | 必填 | 说明 |
| - | - | - | - |
| province | string | 是 | 省份，合法值为：【安徽、北京、重庆、福建、甘肃、广东、广西、贵州、海南、河北、黑龙江、河南、湖北、湖南、江苏、江西、吉林、辽宁、内蒙古、宁夏、青海、陕西、上海、山东、山西、四川、天津、西藏、新疆、云南、浙江】 |

## 返回响应

| 返回参数 | 类型 | 说明 |
| - | - | - |
| code | string | 状态码 |
| msg | string | 返回信息 |
| data | string | 返回数据 |
| data > province | string | 查询省份 |
| data > oil_price_update_time | string | 更新数据时间 |
| data > t0 | string | 0号柴油油价 |
| data > t92 | string | 92号汽油油价 |
| data > t95 | string | 95号汽油油价 |
| data > t98 | string | 98号汽油油价 |

## 请求示例

::: code-group

```json [成功 200]
{
    "code": 200,
    "msg": "查询成功！",
    "data": {
        "province": "上海",
        "oil_price_update_time": "2024-12-6 16:30:01",
        "t0": "7.07",
        "t92": "7.40",
        "t95": "7.88",
        "t98": "9.38"
    }
}
```

```json [失败 -1]
{
    "code": -1,
    "msg": "查询失败"
}
```

:::