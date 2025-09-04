# 城市天气预报获取

> 获取指定城市当日天气信息，来源于中国气象局官方数据。

## 接口地址

```url
https://api.nxvav.cn/api/weather/
```

## 请求示例

[https://api.nxvav.cn/api/weather/?city=北京](https://api.nxvav.cn/api/weather/?city=北京)

[https://api.nxvav.cn/api/weather/?city=香港](https://api.nxvav.cn/api/weather/?city=香港)

::: code-group

```shell
curl "https://api.nxvav.cn/api/weather/?city=北京"
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
   CURLOPT_URL => 'https://api.nxvav.cn/api/weather/?city=北京',
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
| city | string | 是 | 城市名字，可使用拼音 |

## 返回响应

| 返回参数 | 类型 | 说明 |
| - | - | - |
| code | integer | 状态码 |
| location.name | string | 城市 |
| location.country | string | 国家 |
| location.path | string | 位置 |
| now.text | string | 天气现象文字 |
| now.code | string | 天气现象代码 |
| now.temperature | string | 温度，单位为c摄氏度 |
| last_update | string | 最后更新时间，格式为ISO 8601 |

## 返回示例

::: code-group

```json [成功 200]
{
    "code": 200,
    "location": {
        "name": "北京",
        "country": "CN",
        "path": "北京,北京,中国"
    },
    "now": {
        "text": "晴",
        "code": "0",
        "temperature": "13"
    },
    "last_update": "2024-11-16T12:27:40+08:00"
}
```

```json [失败 400]
{
    "code": 400,
    "msg": "参数无效"
}
```

:::
