# 一言

> test

## 接口地址

```
https://api.nxvav.cn/api/yiyan/
```

## 请求示例

[https://api.nxvav.cn/api/yiyan/?charset=utf8](https://api.nxvav.cn/api/yiyan/?charset=utf8)

[https://api.nxvav.cn/api/yiyan/?encode=js&charset=gbk](https://api.nxvav.cn/api/yiyan/?encode=js&charset=gbk)

<!-- tabs:start -->

#### **Shell**

```shell
curl https://api.nxvav.cn/api/yiyan -X POST -d 'charset=utf8'
```

#### **HTTP**

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
   CURLOPT_URL => 'https://api.nxvav.cn/api/yiyan/?charset=utf8&encode=json',
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

<!-- tabs:end -->

## 请求参数

| 参数名 | 类型 | 必填 | 说明 |
| - | - | - | - |
| charset | string | 否 | 返回编码格式，可选值`utf8`，`gbk`不填默认返回`utf8` |
| encode | string | 否 | 返回数据格式，可选值`json`，`js`，`js1`，`text`不填默认返回`json` |

## 返回参数

| 返回参数 | 类型 | 说明 |
| - | - | - |
| id | string | 仙言id |
| yiyan | string | 仙言内容 |
| createTime | string | 仙言发布时间 |
| nick | string | 仙言作者 |

## 返回示例

<!-- tabs:start -->

#### **成功(200)**

```json
{
    "id": 101177,
    "yiyan": "你总盼着遇贵人，贵人不曾记得你，因为贵人多忘事。",
    "createTime": 1612054332000,
    "nick": "包子再咬两个没关系阿"
}
```

#### **失败(201)**

```json
{
    "code": 201,
    "msg": "无法获取 data 内容"
}
```

<!-- tabs:end -->