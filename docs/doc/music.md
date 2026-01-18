---
api: music
---

# 音乐解析

> 可以解析QQ音乐、网易云音乐、酷狗、百度、酷我等音乐

## 接口地址

```http-vue
https://api.nxvav.cn/api/{{$frontmatter.api}}/
```

## 请求示例

::: code-group

<!--@include: ./example/code.md-->

:::

## 请求参数

| 参数名 | 类型   | 必填 | 默认值  | 枚举值                                        | 说明                                    |
| ------ | ------ | ---- | ------- | --------------------------------------------- | --------------------------------------- |
| server | string | 是   | netease | netease,tencent,kugou,baidu,kuwo              | 音乐平台                                |
| type   | string | 是   | search  | search,song,album,artist,playlist,lrc,url,pic | 操作类型                                |
| id     | string | 是   | Hello   | -                                             | 资源 ID                                 |
| auth   | string | 否   | -       | -                                             | 认证令牌(仅 `lrc`/`url`/`pic` 类型需要) |

#### 操作类型 [type]

| 字段名   | 类型   | 鉴权 | 说明         |
| -------- | ------ | ---- | ------------ |
| search   | string | 否   | 搜索歌曲     |
| song     | string | 否   | 获取歌曲详情 |
| album    | string | 否   | 获取专辑     |
| artist   | string | 否   | 获取歌手     |
| playlist | string | 否   | 获取歌单     |
| lrc      | string | 是   | 获取歌词     |
| url      | string | 是   | 获取播放链接 |
| pic      | string | 是   | 获取封面图片 |

## 返回响应

| 字段名 | 类型   | 说明     |
| ------ | ------ | -------- |
| name   | string | 歌曲名   |
| artist | string | 歌曲作者 |
| pic    | string | 歌曲封面 |
| lrc    | string | 歌曲歌词 |

## 鉴权机制

敏感操作(`lrc`、`url`、`pic`)需要提供 HMAC-SHA1 签名的 token:

```js
// Token 计算公式
token = HMAC - SHA1(TOKEN, server + type + id);
```

示例(使用 Node.js):

```js
const crypto = require("crypto");

function generateToken(server, type, id, secret = "token") {
  const message = `${server}${type}${id}`;
  return crypto.createHmac("sha1", secret).update(message).digest("hex");
}

const token = generateToken("netease", "url", "123456");
```

## 返回示例

::: code-group

```json [成功 200]
[
  {
    "title": "歌曲名称",
    "author": "艺术家1 / 艺术家2",
    "url": "https://api.nxvav.cn/api/music/?server=netease&type=url&id=xxx&auth=xxx",
    "pic": "https://api.nxvav.cn/api/music/?server=netease&type=pic&id=xxx&auth=xxx",
    "lrc": "https://api.nxvav.cn/api/music/?server=netease&type=lrc&id=xxx&auth=xxx"
  }
]
```

```json [失败 400]
{
  "code": 400,
  "message": "参数 text 不能为空"
}
```

:::
