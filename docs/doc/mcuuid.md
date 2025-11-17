# MC正版用户UUID获取

> 可以获取到正版MC用户名的UUID

## 接口地址

```http
https://api.nxvav.cn/api/mcuuid/
```

## 请求示例

[https://api.nxvav.cn/api/mcuuid/?id=nuoxian](https://api.nxvav.cn/api/mcuuid/?id=nuoxian)

::: code-group

```shell
curl "https://api.nxvav.cn/api/mcuuid/?id=nuoxian"
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
   CURLOPT_URL => 'https://api.nxvav.cn/api/mcuuid/?id=nuoxian',
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
| id | string | 是 | 正版MC用户名 |

## 返回响应

| 返回参数 | 类型 | 说明 |
| - | - | - |
| code | integer | 状态码 |
| name | string | 玩家昵称 |
| uuid | string | 玩家UUID |

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
