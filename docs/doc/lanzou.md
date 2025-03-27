# 蓝奏网盘直链解析

> 蓝奏云直链解析可以快速提取蓝奏云网盘直链，支持有密码的蓝奏云链接。

## 接口地址

```
https://api.nxvav.cn/api/lanzou/
```

## 请求示例

[https://api.nxvav.cn/api/lanzou/?url=https://wwi.lanzoui.com/i1nm7fp8z0d](https://api.nxvav.cn/api/lanzou/?url=https://wwi.lanzoui.com/i1nm7fp8z0d)

[https://api.nxvav.cn/api/lanzou/?url=https://wwi.lanzoui.com/i7ryube&pwd=2333](https://api.nxvav.cn/api/lanzou/?url=https://wwi.lanzoui.com/i7ryube&pwd=2333)

[https://api.nxvav.cn/api/lanzou/?url=https://wwi.lanzoui.com/i1nm7fp8z0d&type=down](https://api.nxvav.cn/api/lanzou/?url=https://wwi.lanzoui.com/i1nm7fp8z0d&type=down)

::: code-group

```shell
curl https://api.nxvav.cn/api/lanzou -X POST -d 'url=https://wwi.lanzoui.com/i1nm7fp8z0d'
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
   CURLOPT_URL => 'https://api.nxvav.cn/api/lanzou/?url=https://wwi.lanzoui.com/i1nm7fp8z0d',
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
| url | string | 是 | 蓝奏外链链接 |
| pwd | string | 否 | 蓝奏外链密码 |
| type | string | 否 | 下载类型，可选值`down` |

## 返回参数

| 返回参数 | 类型 | 说明 |
| - | - | - |
| code | string | 状态码 |
| msg | string | 状态信息 |
| name | string | 文件名 |
| filesize | string | 文件大小 |
| downUrl | string | 下载链接 |

## 返回示例

::: code-group

```json [成功 200]
{
    "code": 200,
    "msg": "解析成功",
    "name": "动漫初音鼠标指针.zip",
    "filesize": "23.4 K",
    "downUrl": "https://c1031.lanosso.com/112475552d2d5a10013a74576972a0ce/67382826/2020/08/17/b688f1a4c28a15cf7325f2aece24c92c.zip?fileName=%E5%8A%A8%E6%BC%AB%E5%88%9D%E9%9F%B3%E9%BC%A0%E6%A0%87%E6%8C%87%E9%92%88.zip"
}
```

```json [失败 400]
{
    "code": 400,
    "msg": "请输入分享密码"
}
```

:::