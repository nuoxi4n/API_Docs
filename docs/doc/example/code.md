```Shell-vue
curl --location --request GET "https://api.nxvav.cn/api/{{$frontmatter.api}}"
```

```JavaScript-vue
var requestOptions = {
   method: 'GET',
   redirect: 'follow'
};

fetch("https://api.nxvav.cn/api/{{$frontmatter.api}}", requestOptions)
   .then(response => response.text())
   .then(result => console.log(result))
   .catch(error => console.log('error', error));
```

```Java-vue
Unirest.setTimeouts(0, 0);
HttpResponse<String> response = Unirest.get("https://api.nxvav.cn/api/{{$frontmatter.api}}")
   .asString();
```

```Swift-vue
import Foundation
#if canImport(FoundationNetworking)
import FoundationNetworking
#endif

var semaphore = DispatchSemaphore (value: 0)

var request = URLRequest(url: URL(string: "https://api.nxvav.cn/api/{{$frontmatter.api}}")!,timeoutInterval: Double.infinity)
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

```Go-vue
package main

import (
   "fmt"
   "net/http"
   "io/ioutil"
)

func main() {

   url := "https://api.nxvav.cn/api/{{$frontmatter.api}}"
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

```PHP-vue
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
   CURLOPT_URL => 'https://api.nxvav.cn/api/{{$frontmatter.api}}',
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

```Python-vue
import requests

url = "https://api.nxvav.cn/api/{{$frontmatter.api}}"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)
```

```C-vue
CURL *curl;
CURLcode res;
curl = curl_easy_init();
if(curl) {
   curl_easy_setopt(curl, CURLOPT_CUSTOMREQUEST, "GET");
   curl_easy_setopt(curl, CURLOPT_URL, "https://api.nxvav.cn/api/{{$frontmatter.api}}");
   curl_easy_setopt(curl, CURLOPT_FOLLOWLOCATION, 1L);
   curl_easy_setopt(curl, CURLOPT_DEFAULT_PROTOCOL, "https");
   struct curl_slist *headers = NULL;
   curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
   res = curl_easy_perform(curl);
}
curl_easy_cleanup(curl);
```

```C#-vue
var client = new RestClient("https://api.nxvav.cn/api/{{$frontmatter.api}}");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```

```Ruby-vue
require "uri"
require "net/http"

url = URI("https://api.nxvav.cn/api/{{$frontmatter.api}}")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)

response = https.request(request)
puts response.read_body
```