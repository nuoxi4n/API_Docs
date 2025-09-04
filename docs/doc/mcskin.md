# MC正版皮肤披风获取

> 可以获取到正版MC用户名的皮肤详情

## 接口地址

```url
https://api.nxvav.cn/api/mcskin/
```

## 请求示例

[https://api.nxvav.cn/api/mcskin/?id=nuoxian](https://api.nxvav.cn/api/mcskin/?id=nuoxian)

[https://api.nxvav.cn/api/mcskin/?uuid=91cb793afa4a4684973fe7955e679628](https://api.nxvav.cn/api/mcskin/?uuid=91cb793afa4a4684973fe7955e679628)

[https://api.nxvav.cn/api/mcskin/?id=nuoxian&type=skin_url](https://api.nxvav.cn/api/mcskin/?id=nuoxian&type=skin_url)

[https://api.nxvav.cn/api/mcskin/?uuid=5f820c3958834392b1743125ac05e38c&type=skin_cloak](https://api.nxvav.cn/api/mcskin/?uuid=5f820c3958834392b1743125ac05e38c&type=skin_cloak)

::: code-group

```shell
curl "https://api.nxvav.cn/api/mcskin/?id=nuoxian"
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
   CURLOPT_URL => 'https://api.nxvav.cn/api/mcskin/?id=nuoxian',
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
| id/uuid | string | 是 | 正版MC用户名/正版MC玩家的UUID，优先级id > uuid |
| type | string | 否 | 输出类型，可选值`skin_url`，`skin_cloak` |

## 返回响应

| 返回参数 | 类型 | 说明 |
| - | - | - |
| code | string | 状态码 |
| name | string | 玩家昵称 |
| uuid | string | 玩家UUID |
| properties | string | 玩家纹理属性 |
| Yggdrasil | string | 玩家Yggdrasil私钥签名 |
| skin_ | string | 皮肤数据 |
| skin_.skin_timestamp | string | 调用纹理数据的时间 |
| skin_.skin_url | string | 玩家自定义皮肤，没有为null |
| skin_.skin_cloak | string | 玩家披风，没有或没装备为null |
| skin_.skin_model | string | 玩家皮肤模型，null为男，slim为女 |

## 返回示例

::: code-group

```json [成功 200]
{
    "code": 200,
    "name": "nuoxian",
    "uuid": "91cb793afa4a4684973fe7955e679628",
    "properties": "textures",
    "Yggdrasil": "ea0yIfRjth+io2EvnPDL2BnkZUT8c11gQavO4G6pcnsc13M159zxfJ7dVZlRqNsn/Q77bAgPTVRDKt/gZ2sKRs4Pq4WEm+AQLd0nRNF27upRjDV3Obd29zyVMVdYnFkmfojEin3hkF/O5W0rU+eIHibOQkD9/xWbL2b1xHGbbk8NoxyXM6ZJnVV/fWYFzdM5dob72DBvRgMnKPNKSsIY81lqFo0GLQn4Lf1C626cU8VjpPBHlfRHgwzifgqrpxFXLdqIKdo2ihCChs6fBRArmA+R9Uz+xQ8uhlPgLl4scPG5S6sbuFXKsbnIasDf/kY1koKRTtHBa7lWkKAEDDbWmfXQ5Dte9xN2gO7foae6/wNrLgyxtGavK/2JQ1B4+eX5h7yMHTeiSlvW8LNzKWiqLEgP+4+SBPAFZvJCFUg2idueQ+SLeKpTLMF34PhHpUCf7tSzYiMxkFD+zviWQPTnNQF+M3TQLZYYhDMMLlt29jR2IkaYqeOUuG+j69aI5LbJpFsVBhM3GAWhb/HDPmbigFT9ifqd60gZmrW4VJNKYb2mYFVJWwtgEXbaNSUQW1wcuodMrvP5rtskJQheLTb97BGCpdxYV0uz+cf0A7vlkZuL423XP7Jd+sobExOkdMBSPCGMX70C5dKvTYiEHFovnK4ouiqu+MdLozWaDPAswy4=",
    "skin_": {
        "skin_timestamp": 1663251309055,
        "skin_url": "http://textures.minecraft.net/texture/558a3edc9adab15dfe7ac6124b0177abdb4fa856e926c2ec6d5d9b55210849ec",
        "skin_cloak": null,
        "skin_model": null
    }
}
```

```json [失败 400]
{
    "code": 400,
    "msg": "查询失败"
}
```

:::
