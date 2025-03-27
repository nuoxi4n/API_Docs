# 网站标题获取

> 获取网站标题

## 接口地址

```
https://api.nxvav.cn/api/webtitle/
```

## 请求示例

[https://api.nxvav.cn/api/webtitle/?url=www.baidu.com](https://api.nxvav.cn/api/webtitle/?url=www.baidu.com)

::: code-group

```shell
curl https://api.nxvav.cn/api/webtitle -X POST -d 'url=www.baidu.com'
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
   CURLOPT_URL => 'https://api.nxvav.cn/api/webtitle/?url=www.baidu.com',
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
| url | string | 是 | 网站域名，不带http(s) |

## 返回参数

| 返回参数 | 类型 | 说明 |
| - | - | - |
| code | string | 状态码 |
| data | string | 信息数据 |
| data > title | string | 网站标题 |
| data > description | string | 网站描述 |
| data > keywords | string | 网站标签 |

## 返回示例

::: code-group

```json [成功 200]
{
    "code": 200,
    "data": {
        "title": "诺仙の客栈",
        "description": "这里是诺仙の客栈，我在这里记录和分享我的点点滴滴！客官来看看啊~",
        "keywords": "诺仙の客栈,nuoxian,诺仙仙君,教程,技术"
    }
}
```

```json [失败 201]
{
    "code": 201,
    "msg": "获取失败"
}
```

:::