// 定义多个HTML代码块及它们的权重
const htmlSnippets = [
    { html: '<a target="_blank" href="https://www.ydbee.cn/" title="云端蜜蜂，为您免费提供网站加速和网站防御（DDOS、CC攻击）" alt="云端蜜蜂，为您免费提供网站加速和网站防御（DDOS、CC攻击）">本站由云端蜜蜂提供网站加速和攻击防御服务</a>', weight: 3 },
    { html: '<a target="_blank" href="https://www.fusionidc.cn/" title="聚变云，为您免费提供网站加速和网站防御（DDOS、CC攻击）" alt="聚变云，为您免费提供网站加速和网站防御（DDOS、CC攻击）">本站由聚变云数据提供网站加速和攻击防御服务</a>', weight: 1 },
];

// 计算总权重
let totalWeight = htmlSnippets.reduce((acc, snippet) => acc + snippet.weight, 0);

// 根据权重随机选择一个HTML代码块
function getRandomSnippetByWeight() {
    // 生成一个介于0和总权重之间的随机数
    const randomValue = Math.random() * totalWeight;
    let currentWeightSum = 0;

    for (let snippet of htmlSnippets) {
        currentWeightSum += snippet.weight;
        if (randomValue <= currentWeightSum) {
            return snippet.html;
        }
    }

    // 如果没有返回，返回最后一个片段（理论上不会到达这里）
    return htmlSnippets[htmlSnippets.length - 1].html;
}

// 插入HTML代码到目标元素
function injectHtmlIntoElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = getRandomSnippetByWeight();
    } else {
        console.error('Element not found: ', elementId);
    }
}

// 当页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    injectHtmlIntoElement('targetDiv');
});
