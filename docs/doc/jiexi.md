# 热门视频解析

> 支持解析哔哩哔哩、抖音、快手、小红书、西瓜视频、TikTok、微视、微博、京东、YouTube、好看视频等多个主流视频平台的视频。

## 接口地址

```
https://api.nxvav.cn/api/jiexi/
```

## 请求示例

[https://api.nxvav.cn/api/jiexi/?url=https://www.douyin.com/video/6682652170002730251](https://api.nxvav.cn/api/jiexi/?url=https://www.douyin.com/video/6682652170002730251)

::: code-group

```shell
curl https://api.nxvav.cn/api/jiexi -X POST -d 'url=https://www.douyin.com/video/6682652170002730251'
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
   CURLOPT_URL => 'https://api.nxvav.cn/api/jiexi/?url=https://www.douyin.com/video/6682652170002730251',
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

## 返回参数

| 返回参数 | 类型 | 说明 |
| - | - | - |
| code | string | 状态码 |
| msg | string | 返回信息 |
| data | string | 视频数据 |
| data > author | string | 作者名字 |
| data > uid | string | 作者id |
| data > avatar | string | 作者头像 |
| data > like | string | 视频点赞数量 |
| data > time | string | 发布时间(时间戳) |
| data > title | string | 视频标题 |
| data > cover | string | 视频封面 |
| data > url | string | 视频直链地址 |
| data > music | string | 音乐信息 |
| data > music > author | string | 音乐作者 |
| data > music > avatar | string | 音乐封面 |

## 返回示例

::: code-group

```json [成功 200]
{
    "code": 200,
    "msg": "解析成功",
    "data": {
        "author": "人民日报",
        "uid": "rmrbxmt",
        "avatar": "https://p26.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_21b4383e542b8991bcd33d33eeda7d8d.jpeg?from=327834062",
        "like": 13101165,
        "time": 1555982844,
        "title": "人民海军生日快乐！重温2009国庆阅兵海军方队的风采。期待今天的海上阅兵！",
        "cover": "https://p3-sign.douyinpic.com/179d10014283e5888d5c7~tplv-dy-resize-walign-adapt-aq:720:q75.webp?x-expires=1732446000&x-signature=3tnyVWeOdbqyefiUpAihXIZlm9E%3D&from=327834062&s=PackSourceEnum_DOUYIN_REFLOW&se=false&sc=cover&biz_tag=aweme_video&l=20241110191548C144116C1F8758FD053F",
        "url": "https://aweme.snssdk.com/aweme/v1/play/?video_id=v0200ff80000biv6jt2gd9fj4om8m8ag&ratio=720p&line=0",
        "music": {
            "author": "人民日报",
            "avatar": "https://p3.douyinpic.com/aweme/1080x1080/aweme-avatar/tos-cn-avt-0015_21b4383e542b8991bcd33d33eeda7d8d.jpeg?from=327834062"
        }
    }
}
```

```json [失败 201]
{
    "code": 201,
    "msg": "解析失败",
}
```

:::