import pinyin from 'pinyin';
const CityMap = new Map([
    ["阿尔巴尼亚", "a"],
    ["阿尔及利亚", "a"],
    ["阿富汗", "a"],
    ["阿根廷", "a"],
    ["阿拉伯联合酋长国", "a"],
    ["阿鲁巴", "a"],
    ["阿曼", "a"],
    ["阿塞拜疆", "a"],
    ["奥地利", "a"],
    ["奥兰群岛", "a"],
    ["不丹", "b"],
    ["朝鲜", "c"],
    ["佛得角", "f"],
    ["卡塔尔", "k"],
    ["秘鲁", "b"],
    ["汤加", "t"],
    ["泽西岛", "z"]
]);
const getCityPinyin = (country) => {
    const transLationResult = pinyin(country.name, {
        style: pinyin.STYLE_FIRST_LETTER,
        heteronym: true,
    });
    transLationResult[0].sort();
    let firstStr = transLationResult[0][0] || '';
    if (CityMap.has(country.name)) {
        firstStr = CityMap.get(country.name) || '';
    }
    return firstStr.toLocaleUpperCase();
};
export { getCityPinyin };
export default CityMap;
//# sourceMappingURL=CityPinyinMap.js.map