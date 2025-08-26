# 哔哩哔哩视频解析

> 支持B站、bilibili全平台视频解析，一键提取高清视频，支持多种清晰度选择。

## 接口地址

```
https://api.nxvav.cn/api/bilivideo/
```

## 请求示例

[https://api.nxvav.cn/api/bilivideo/?av=430366930&p=1&q=32&otype=json](https://api.nxvav.cn/api/bilivideo/?av=430366930&p=1&q=32&otype=json)

[https://api.nxvav.cn/api/bilivideo/?av=430366930&p=1&q=32&otype=dplayer](https://api.nxvav.cn/api/bilivideo/?av=430366930&p=1&q=32&otype=dplayer)

::: code-group

```shell
curl https://api.nxvav.cn/api/bilivideo -X POST -d 'av=430366930&p=1&q=32&otype=json'
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
   CURLOPT_URL => 'https://api.nxvav.cn/api/bilivideo/?av=430366930&p=1&q=32&otype=json',
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
| av / bv | string | 是 | B站视频av/bv号 |
| ep | string | 否 | 剧集编号,一般为`ep604279` |
| p | string | 否 | 视频集数，默认为`1` |
| q | string | 否 | 视频清晰度，可选值`16`，`32`，`64`，`80`，默认为`32` |
| type | string | 否 | 视频类型，可选值`video`，`bangumi`，默认为`video` |
| format | string | 否 | 视频格式，可选值`flv`，`dash`，`mp4`，默认为`flv` |
| otype | string | 否 | 输出格式，可选值`json`，`url`，`dplayer`，默认为`json` |

## 返回响应

| 返回参数 | 类型 | 说明 |
| - | - | - |
| code | string | 状态码 |
| quality | string | 视频清晰度 |
| accept_quality | string | 可获取的视频质量 |
| url | string | 视频直链 |

## 返回示例

::: code-group

```json [成功 200]
{
    "code": 0,
    "quality": 16,
    "accept_quality": [
        16
    ],
    "url": "https://upos-sz-mirrorali.bilivideo.com/upgcxcode/13/25/826612513/826612513-1-16.mp4?e=ig8euxZM2rNcNbRVhwdVhwdlhWdVhwdVhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1731678993&gen=playurlv2&os=alibv&oi=2032682237&trid=ffeeeef399d94116b55ae22496c0c937u&mid=0&platform=pc&og=cos&upsig=fe6ce5f79f5342c9ff4068294e64cc93&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=0,3&buvid=&build=0&f=u_0_0&agrr=0&bw=57067&logo=80000000"
}
```

```json [失败 -400]
{
    "code": -400,
    "message": "请求错误",
    "ttl": 1
}
```
:::