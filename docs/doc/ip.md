# IP位置查询

> 可以获取本机IP地址，输入IP还可以查询对应的归属地信息，地理位置信息可以精确到运营商和国家、省市级别。

## 接口地址

```
https://api.nxvav.cn/api/ip/
```

IP地址位置数据由 <a href="https://www.cz88.net" target="_blank">纯真CZ88</a> 提供支持

## 请求示例

[https://api.nxvav.cn/api/ip/](https://api.nxvav.cn/api/ip/)

[https://api.nxvav.cn/api/ip/?ip=114.114.114.114](https://api.nxvav.cn/api/ip/?ip=114.114.114.114)

[https://api.nxvav.cn/api/ip/?ip=114.114.114.114&format=text](https://api.nxvav.cn/api/ip/?ip=114.114.114.114&format=text)

::: code-group

```shell
curl "https://api.nxvav.cn/api/ip/?ip=114.114.114.114&format=json"
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
   CURLOPT_URL => 'https://api.nxvav.cn/api/ip/?ip=114.114.114.114&format=json',
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
| ip | string | 否 | 输入需要查询的IP，不填默认获取当前IP |
| format | string | 否 | 输出格式，可选值`js`，`json`，`jsonp`，`text`，`xml`，不填默认`json` |

## 返回响应

| 返回参数 | 类型 | 说明 |
| - | - | - |
| code | string | 状态码 |
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