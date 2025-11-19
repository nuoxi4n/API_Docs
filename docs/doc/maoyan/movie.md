# 猫眼电影实时票房

> 实时查看电影票房数据，包括当前票房排名和热门影片。

## 接口地址

```http
https://api.nxvav.cn/api/maoyan/movie/
```

## 请求示例

[https://api.nxvav.cn/api/maoyan/movie/?encoding=text](https://api.nxvav.cn/api/maoyan/movie/?encoding=text)

::: code-group

```Shell
curl --location --request GET "https://api.nxvav.cn/api/maoyan/movie"
```

```JavaScript
var requestOptions = {
   method: 'GET',
   redirect: 'follow'
};

fetch("https://api.nxvav.cn/api/maoyan/movie", requestOptions)
   .then(response => response.text())
   .then(result => console.log(result))
   .catch(error => console.log('error', error));
```

```Java
Unirest.setTimeouts(0, 0);
HttpResponse<String> response = Unirest.get("https://api.nxvav.cn/api/maoyan/movie")
   .asString();
```

```Swift
import Foundation
#if canImport(FoundationNetworking)
import FoundationNetworking
#endif

var semaphore = DispatchSemaphore (value: 0)

var request = URLRequest(url: URL(string: "https://api.nxvav.cn/api/maoyan/movie")!,timeoutInterval: Double.infinity)
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

   url := "https://api.nxvav.cn/api/maoyan/movie"
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
   CURLOPT_URL => 'https://api.nxvav.cn/api/maoyan/movie',
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

url = "https://api.nxvav.cn/api/maoyan/movie"

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
   curl_easy_setopt(curl, CURLOPT_URL, "https://api.nxvav.cn/api/maoyan/movie");
   curl_easy_setopt(curl, CURLOPT_FOLLOWLOCATION, 1L);
   curl_easy_setopt(curl, CURLOPT_DEFAULT_PROTOCOL, "https");
   struct curl_slist *headers = NULL;
   curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
   res = curl_easy_perform(curl);
}
curl_easy_cleanup(curl);
```

```C#
var client = new RestClient("https://api.nxvav.cn/api/maoyan/movie");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```

```Ruby
require "uri"
require "net/http"

url = URI("https://api.nxvav.cn/api/maoyan/movie")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)

response = https.request(request)
puts response.read_body
```

:::

## 请求参数

| 参数名   | 类型   | 必填 | 默认值 | 枚举值             | 说明               |
| -------- | ------ | ---- | ------ | ------------------ | ------------------ |
| encoding | string | 否   | json   | json,text,markdown | 返回数据的编码格式 |

## 返回响应

#### 基础数据

| 字段名  | 类型    | 说明     |
| ------- | ------- | -------- |
| code    | integer | 状态码   |
| message | string  | 状态信息 |
| data    | object  | 返回数据 |

#### 数据对象 [data]

| 字段名                | 类型    | 说明               |
| --------------------- | ------- | ------------------ |
| title                 | string  | 标题               |
| show_count_desc       | string  | 累计想看人数描述   |
| view_count_desc       | string  | 累计想看人数描述   |
| split_box_office      | float   | 分账票房（万）     |
| split_box_office_unit | string  | 分账票房单位       |
| box_office            | float   | 票房（万）         |
| box_office_unit       | string  | 票房单位           |
| update_gap_second     | integer | 更新间隔（秒）     |
| updated               | string  | 更新时间           |
| updated_at            | integer | 更新时间戳（毫秒） |
| list                  | array   | 榜单数据列表       |

#### 数据数组 [list]

| 字段名                | 类型    | 说明             |
| --------------------- | ------- | ---------------- |
| movie_id              | integer | 电影 ID          |
| movie_name            | string  | 电影名称         |
| release_info          | string  | 上映信息         |
| box_office            | float   | 票房（万）       |
| box_office_unit       | string  | 票房单位         |
| box_office_desc       | string  | 票房描述         |
| box_office_rate       | string  | 票房占比         |
| split_box_office      | float   | 分账票房（万）   |
| split_box_office_unit | string  | 分账票房单位     |
| split_box_office_desc | string  | 分账票房描述     |
| split_box_office_rate | string  | 分账票房占比     |
| show_count            | integer | 累计想看人数     |
| show_count_rate       | string  | 累计想看人数占比 |
| avg_show_view         | string  | 平均想看人数     |
| avg_seat_view         | string  | 平均座位占比     |
| sum_box_desc          | string  | 累计票房描述     |
| sum_split_box_desc    | string  | 累计分账票房描述 |

## 返回示例

::: code-group

```json [成功 200]
{
  "code": 200,
  "message": "获取成功。数据来自官方/权威源头，以确保稳定与实时。",
  "data": {
    "title": "实时大盘",
    "show_count_desc": "34.2万",
    "view_count_desc": "54.9万",
    "split_box_office": "2295.7",
    "split_box_office_unit": "万",
    "box_office": "2295.7",
    "box_office_unit": "万",
    "update_gap_second": 5,
    "updated": "2025-11-19 17:03:22",
    "updated_at": 1763543002037,
    "list": [
      {
        "movie_id": 1528577,
        "movie_name": "鬼灭之刃：无限城篇 第一章 猗窝座再袭",
        "release_info": "上映6天",
        "box_office": "1308.06",
        "box_office_unit": "万",
        "box_office_desc": "1308.06万",
        "box_office_rate": "56.9%",
        "split_box_office": "1167.03",
        "split_box_office_unit": "万",
        "split_box_office_desc": "1167.03万",
        "split_box_office_rate": "56.4%",
        "show_count": 123345,
        "show_count_rate": "36.0%",
        "avg_show_view": "2.4",
        "avg_seat_view": "1.6%",
        "sum_box_desc": "4.33亿",
        "sum_split_box_desc": "3.85亿"
      }
    ]
  }
}
```

```json [失败 201]
{
  "code": 201,
  "msg": "查询失败"
}
```

:::
