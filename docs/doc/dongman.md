# 随机动漫图

> 随机二次元图片API，随机动漫壁纸，每天刷一刷，每次不一样。

## 接口地址

```
https://api.nxvav.cn/api/dongman/
```

## 请求示例

[https://api.nxvav.cn/api/dongman/](https://api.nxvav.cn/api/dongman/)

[https://api.nxvav.cn/api/dongman/?encode=json](https://api.nxvav.cn/api/dongman/?encode=json)

[https://api.nxvav.cn/api/dongman/?encode=js](https://api.nxvav.cn/api/dongman/?encode=js)


::: code-group

```shell
curl https://api.nxvav.cn/api/dongman -X POST -d 'encode=json'
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
   CURLOPT_URL => 'https://api.nxvav.cn/api/dongman/?encode=json',
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
| encode | string | 否 | 返回数据格式，可选值`json`，`js`，`text`，不填默认返回`image/png` |

## 返回参数

| 返回参数 | 类型 | 说明 |
| - | - | - |
| code | string | 状态码 |
| imgurl | string | 图片链接 |

## 返回示例

::: code-group

```json [成功 200]
{
    "code": 200,
    "imgurl": "https://cdn.cdnjson.com/pic.html?url=https://tva3.sinaimg.cn/large/a15b4afegy1fmvj54szzxj21hc0u01ku"
}
```

```json [失败 201]
{
    "code": 201,
    "imgurl": "Failed to read the file."
}
```

:::