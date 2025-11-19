---
api: bilivideo
---

# 哔哩哔哩视频解析

> 支持 B 站、bilibili 全平台视频解析，一键提取高清视频，支持多种清晰度选择。

## 接口地址

```http-vue
https://api.nxvav.cn/api/{{$frontmatter.api}}/
```

## 请求示例

::: code-group

<!--@include: ./example/code.md-->

:::

## 请求参数

| 参数名  | 类型   | 必填 | 说明                                                   |
| ------- | ------ | ---- | ------------------------------------------------------ |
| av / bv | string | 是   | B 站视频 av/bv 号                                      |
| ep      | string | 否   | 剧集编号,一般为`ep604279`                              |
| p       | string | 否   | 视频集数，默认为`1`                                    |
| q       | string | 否   | 视频清晰度，可选值`16`，`32`，`64`，`80`，默认为`32`   |
| type    | string | 否   | 视频类型，可选值`video`，`bangumi`，默认为`video`      |
| format  | string | 否   | 视频格式，可选值`flv`，`dash`，`mp4`，默认为`flv`      |
| otype   | string | 否   | 输出格式，可选值`json`，`url`，`dplayer`，默认为`json` |

## 返回响应

| 字段名         | 类型    | 说明             |
| -------------- | ------- | ---------------- |
| code           | integer | 状态码           |
| quality        | integer | 视频清晰度       |
| accept_quality | array   | 可获取的视频质量 |
| url            | string  | 视频直链         |

## 返回示例

::: code-group

```json [成功 200]
{
  "code": 0,
  "quality": 16,
  "accept_quality": [16],
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
