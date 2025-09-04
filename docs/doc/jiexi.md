# 热门视频解析

> 支持解析抖音、皮皮虾、微博等多个主流视频平台的视频。

## 接口地址

```url
https://api.nxvav.cn/api/jiexi/
```

## 请求示例

[https://api.nxvav.cn/api/jiexi/?url=https://v.douyin.com/3DoUicM6y9k/](https://api.nxvav.cn/api/jiexi/?url=https://v.douyin.com/3DoUicM6y9k/)

::: code-group

```shell
curl "https://api.nxvav.cn/api/jiexi/?url=https://v.douyin.com/3DoUicM6y9k/"
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
   CURLOPT_URL => 'https://api.nxvav.cn/api/jiexi/?url=https://v.douyin.com/3DoUicM6y9k/',
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
| url | string | 是 | 视频平台分享的链接地址 |

## 返回响应

| 返回参数 | 类型 | 说明 |
| - | - | - |
| code | integer | 状态码 |
| author | string | 视频作者 |
| avatar | string | 作者头像 |
| like | integer | 视频点赞量 |
| time | integer | 视频发布时间 |
| title | string | 视频标题 |
| cover | string | 视频封面 |
| url | string | 视频链接 |
| sex | string | 作者性别 |
| age | string | 作者年龄 |
| city | string | 所在城市 |
| uid | string | 作者ID |

## 返回示例

::: code-group

```json [成功 200]
{
  "code": 200,
  "msg": "success",
  "data": {
    "author": "2.",
    "uid": "74551504048",
    "avatar": "https://p3.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_oIrRECkK6DAH5aApAuFzA9nABAZgeCEQIWfnCE.jpeg?from=327834062",
    "like": 174872,
    "time": 1754791200,
    "title": "“小子 你现在很渴望我的力量吧”\n#特摄剧 #欧布奥特曼 #贝利亚奥特曼",
    "cover": "https://p26-sign.douyinpic.com/tos-cn-i-0813/o8ER538mAAAoA7qBAIFmLfEDef8vh5vEBBEEuQ~tplv-dy-resize-walign-adapt-aq:720:q75.webp?lk3s=138a59ce&x-expires=1757192400&x-signature=RYoKk6w0VsNs4bg8HPnJszf1wEs%3D&from=327834062&s=PackSourceEnum_DOUYIN_REFLOW&se=false&sc=cover&biz_tag=aweme_video&l=20250824053252573E6F9BAF1285A31DFC",
    "url": "http://www.iesdouyin.com/aweme/v1/play/?video_id=v0200fg10000d2bnt8nog65vq4k5a7pg&ratio=1080p&line=0",
    "music": {
      "author": "2.",
      "avatar": "https://p11.douyinpic.com/aweme/1080x1080/aweme-avatar/tos-cn-i-0813c001_oIrRECkK6DAH5aApAuFzA9nABAZgeCEQIWfnCE.jpeg?from=327834062"
    }
  }
}
```

```json [失败 400]
{
    "code": 400,
    "msg": "解析失败",
}
```

:::
