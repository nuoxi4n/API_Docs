# 音乐解析

> 可以解析下载QQ音乐、网易云音乐、酷狗、酷我等收费音乐。

## 接口地址

```http
https://api.nxvav.cn/api/music/
```

## 请求示例

[https://api.nxvav.cn/api/music/?type=url&id=1436502055](https://api.nxvav.cn/api/music/?type=url&id=1436502055)

[https://api.nxvav.cn/api/music/?type=lrc&id=1495881305](https://api.nxvav.cn/api/music/?type=lrc&id=1495881305)

[https://api.nxvav.cn/api/music/?type=playlist&id=5420609323](https://api.nxvav.cn/api/music/?type=playlist&id=5420609323)

::: code-group

```shell
curl "https://api.nxvav.cn/api/music/?type=url&id=1436502055"
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
   CURLOPT_URL => 'https://api.nxvav.cn/api/music/?type=playlist&id=5420609323',
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
| id | integer | 是 | 歌曲id |
| server | string | 否 | 数据源，可选值`netease`，`tencent`，不填默认返回`netease` |
| type | string | 是 | 返回类型，可选值`name`(歌曲名)，`artist`(歌手名)，`url`(音乐直链)，`pic`(歌曲封面)，`lrc`(歌曲歌词)，`single`(歌曲信息)，`playlist`(歌单信息) |

## 返回响应

| 返回参数 | 类型 | 说明 |
| - | - | - |
| name | string | 歌曲名 |
| artist | string | 歌曲作者 |
| pic | string | 歌曲封面 |
| lrc | string | 歌曲歌词 |

## 返回示例

::: code-group

```text [成功 200]
Content-Type: audio/mpeg

<audio controls="controls" height="100" width="100">
    <source src="https://api.nxvav.cn/api/music/?type=url&id=1436502055" type="audio/mpeg">
</audio>
```

:::
