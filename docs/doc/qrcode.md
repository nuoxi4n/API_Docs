# 生成二维码

> test

## 接口地址

```
https://api.nxvav.cn/api/qrcode/
```

## 请求示例

[https://api.nxvav.cn/api/qrcode/?text=https://api.nxvav.cn/&size=100](https://api.nxvav.cn/api/qrcode/?text=https://api.nxvav.cn/&size=100)

[https://api.nxvav.cn/api/qrcode/?text=你现在访问的是nuoxian的公共API服务哦！](https://api.nxvav.cn/api/qrcode/?text=你现在访问的是nuoxian的公共API服务哦！)

::: code-group

```shell
curl https://api.nxvav.cn/api/qrcode -X POST -d 'text=https://api.nxvav.cn/'
```

```php
<?php

$curl = curl_init();

$url = 'https://api.nxvav.cn/api/qrcode/?text=https://api.nxvav.cn/&size=100';
$outputFilePath = 'qrcode.png';

curl_setopt_array($curl, array(
    CURLOPT_URL => $url,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_BINARYTRANSFER => true,
    CURLOPT_FOLLOWLOCATION => true,
));

$response = curl_exec($curl);

if ($response === false) {
    $error = curl_error($curl);
    echo "cURL Error: $error";
} else {
    file_put_contents($outputFilePath, $response);
    echo "QR Code saved to $outputFilePath";
}

curl_close($curl);
?>
```

:::

## 请求参数

| 参数名 | 类型 | 必填 | 说明 |
| - | - | - | - |
| text | string | 是 | 返回文本/网址二维码 |
| size | number | 否 | 返回文本/网站二维码像素大小 |

## 返回参数

| 返回参数 | 类型 | 说明 |
| - | - | - |
| image | image/png | 返回的二维码图片，图片格式为PNG |

## 返回示例

::: code-group

```text [成功 200]
Content-Type: image/png
Url: https://api.nxvav.cn/api/qrcode/?text=https://api.nxvav.cn/&size=100
```

```text [失败 201]
参数错误或没有内容！
```

:::