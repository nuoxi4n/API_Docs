# 必应每日美图

> 超高质量的必应壁纸与必应美图，你可以获取到每日精彩的官方必应壁纸

## 接口地址

```
https://api.nxvav.cn/api/bing/
```

## 请求示例

[https://api.nxvav.cn/api/bing/](https://api.nxvav.cn/api/bing/)

[https://api.nxvav.cn/api/bing/?encode=json](https://api.nxvav.cn/api/bing/?encode=json)

::: code-group

```shell
curl "https://api.nxvav.cn/api/bing"
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
   CURLOPT_URL => 'https://api.nxvav.cn/api/bing/?encode=json',
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
| encode | string | 否 | 返回数据格式，可选值`json`，不填默认返回`image/png` |
| type | string | 否 | 返回数据类型，可选值`auto`，`pc`、`mobile`。不填默认`pc` |

## 返回响应

| 返回参数 | 类型 | 说明 |
| - | - | - |
| code | string | 状态码 |
| startdate | string | 壁纸模糊开始日期 |
| fullstartdate | string | 壁纸具体开始日期 |
| enddate | string | 壁纸结束日期 |
| title | string | 壁纸标题 |
| url | string | 壁纸直链 |
| copyright | string | 壁纸版权 |

## 返回示例

::: code-group

```json [成功 200]
{
    "code": 200,
    "startdate": "20220924",
    "fullstartdate": "202209241600",
    "enddate": "20220925",
    "title": "匆匆而逝的河流",
    "url": "https://cn.bing.com/th?id=OHR.AmazonMangroves_ZH-CN2154443859_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
    "copyright": "亚马逊河鸟瞰图，巴西 (© Curioso.Photography/Shutterstock)"
}
```

```json [失败 201]
{
    "code": 201,
    "msg": "参数错误"
}
```

:::