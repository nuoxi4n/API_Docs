# QQ头像获取

> 获取QQ用户的头像

## 接口地址

```http
https://api.nxvav.cn/api/qqimg/
```

## 请求示例

[https://api.nxvav.cn/api/qqimg/?qq=123456](https://api.nxvav.cn/api/qqimg/?qq=123456)

::: code-group

```shell
curl "https://api.nxvav.cn/api/qqimg/?qq=123456"
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
   CURLOPT_URL => 'https://api.nxvav.cn/api/qqimg/?qq=123456',
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
| qq | integer | 是 | 需要获取的QQ头像的QQ号码 |
| size | integer | 否 | 需要获取的QQ头像的大小，默认为100。可选值：40,100,140,640 |
| type | string | 否 | 需要获取的QQ头像的类型，默认为json。可选值：download,redirect,json |

## 返回响应

| 返回参数 | 类型 | 说明 |
| - | - | - |
| code | integer | 状态码 |
| msg | string | 状态信息 |
| data.qq | string | 查询QQ号 |
| data.size | integer | 头像大小 |
| data.imgurl | string | 头像链接 |

## 返回示例

::: code-group

```json [成功 200]
{
  "code": 200,
  "msg": "成功获取头像信息",
  "data": {
    "qq": "123456",
    "size": 640,
    "imgurl": "https://q1.qlogo.cn/g?b=qq&nk=123456&s=640"
  }
}
```

```text [失败 400]
{
    "code": 400,
    "msg": "参数不能为空"
}
```

:::
