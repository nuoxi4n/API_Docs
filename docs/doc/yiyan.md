# 一言

> 提供一句话服务。不论在哪里，总有那么几个句子能穿透你的心。把这些句子汇聚起来，传递更多的感动。

## 接口地址

```http
https://api.nxvav.cn/api/yiyan/
```

## 请求示例

[https://api.nxvav.cn/api/yiyan/?charset=utf8](https://api.nxvav.cn/api/yiyan/?charset=utf8)

[https://api.nxvav.cn/api/yiyan/?encode=js&charset=gbk](https://api.nxvav.cn/api/yiyan/?encode=js&charset=gbk)

::: code-group

```Shell
curl --location --request GET "https://api.nxvav.cn/api/yiyan"
```

```JavaScript
var requestOptions = {
   method: 'GET',
   redirect: 'follow'
};

fetch("https://api.nxvav.cn/api/yiyan", requestOptions)
   .then(response => response.text())
   .then(result => console.log(result))
   .catch(error => console.log('error', error));
```

```Java
Unirest.setTimeouts(0, 0);
HttpResponse<String> response = Unirest.get("https://api.nxvav.cn/api/yiyan")
   .asString();
```

```Swift
import Foundation
#if canImport(FoundationNetworking)
import FoundationNetworking
#endif

var semaphore = DispatchSemaphore (value: 0)

var request = URLRequest(url: URL(string: "https://api.nxvav.cn/api/yiyan")!,timeoutInterval: Double.infinity)
request.httpMethod = "GET"

let task = URLSession.shared.dataTask(with: request) { data, response, error in
   guard let data = data else {
      print(String(describing: error))
      semaphore.signal()
      return
   }
   print(String(data: data, encoding: .utf8)!)
   semaphore.signal()
}

task.resume()
semaphore.wait()
```

```Go
package main

import (
   "fmt"
   "net/http"
   "io/ioutil"
)

func main() {

   url := "https://api.nxvav.cn/api/yiyan"
   method := "GET"

   client := &http.Client {
   }
   req, err := http.NewRequest(method, url, nil)

   if err != nil {
      fmt.Println(err)
      return
   }
   res, err := client.Do(req)
   if err != nil {
      fmt.Println(err)
      return
   }
   defer res.Body.Close()

   body, err := ioutil.ReadAll(res.Body)
   if err != nil {
      fmt.Println(err)
      return
   }
   fmt.Println(string(body))
}
```

```PHP
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
   CURLOPT_URL => 'https://api.nxvav.cn/api/yiyan',
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
```

```Python
import requests

url = "https://api.nxvav.cn/api/yiyan"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)
```

```C
CURL *curl;
CURLcode res;
curl = curl_easy_init();
if(curl) {
   curl_easy_setopt(curl, CURLOPT_CUSTOMREQUEST, "GET");
   curl_easy_setopt(curl, CURLOPT_URL, "https://api.nxvav.cn/api/yiyan");
   curl_easy_setopt(curl, CURLOPT_FOLLOWLOCATION, 1L);
   curl_easy_setopt(curl, CURLOPT_DEFAULT_PROTOCOL, "https");
   struct curl_slist *headers = NULL;
   curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
   res = curl_easy_perform(curl);
}
curl_easy_cleanup(curl);
```

```C#
var client = new RestClient("https://api.nxvav.cn/api/yiyan");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```

```Ruby
require "uri"
require "net/http"

url = URI("https://api.nxvav.cn/api/yiyan")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)

response = https.request(request)
puts response.read_body
```

:::

## 请求参数

| 参数名  | 类型   | 必填 | 默认值 | 枚举值             | 说明         |
| ------- | ------ | ---- | ------ | ------------------ | ------------ |
| charset | string | 否   | utf8   | utf8,gbk           | 返回编码格式 |
| encode  | string | 否   | json   | json,text,markdown | 返回数据格式 |

## 返回响应

| 返回参数   | 类型    | 说明     |
| ---------- | ------- | -------- |
| id         | integer | id       |
| yiyan      | string  | 内容     |
| createTime | integer | 发布时间 |
| nick       | string  | 作者     |

## 返回示例

::: code-group

```json [成功 200]
{
  "id": 101177,
  "yiyan": "你总盼着遇贵人，贵人不曾记得你，因为贵人多忘事。",
  "createTime": 1612054332000,
  "nick": "包子再咬两个没关系阿"
}
```

```json [失败 400]
{
  "code": 400,
  "msg": "无法请求数据，请稍后再试"
}
```

:::
