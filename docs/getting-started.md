# 快速开始

> 欢迎使用 nuoxian's API 公开接口服务！这里将讲解怎样快速开始使用 API 服务。

## 什么是API?

用知乎上一个比较生动的例子来说明：

> 有一天，轮子哥写了一个专门抓取知乎小黄文的API，轮子哥写的这个API每天都会自动查阅小黄文文章并且点赞。恰好你也是小黄文爱好者，那么轮子哥的账号对你来说就是API接口，你要做的唯一事情就是关注轮子哥账号，每天只需要查阅轮子哥的点赞动态就能看到轮子哥点赞的小黄文，但是不用关心轮子哥到底是用什么方法找到这么多小黄文的！

怎么样，是不是更好理解了呢？

## 适合群体

API大多数是为了网站开发者、程序开发者的使用。当然普通群体也是可以使用的。

## 使用API

以热门视频解析的API来说明使用。我们需要将抖音平台的一个视频弄成一个无水印视频。抖音视频地址为：v.douyin.com/e28ypsB/，一般抖音APP内下载视频是会在视频里 `有水印和结束动画` 的，我们的目的是 `无水印无结束动画` 。

热门视频解析的接口地址：[https://api.nxvav.cn/api/jiexi/](https://api.nxvav.cn/api/jiexi/)

我们可以先查看该接口的文档，来方便我们更好的使用和理解。

热门视频解析的接口文档：[https://api.nxvav.cn/doc/#/jiexi](https://api.nxvav.cn/doc/#/jiexi)

可以看到接口文档的 `请求参数` 中有个url是必须填写的，并且说明写的是 `视频平台分享的链接地址` 且 `不能带中文字、特殊符号`

| 参数名 | 类型 | 示例 | 说明 |
| ------ | ---- | ---- | ---- |
| url | 必填 | 不能带中文字、特殊符号 | 视频平台分享的链接地址 |

`请求参数` 的 `参数名` 下方有个 `url` ，就是我们所要携带的参数内容了，那么就是（每一个请求接口第一位都需要带上?，例如：`xxx.com/?a=1&b=2&c=3` 后面的一定要是&来作为附带请求参数）： `api.nxvav.cn/api/jiexi/?url=视频平台分享的链接地址` ，那么就是 `https://api.nxvav.cn/api/jiexi/?url=https://www.douyin.com/video/6682652170002730251`

然后看到接口文档的 `返回参数` ，以下是该说明文档的信息：

| 返回参数 | 说明 |
| -------- | ---- |
| code | 状态码 |
| msg | 返回信息 |
| data | 视频数据 |
| data > author | 作者名字 |
| data > uid | 作者id |
| data > avatar | 作者头像 |
| data > like | 视频点赞数量 |
| data > time | 发布时间(时间戳) |
| data > title | 视频标题 |
| data > cover | 视频封面 |
| data > url | 视频直链地址 |
| data > music | 音乐信息 |
| data > music > author | 音乐作者 |
| data > music > avatar | 音乐封面 |

访问以上的链接，得到了以下 `JSON` 格式的信息。为了方便理解，我们特地将下方的json信息加上注释（注释就是对代码的解释和说明。目的是为了让别人和自己很容易看懂，一看就知道这段代码是做什么用的。）

```json
// 以下的都是在返回参数中的说明可以了解到的内容

{
    "code": 200,
    "msg": "解析成功",
    "data": {
        "author": "人民日报",
        "uid": "rmrbxmt",
        "avatar": "https://p26.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_21b4383e542b8991bcd33d33eeda7d8d.jpeg?from=327834062",
        "like": 13101165,
        "time": 1555982844,
        "title": "人民海军生日快乐！重温2009国庆阅兵海军方队的风采。期待今天的海上阅兵！",
        "cover": "https://p3-sign.douyinpic.com/179d10014283e5888d5c7~tplv-dy-resize-walign-adapt-aq:720:q75.webp?x-expires=1732446000&x-signature=3tnyVWeOdbqyefiUpAihXIZlm9E%3D&from=327834062&s=PackSourceEnum_DOUYIN_REFLOW&se=false&sc=cover&biz_tag=aweme_video&l=20241110191548C144116C1F8758FD053F",
        "url": "https://aweme.snssdk.com/aweme/v1/play/?video_id=v0200ff80000biv6jt2gd9fj4om8m8ag&ratio=720p&line=0",
        "music": {
            "author": "人民日报",
            "avatar": "https://p3.douyinpic.com/aweme/1080x1080/aweme-avatar/tos-cn-avt-0015_21b4383e542b8991bcd33d33eeda7d8d.jpeg?from=327834062"
        }
    }
}
```

我们通过 `返回参数` 得到了 `url` 是视频直链地址，那么我们找到了2个 `url` ，一个是在 `data` 的下面，一个是在 `data` 的 `music` 的下面。 `url` 的等于后面就是我们要的 `无水印无结束动画` 的视频直链了！

那么怎么看那个是视频直链呢？？看到接口文档的 `返回参数` ，我们也发现了返回参数中有着2个 `url` ，但是它们的说明是不一样的。一个是视频直链地址，一个是音乐直链地址。

看到说明文档的倒数第四个，它是music（音乐信息），那么它所有下面的返回参数都是音乐信息相关的。这样我们就知道获取第一个url了，而不是music的url。

```json
需要的："url": "https://aweme.snssdk.com/aweme/v1/play/?video_id=v0200ff80000biv6jt2gd9fj4om8m8ag&ratio=720p&line=0",
```

## 效果视频

##### 有水印视频

<iframe src="https://api.nxvav.cn/api/m3u8/?url=https://one.nxvav.cn/Video/%E6%9C%89%E6%B0%B4%E5%8D%B0%E8%A7%86%E9%A2%91.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" height="500px"></iframe>

##### 无水印视频

<iframe src="https://api.nxvav.cn/api/m3u8/?url=https://one.nxvav.cn/Video/%E6%97%A0%E6%B0%B4%E5%8D%B0%E8%A7%86%E9%A2%91.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" height="500px"></iframe>

## 视频：什么是API?

<iframe src="https://api.nxvav.cn/api/bilivideo/?bv=BV1v64y1F7XN&p=1&q=32&otype=dplayer" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" height="500px"></iframe>
