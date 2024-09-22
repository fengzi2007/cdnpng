// 获取HTML中的目标元素
const container = document.getElementById('partnerLink');
const allLinksContainer = document.getElementById('allLinks');

// 获取所有链接
const allLinks = Array.from(allLinksContainer.getElementsByTagName('a'));

// 检查链接文本是否包含关键词 "快速CDN"
function shouldHideLink(linkText) {
    const keyword = '快速CDN';
    return linkText.includes(keyword);
}

// 根据权重选择一个链接
function selectLinkByWeight(links) {
    let totalWeight = 0;
    for (let link of links) {
        totalWeight += parseInt(link.getAttribute('data-weight'), 10);
    }

    // 生成一个介于0和总权重之间的随机数
    const random = Math.random() * totalWeight;

    // 计算累积权重并选择链接
    let cumulativeWeight = 0;
    for (let link of links) {
        cumulativeWeight += parseInt(link.getAttribute('data-weight'), 10);
        if (random <= cumulativeWeight) {
            return link;
        }
    }

    // 如果没有匹配项（理论上不应该发生），返回第一个链接
    return links[0];
}

// 动态插入随机链接，并隐藏包含 "快速CDN" 的链接
function insertRandomLink() {
    // 根据权重选择一个链接
    const selectedLink = selectLinkByWeight(allLinks);

    // 创建一个新的元素并设置其内容
    const linkElement = document.createElement('a');
    linkElement.href = selectedLink.href;
    linkElement.title = selectedLink.title;
    linkElement.alt = selectedLink.alt;
    linkElement.innerHTML = selectedLink.innerHTML;

    // 检查链接文本是否包含 "快速CDN" 并决定是否隐藏
    if (shouldHideLink(linkElement.innerHTML)) {
        linkElement.style.display = 'none';
    }

    // 清空容器并插入新链接
    container.innerHTML = ''; // 清空容器
    container.appendChild(linkElement); // 插入新链接
}

// 初始化：插入随机链接
insertRandomLink();
