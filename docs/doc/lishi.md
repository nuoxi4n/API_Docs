# 历史上的今天

> 史上的今天可查询历史上国内外的今天3月26日发生了什么大事要事，从古代到近代、现代、当代的一些人和物、国家、科学、政治、军事、文化、艺术、人文等相关的大小事。

## 接口地址

```url
https://api.nxvav.cn/api/lishi/
```

## 请求示例

[https://api.nxvav.cn/api/lishi/](https://api.nxvav.cn/api/lishi/)

[https://api.nxvav.cn/api/lishi/?format=json](https://api.nxvav.cn/api/lishi/?format=json)

[https://api.nxvav.cn/api/lishi/?format=js](https://api.nxvav.cn/api/lishi/?format=js)

::: code-group

```shell
curl "https://api.nxvav.cn/api/lishi"
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
   CURLOPT_URL => 'https://api.nxvav.cn/api/lishi/?format=json',
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
| format | string | 否 | 输出格式，可选值`json`，`js` |

## 返回响应

| 返回参数 | 类型 | 说明 |
| - | - | - |
| code | integer | 状态码 |
| day | string | 今天时间 |
| content | string | 发生事件 |

## 返回示例

::: code-group

```json [成功 200]
{
    "code": 200,
    "day": "2021年11月24日",
    "content": [
        "清朝军队攻陷广州展开广州大屠杀",
        "瑞典国王卡尔十一世出生",
        "美国第12任总统扎卡里泰勒出生",
        "俄罗斯共产主义革命家尤里马尔托夫出生",
        "德国军事家曼施坦因出生",
        "中国革命家政治家刘少奇出生",
        "抗日名将吉鸿昌逝世",
        "前日本首相西园寺公望逝世",
        "保加利亚一架客机在布拉迪斯拉发坠毁",
        "中国南方航空3943班机在广西阳朔县坠毁",
        "美军撤离苏比克海军基地",
        "中国物理学家周培源逝世",
        "十字航空3597号班机发生空难",
        "香港填词人作家黄沾逝世",
        "泰国前总理沙马顺达卫逝世"
    ]
}
```

```json [失败 201]
{
    "code": 201,
    "msg": "错误"
}
```

:::
