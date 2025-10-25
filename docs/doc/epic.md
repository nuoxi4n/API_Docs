# Epic免费喜加一

> 获取 Epic Games 每周免费游戏列表

## 接口地址

```url
https://api.nxvav.cn/api/epic/
```

## 请求示例

[https://api.nxvav.cn/api/epic/](https://api.nxvav.cn/api/epic/)

::: code-group

```shell
curl "https://api.nxvav.cn/api/epic"
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
   CURLOPT_URL => 'https://api.nxvav.cn/api/epic/',
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
| encoding | string | 否 | 返回数据的编码格式 |

## 返回响应

| 返回参数 | 类型 | 说明 |
| - | - | - |
| code | integer | 状态码 |
| message | string | 返回信息 |
| data | object | 返回数据 |
| - id | string | ID |
| - title | string | 游戏名称 |
| - cover | string | 游戏封面图 |
| - original_price | integer | 原价（数字，单位为人民币元） |
| - original_price_desc | string | 已格式化原价描述（带单位） |
| - description | string | 游戏描述 |
| - seller | string | 发行厂商/销售商 |
| - is_free_now | boolean | 当前是否免费 |
| - free_start | string | 免费开始时间字符串 |
| - free_start_at | integer | 免费开始时间戳（13 位） |
| - free_end | string | 免费结束时间字符串 |
| - free_end_at | integer | 免费结束时间戳（13 位） |
| - link | string | 游戏详情页 |

## 返回示例

::: code-group

```json [成功 200]
{
  "code": 200,
  "message": "获取成功。数据来自官方/权威源头，以确保稳定与实时。",
  "data": [
    {
      "id": "1f1bb7fd09a94d8f9d9219210ffacf95",
      "title": "Fear the Spotlight",
      "cover": "https://cdn1.epicgames.com/spt-assets/7440e6952704438cbb2e4f4dff02e00a/fear-the-spotlight-1ioq7.jpg",
      "original_price": 62,
      "original_price_desc": "¥62.00",
      "description": "《Fear the Spotlight》是一款氛围浓厚的第三人称恐怖冒险游戏，其中充满令人不安的谜团。与薇薇安和艾米在放学后潜入学校，设法在失控的通灵仪式中活下来、解开触控式谜题。千万注意，无论如何，不要置身于聚光灯之下……",
      "seller": "Blumhouse Games",
      "is_free_now": true,
      "free_start": "2025/10/23 23:00:00",
      "free_start_at": 1761231600000,
      "free_end": "2025/10/30 23:00:00",
      "free_end_at": 1761836400000,
      "link": "https://store.epicgames.com/store/zh-CN/p/fear-the-spotlight-97656f"
    },
    {
      "id": "fb722544c8314c45bf9a42c66b2a5a73",
      "title": "《Bendy and the Ink Machine》",
      "cover": "https://cdn1.epicgames.com/spt-assets/0b1283e5bfa64ad48f3862b79abc20b9/bendy-and-the-ink-machine-1e8cj.png",
      "original_price": 62,
      "original_price_desc": "¥62.00",
      "description": "《Bendy and the Ink Machine®》是一款第一人称解谜动作恐怖游戏，它将彻底粉碎你对卡通片的美好童年回忆。",
      "seller": "Joey Drew Studios Inc.",
      "is_free_now": false,
      "free_start": "2025/10/30 23:00:00",
      "free_start_at": 1761836400000,
      "free_end": "2025/11/07 00:00:00",
      "free_end_at": 1762444800000,
      "link": "https://store.epicgames.com/store/zh-CN/p/bendy-and-the-ink-machine-60cf5a"
    },
    {
      "id": "4f870cf44ac24a64a44225045d4aaa96",
      "title": "Five Nights at Freddy's: Into the Pit",
      "cover": "https://cdn1.epicgames.com/spt-assets/5c65df08b03a43eb8be026116ef8e979/five-nights-at-freddys-into-the-pit-1ng0s.png",
      "original_price": 62,
      "original_price_desc": "¥62.00",
      "description": "Survive five nights of terror in this chilling adventure game. Travel between time periods to solve puzzles, gather clues, and outrun the threat pursuing you. Move swiftly and stay hidden, and you may just survive. But be careful—it's not just your own life that’s on the line.",
      "seller": "Mega Cat Studios",
      "is_free_now": false,
      "free_start": "2025/10/30 23:00:00",
      "free_start_at": 1761836400000,
      "free_end": "2025/11/07 00:00:00",
      "free_end_at": 1762444800000,
      "link": "https://store.epicgames.com/store/zh-CN/p/five-nights-at-freddys-into-the-pit-99c563"
    }
  ]
}
```

```json [失败 201]
{
    "code": 201,
    "msg": "参数错误"
}
```

:::
