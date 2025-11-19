---
outline: doc
---

# 快速开始

> 欢迎使用 nuoxian's API 公开接口服务！这里将讲解怎样快速开始使用 API 服务。

## 什么是 API?

用知乎上一个比较生动的例子来说明：

> 有一天，轮子哥写了一个专门抓取知乎小黄文的 API，轮子哥写的这个 API 每天都会自动查阅小黄文文章并且点赞。恰好你也是小黄文爱好者，那么轮子哥的账号对你来说就是 API 接口，你要做的唯一事情就是关注轮子哥账号，每天只需要查阅轮子哥的点赞动态就能看到轮子哥点赞的小黄文，但是不用关心轮子哥到底是用什么方法找到这么多小黄文的！

怎么样，是不是更好理解了呢？

## 适合群体

API 大多数是为了网站开发者、程序开发者的使用。当然普通群体也是可以使用的。

## 使用 API

以热门视频解析的 API 来说明使用。我们需要将抖音平台的一个视频弄成一个无水印视频。抖音视频地址为：v.douyin.com/e28ypsB/，一般抖音 APP 内下载视频是会在视频里 `有水印和结束动画` 的，我们的目的是 `无水印无结束动画` 。

热门视频解析的接口地址：[https://api.nxvav.cn/api/jiexi/](https://api.nxvav.cn/api/jiexi/)

我们可以先查看该接口的文档，来方便我们更好的使用和理解。

热门视频解析的接口文档：[https://docs.nxvav.cn/doc/jiexi.html](https://docs.nxvav.cn/doc/jiexi.html)

可以看到接口文档的 `请求参数` 中有个 url 是必须填写的，并且说明写的是 `视频平台分享的链接地址`

`请求参数` 的 `参数名` 下方有个 `url` ，就是我们所要携带的参数内容了，那么就是（每一个请求接口第一位都需要带上?，例如：`xxx.com/?a=1&b=2&c=3` 后面的一定要是&来作为附带请求参数），那么就是 `https://api.nxvav.cn/api/jiexi/?url=https://v.douyin.com/e28ypsB/`

访问以上的链接，得到了以下 `JSON` 格式的信息。为了方便理解，我们特地将下方的 json 信息加上注释（注释就是对代码的解释和说明。目的是为了让别人和自己很容易看懂，一看就知道这段代码是做什么用的。）

```json
// 以下的都是在字段名中的说明可以了解到的内容

{
  "code": 200,
  "msg": "success",
  "data": {
    "author": "人民日报",
    "uid": "rmrbxmt",
    "avatar": "https://p11.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_21b4383e542b8991bcd33d33eeda7d8d.jpeg?from=327834062",
    "like": 13089857,
    "time": 1555982844,
    "title": "人民海军生日快乐！重温2009国庆阅兵海军方队的风采。期待今天的海上阅兵！",
    "cover": "https://p3-sign.douyinpic.com/179d10014283e5888d5c7~tplv-dy-resize-walign-adapt-aq:720:q75.webp?lk3s=138a59ce&x-expires=1757350800&x-signature=YOR7cy5TNirN4cUGFxFTh%2F9laQs%3D&from=327834062&s=PackSourceEnum_DOUYIN_REFLOW&se=false&sc=cover&biz_tag=aweme_video&l=202508260106265CD0D90D83353F391C4C",
    "url": "http://www.iesdouyin.com/aweme/v1/play/?video_id=v0200ff80000biv6jt2gd9fj4om8m8ag&ratio=1080p&line=0",
    "music": {
      "author": "人民日报",
      "avatar": "https://p3.douyinpic.com/aweme/1080x1080/aweme-avatar/tos-cn-avt-0015_21b4383e542b8991bcd33d33eeda7d8d.jpeg?from=327834062"
    }
  }
}
```

我们通过 `字段名` 得到了 `url` 是视频直链地址，那么我们找到了 2 个 `url` ，一个是在 `data` 的下面，一个是在 `data` 的 `music` 的下面。 `url` 的等于后面就是我们要的 `无水印无结束动画` 的视频直链了！

那么怎么看那个是视频直链呢？？看到接口文档的 `字段名` ，我们也发现了字段名中有着 2 个 `url` ，但是它们的说明是不一样的。一个是视频直链地址，一个是音乐直链地址。

看到说明文档，它是 music（音乐信息），那么它所有下面的字段名都是音乐信息相关的。这样我们就知道获取第一个 url 了，而不是 music 的 url。

```json
需要的："url": "http://www.iesdouyin.com/aweme/v1/play/?video_id=v0200ff80000biv6jt2gd9fj4om8m8ag&ratio=1080p&line=0",
```

## 视频：什么是 API?

TODO：修复视频中 ing...
