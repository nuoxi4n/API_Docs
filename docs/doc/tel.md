# 手机号归属地查询

> 手机号码归属地查询，提供最新的中国移动、中国电信、中国联通所有手机号码归属地

## 接口地址

```
https://api.nxvav.cn/api/tel/
```

## 请求示例

[https://api.nxvav.cn/api/tel/?tel=18888888888](https://api.nxvav.cn/api/tel/?tel=18888888888)

[https://api.nxvav.cn/api/tel/?tel=15888888888](https://api.nxvav.cn/api/tel/?tel=15888888888)

::: code-group

```shell
curl "https://api.nxvav.cn/api/tel/?tel=18888888888"
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
   CURLOPT_URL => 'https://api.nxvav.cn/api/tel/?tel=18888888888',
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
| tel | string | 是 | 11位手机号码 |

## 返回响应

| 返回参数 | 类型 | 说明 |
| - | - | - |
| code | string | 状态码 |
| tel | string | 手机号码 |
| local | string | 归属地 |
| numberRange | string | 号码段 |
| cardType | string | 卡类型 |
| operator | string | 运营商 |
| internalSimCard | string | 内置卡 |
| gsmStandard | string | 通信标准 |

## 返回示例

::: code-group

```json [成功 200]
{
    "code": 200,
    "tel": "18888888888",
    "local": "北京市",
    "numberRange": "1888888",
    "cardType": "北京移动TD-SCDMA卡 (3G)",
    "operator": "中国移动",
    "internalSimCard": "USIM手机卡",
    "gsmStandard": "TD-SCDMA (时分同步码分多址)"
}
```

```json [失败 201]
{
    "code": 201,
    "msg": "不是正确的手机号"
}
```

:::