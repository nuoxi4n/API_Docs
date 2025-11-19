---
outline: doc
---

# 关于本站

{{ runtimeText }}

nuoxian's API（api.nxvav.cn）建于 2019 年 07 月 31 日，目前网站主要提供稳定、高效、免费的 API 接口服务；接口服务器采用中小型服务器，请合理使用资源，不要长时间大流量占用接口；本站只是提供技术支持及维护，若本站部分接口侵犯贵站数据，请联系站长删除并停止接口服务；本站部分接口由站长个人开发并维护，因此不能保证接口永久有效。其他更多 API 接口正在赶来的路上...

E-mail：[nuo_xian@qq.com](mailto:nuo_xian@qq.com)

首页地址：[https://api.nxvav.cn](https://api.nxvav.cn)

官方文档地址：[https://docs.nxvav.cn](https://docs.nxvav.cn)

服务条款地址：[https://api.nxvav.cn/tos.html](https://api.nxvav.cn/tos.html)

服务状态地址：[https://api.nxvav.cn/pages/status/](https://api.nxvav.cn/pages/status/)

nuoxian's API 黑名单列表：[https://nxvav.cn/apifirewall.html](https://nxvav.cn/apifirewall.html)

## 访问限制

因考虑到 nuoxian's API 会被恶意调用等情况，本站决定限制访问来阻止不必要的资源消耗。故做出以下限制，敬请谅解：

- 增加 IP 黑名单，可在上方的 nuoxian's API 黑名单列表 查看 IP 黑名单。
- 设置 User-Agent 防盗链，禁止指定 UA 的客户端访问内容。

以上被禁止的 IP 和 UA 都可在 nuoxian's API 黑名单列表 查看到对应的内容，被禁止的 IP 将返回 403 错误。

## 捐赠我们

[https://api.nxvav.cn/pages/donate/](https://api.nxvav.cn/pages/donate/)

<iframe src="https://api.nxvav.cn/pages/donate/" style="overflow-x:hidden;overflow-y:hidden; border:0xp none #fff; min-height:320px; width:100%;" frameborder="0" scrolling="no"></iframe>

## 捐赠名单

| 捐赠者  | 金额  | 时间       | 捐赠方式 | 备注             |
| ------- | ----- | ---------- | -------- | ---------------- |
| weclont | ￥ 10 | 2021/06/12 | 支付宝   | 感谢贵站提供服务 |
| weclont | ￥ 20 | 2024/05/18 | 支付宝   | -                |

## 友情链接

- [60s](https://github.com/vikiboss/60s)
- [LanzouAPI](https://github.com/hanximeng/LanzouAPI)

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const runtimeText = ref("接口服务已稳定运行：Loading...")
let timer = null

const calculateRuntime = () => {
    const startDate = new Date('2019-07-31T00:00:00')
    const now = new Date()
    const diffMs = now - startDate

    const days = Math.floor(diffMs / 86400000)
    const hours = Math.floor((diffMs % 86400000) / 3600000)
    const minutes = Math.floor((diffMs % 3600000) / 60000)

    runtimeText.value = `接口服务已稳定运行：${days}天${hours}小时${minutes}分`
}

onMounted(() => {
    timer = setInterval(calculateRuntime, 1000)
    calculateRuntime() // 立即执行一次
})

onBeforeUnmount(() => {
    clearInterval(timer)
})
</script>
