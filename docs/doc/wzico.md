# 网站ico图标获取

> test

## 接口地址

```
https://api.nxvav.cn/api/wzico/
```

## 请求示例

[https://api.nxvav.cn/api/wzico/?url=www.baidu.com](https://api.nxvav.cn/api/wzico/?url=www.baidu.com)

::: code-group

```shell
curl https://api.nxvav.cn/api/wzico -X POST -d 'url=www.baidu.com'
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
   CURLOPT_URL => 'https://api.nxvav.cn/api/wzico/?url=www.baidu.com',
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
| url | string | 是 | 网站链接，不加http(s) |

## 返回参数

| 返回参数 | 类型 | 说明 |
| - | - | - |
| image | image/png | 返回的图片，图片格式为PNG |

## 返回示例

::: code-group

```text [成功 200]
Content-Type: image/png

<img src="https://api.nxvav.cn/api/wzico/?url=www.baidu.com" />
```

```json [失败 201]
{
    "code": 201,
    "msg": "未获取到网站图标"
}
```

:::