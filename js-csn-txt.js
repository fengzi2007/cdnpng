// 链接数组
const links = [
    '<a target="_blank" href="https://www.ydbee.cn/" title="云端蜜蜂，为您免费提供网站加速和网站防御（DDOS、CC攻击）" alt="云端蜜蜂，为您免费提供网站加速和网站防御（DDOS、CC攻击）">本站由云端蜜蜂提供网站加速和攻击防御服务</a>',
    '<a target="_blank" href="https://www.fusionidc.cn/" title="聚变云，为您免费提供网站加速和网站防御（DDOS、CC攻击）" alt="聚变云，为您免费提供网站加速和网站防御（DDOS、CC攻击）">本站由聚变云数据提供网站加速和攻击防御服务</a>',
    '<a target="_blank" href="https://idc.7msb.com/" title="花卷IDC，为您免费提供网站加速和网站防御（DDOS、CC攻击）" alt="花卷IDC，为您免费提供网站加速和网站防御（DDOS、CC攻击）">本站由花卷IDC提供网站加速和攻击防御服务</a>',
    // 假设这里有一个包含 "快速CDN" 的链接
    // '<a target="_blank" href="http://example.com" title="快速CDN">快速CDN服务</a>'
];

// 获取HTML中的目标元素
const container = document.getElementById('partnerLink');

// 过滤掉包含 "快速CDN" 的链接
const filteredLinks = links.filter(link => {
    const regex = new RegExp(/快速CDN/);
    return !regex.test(link);
});

// 生成一个随机索引
function getRandomIndex() {
    return Math.floor(Math.random() * filteredLinks.length);
}

// 将随机选择的链接插入到页面中
function insertRandomLink() {
    if (filteredLinks.length > 0) {
        const index = getRandomIndex();
        container.innerHTML = filteredLinks[index];
    } else {
        container.innerHTML = '没有合适的链接可显示。';
    }
}

// 调用函数插入链接
insertRandomLink();
