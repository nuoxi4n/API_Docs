# 身份证归属地查询

> 可以获取当前身份证归属地地址(大致)、出生日期、性别、年龄，并且可以检验身份证是否有效。

## 接口地址

```url
https://api.nxvav.cn/api/idcard/
```

## 请求示例

[https://api.nxvav.cn/api/idcard/](https://api.nxvav.cn/api/idcard/)

[https://api.nxvav.cn/api/idcard/?id=110105200610319510](https://api.nxvav.cn/api/idcard/?id=110105200610319510)

::: code-group

```shell
curl "https://api.nxvav.cn/api/idcard/?id=110105200610319510"
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
   CURLOPT_URL => 'https://api.nxvav.cn/api/idcard/?id=110105200610319510',
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
| id | string | 是 | 输入需要查询的身份证号码 |

## 返回响应

| 返回参数 | 类型 | 说明 |
| - | - | - |
| code | integer | 状态码 |
| msg | string | 提示信息 |
| data.idCardNum | string | 查询的身份证号码 |
| data.birthday | string | 出生日期 |
| data.sex | string | 性别 |
| data.age | integer | 年龄 |
| data.address | string | 大致归属地 |

## 返回示例

::: code-group

```json [成功 200]
{
    "code": 200,
    "msg": "查询成功！",
    "data": {
        "idCardNum": "110105200610319510",
        "birthday": "2006-10-31",
        "sex": "男",
        "age": 18,
        "address": "北京市市辖区朝阳区朝外街道"
    }
}
```

```json [失败 400]
{
    "code": 400,
    "msg": "身份证号码长度必须为18位"
}
```

:::
