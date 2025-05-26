/**
 * @author jcy
 * @mail 20970736@qq.com
 * @date 2025-5-22
 */

//默认语言
let LNG = 'zhTW';

//(计算等级成长时 /8)
const PERLEVEL = 8;

//每秒帧数(计算持续时间时 /25)
const FRAMES = 25;

//装备类型
const EQUIPMENT_TYPE = {
    WEAPON: "weapon",
    HELM: "helm",
    SHIELD: "shield",
};

const UNIQUE_ITEMSTATCOST = [
    "item_charged_skill",
    "item_nonclassskill",
    "item_singleskill",
    "item_skillongethit",
    "item_skillonhit",
];

const EQUIPMENT = {
    "weap": { "type": EQUIPMENT_TYPE.WEAPON, "name": { "zhCN": "武器", "zhTW": "武器", "enUS": "Weapon" }, "parent": null },
    "mele": { "type": EQUIPMENT_TYPE.WEAPON, "name": { "zhCN": "近战武器", "zhTW": "近戰武器", "enUS": "Melee Weapon" }, "parent": "weap" },
    "helm": { "type": EQUIPMENT_TYPE.HELM, "name": { "zhCN": "头盔", "zhTW": "頭盔", "enUS": "Helm" }, "parent": null },
    "tors": { "type": EQUIPMENT_TYPE.HELM, "name": { "zhCN": "护甲", "zhTW": "護甲", "enUS": "Armor" }, "parent": null },
    "shld": { "type": EQUIPMENT_TYPE.SHIELD, "name": { "zhCN": "盾牌", "zhTW": "盾牌", "enUS": "Shield" }, "parent": null },
    "pala": { "type": EQUIPMENT_TYPE.SHIELD, "name": { "zhCN": "圣骑专用盾", "zhTW": "聖騎盾", "enUS": "Paladin Shield" }, "parent": "shld" },
    "miss": { "type": EQUIPMENT_TYPE.WEAPON, "name": { "zhCN": "远程武器", "zhTW": "弓/弩/亚马逊弓", "enUS": "Missile Weapons" }, "parent": "weap" },
    "swor": { "type": EQUIPMENT_TYPE.WEAPON, "name": { "zhCN": "剑类", "zhTW": "刀劍", "enUS": "Swords" }, "parent": "mele" },
    "knif": { "type": EQUIPMENT_TYPE.WEAPON, "name": { "zhCN": "匕首", "zhTW": "匕首", "enUS": "Daggers" }, "parent": "mele" },
    "mace": { "type": EQUIPMENT_TYPE.WEAPON, "name": { "zhCN": "钉锤", "zhTW": "釘錘", "enUS": "Maces" }, "parent": "mele" },
    "hamm": { "type": EQUIPMENT_TYPE.WEAPON, "name": { "zhCN": "战锤", "zhTW": "重錘", "enUS": "Hammers" }, "parent": "mele" },
    "axe": { "type": EQUIPMENT_TYPE.WEAPON, "name": { "zhCN": "斧头", "zhTW": "斧", "enUS": "Axes" }, "parent": "mele" },
    "club": { "type": EQUIPMENT_TYPE.WEAPON, "name": { "zhCN": "短棒", "zhTW": "短棒", "enUS": "Clubs" }, "parent": "mele" },
    "pole": { "type": EQUIPMENT_TYPE.WEAPON, "name": { "zhCN": "长柄武器", "zhTW": "長柄武器", "enUS": "Polearms" }, "parent": "mele" },
    "spea": { "type": EQUIPMENT_TYPE.WEAPON, "name": { "zhCN": "标枪/亚马逊标枪", "zhTW": "長矛/亚马逊长矛", "enUS": "Spears / Amazon Javelins" }, "parent": "mele" },
    "h2h": { "type": EQUIPMENT_TYPE.WEAPON, "name": { "zhCN": "爪类/拳刃", "zhTW": "爪/拳刃", "enUS": "Claws / Katar" }, "parent": "mele" },
    "scep": { "type": EQUIPMENT_TYPE.WEAPON, "name": { "zhCN": "权杖", "zhTW": "權杖", "enUS": "Scepters" }, "parent": "mele" },
    "wand": { "type": EQUIPMENT_TYPE.WEAPON, "name": { "zhCN": "魔杖", "zhTW": "魔杖", "enUS": "Wands" }, "parent": "mele" },
    "staf": { "type": EQUIPMENT_TYPE.WEAPON, "name": { "zhCN": "法杖", "zhTW": "法杖", "enUS": "Staves" }, "parent": "mele" }
}

//properties.js 补档
const MY_PROPERTIES = [
    {
        "code": "dmg-min",
        "*Enabled": 1,
        "func1": 5,
        "stat1": "mindamage",
        "set1": "",
        "val1": "",
        "func2": "",
        "stat2": "",
        "set2": "",
        "val2": "",
        "func3": "",
        "stat3": "",
        "set3": "",
        "val3": "",
        "func4": "",
        "stat4": "",
        "set4": "",
        "val4": "",
        "func5": "",
        "stat5": "",
        "set5": "",
        "val5": "",
        "func6": "",
        "stat6": "",
        "set6": "",
        "val6": "",
        "func7": "",
        "stat7": "",
        "set7": "",
        "val7": "",
        "*Tooltip": "+# to Minimum Damage",
        "*Parameter": "",
        "*Min": "Min #",
        "*Max": "Max #",
        "*Notes": "",
        "*eol": 0
    }, {
        "code": "dmg-max",
        "*Enabled": 1,
        "func1": 6,
        "stat1": "maxdamage",
        "set1": "",
        "val1": "",
        "func2": "",
        "stat2": "",
        "set2": "",
        "val2": "",
        "func3": "",
        "stat3": "",
        "set3": "",
        "val3": "",
        "func4": "",
        "stat4": "",
        "set4": "",
        "val4": "",
        "func5": "",
        "stat5": "",
        "set5": "",
        "val5": "",
        "func6": "",
        "stat6": "",
        "set6": "",
        "val6": "",
        "func7": "",
        "stat7": "",
        "set7": "",
        "val7": "",
        "*Tooltip": "+# to Maximum Damage",
        "*Parameter": "",
        "*Min": "Min #",
        "*Max": "Max #",
        "*Notes": "",
        "*eol": 0
    },
    {
        "code": "dmg%",
        "*Enabled": 1,
        "func1": 7,
        "stat1": "enhanceddamage",
        "set1": "",
        "val1": "",
        "func2": "",
        "stat2": "",
        "set2": "",
        "val2": "",
        "func3": "",
        "stat3": "",
        "set3": "",
        "val3": "",
        "func4": "",
        "stat4": "",
        "set4": "",
        "val4": "",
        "func5": "",
        "stat5": "",
        "set5": "",
        "val5": "",
        "func6": "",
        "stat6": "",
        "set6": "",
        "val6": "",
        "func7": "",
        "stat7": "",
        "set7": "",
        "val7": "",
        "*Tooltip": "+#% Enhanced Damage",
        "*Parameter": "",
        "*Min": "Min %",
        "*Max": "Max %",
        "*Notes": "",
        "*eol": 0
    },
    {
        "code": "indestruct",
        "*Enabled": 1,
        "func1": 20,
        "stat1": "item_indesctructible",
        "set1": "",
        "val1": "",
        "func2": "",
        "stat2": "",
        "set2": "",
        "val2": "",
        "func3": "",
        "stat3": "",
        "set3": "",
        "val3": "",
        "func4": "",
        "stat4": "",
        "set4": "",
        "val4": "",
        "func5": "",
        "stat5": "",
        "set5": "",
        "val5": "",
        "func6": "",
        "stat6": "",
        "set6": "",
        "val6": "",
        "func7": "",
        "stat7": "",
        "set7": "",
        "val7": "",
        "*Tooltip": "Indestructible",
        "*Parameter": "",
        "*Min": 1,
        "*Max": 1,
        "*Notes": "",
        "*eol": 0
    },
    {
        //TODO: 仅"饥荒"符文组 具有该属性 且未在展示中看到对应翻译
        "code": "ethereal",
        "*Enabled": 1,
        "func1": 23,
        "stat1": "",
        "set1": "",
        "val1": "",
        "func2": "",
        "stat2": "",
        "set2": "",
        "val2": "",
        "func3": "",
        "stat3": "",
        "set3": "",
        "val3": "",
        "func4": "",
        "stat4": "",
        "set4": "",
        "val4": "",
        "func5": "",
        "stat5": "",
        "set5": "",
        "val5": "",
        "func6": "",
        "stat6": "",
        "set6": "",
        "val6": "",
        "func7": "",
        "stat7": "",
        "set7": "",
        "val7": "",
        "*Tooltip": "Ethereal",
        "*Parameter": "",
        "*Min": 1,
        "*Max": 1,
        "*Notes": "",
        "*eol": 0
    },
];

//itemstatcost.js 补档
const MY_ITEMSTATCOST = [
    {
        "Stat": "enhanceddamage",
        "*ID": 10000,
        "Send Other": 1,
        "Signed": "",
        "Send Bits": 11,
        "Send Param Bits": "",
        "UpdateAnimRate": "",
        "Saved": 1,
        "CSvSigned": 0,
        "CSvBits": 10,
        "CSvParam": "",
        "fCallback": "",
        "fMin": 1,
        "MinAccr": 1,
        "Encode": "",
        "Add": 125,
        "Multiply": 55,
        "ValShift": "",
        "1.09-Save Bits": 7,
        "1.09-Save Add": 32,
        "Save Bits": 8,
        "Save Add": 32,
        "Save Param Bits": "",
        "keepzero": "",
        "op": "",
        "op param": "",
        "op base": "",
        "op stat1": "",
        "op stat2": "",
        "op stat3": "",
        "direct": "",
        "maxstat": "",
        "damagerelated": "",
        "itemevent1": "",
        "itemeventfunc1": "",
        "itemevent2": "",
        "itemeventfunc2": "",
        "descpriority": 128,//TODO:夹逼定理待确定 (127, 145)  
        "descfunc": 19,
        "descval": "",
        "descstrpos": "strModEnhancedDamage",
        "descstrneg": "strModEnhancedDamage",
        "descstr2": "",
        "dgrp": 1,
        "dgrpfunc": 19,
        "dgrpval": "",
        "dgrpstrpos": "",
        "dgrpstrneg": "",
        "dgrpstr2": "",
        "stuff": 6,
        "advdisplay": "",
        "*eol": 0
    }
];

// 
const STAT_GROUP = [
    //all-res
    { 
        in: ["fireresist", "lightresist", "coldresist", "poisonresist"], 
        out: { "Stat": "allresist", "*ID": "6A637901", "descstrpos": "strModAllResistances", "descstrneg": "strModAllResistances", "descfunc": 0xF1 } 
    },
    //all-attr
    { 
        in: ["strength", "energy", "dexterity", "vitality"], 
        out: { "Stat": "allattrib", "*ID": "6A637900", "descstrpos": "Moditem2allattrib", "descstrneg": "Moditem2allattrib", "descfunc": 0xF1 } 
    },
];

const RANGE_GROUP = [
    // poison-dmg 92
    { 
        in: ["poisonmindam", "poisonmaxdam", "poisonlength"], 
        out: { "Stat": "poisondamage", "*ID": "6A637914", "descstrpos": "strModPoisonDamageRange", "descstrneg": "strModPoisonDamageRange", "descfunc": 0xF2 } 
    },
    // light-dmg 99
    { 
        in: ["lightmindam", "lightmaxdam"], 
        out: { "Stat": "lightdamage", "*ID": "6A637912", "descstrpos": "strModLightningDamageRange", "descstrneg": "strModLightningDamageRange", "descfunc": 0xF3 } 
    },
    // cold-dmg 96
    { 
        in: ["coldmindam", "coldmaxdam"], 
        out: { "Stat": "colddamage", "*ID": "6A637913", "descstrpos": "strModColdDamageRange", "descstrneg": "strModColdDamageRange", "descfunc": 0xF3 } 
    },
    // fire-dmg 102
    { 
        in: ["firemindam", "firemaxdam"], 
        out: { "Stat": "firedamage", "*ID": "6A637911", "descstrpos": "strModFireDamageRange", "descstrneg": "strModFireDamageRange", "descfunc": 0xF3 } 
    },
    // magic-dmg 104
    { 
        in: ["magicmindam", "magicmaxdam"], 
        out: { "Stat": "magicdamage", "*ID": "6A637910", "descstrpos": "strModMagicDamageRange", "descstrneg": "strModMagicDamageRange", "descfunc": 0xF3 } 
    },
];

const PLACEHODERS = [
    {
        "id" : "searchInput",
        "zhCN": "请输入符文之语名称",
        "zhTW": "請輸入符文之語名稱",
        "enUS": "Please enter runeword name"
    },
];

const COMPONENTS = [
    {
        "id": "title",
        "zhCN": "暗黑破坏神 II：重制版 符文之語查詢頁",
        "zhTW": "暗黑破壞神 II：獄火重生 符文之语查询页",
        "enUS": "Diablo II: Resurrected Runeword Browser"
    },
    {
        "id": "header",
        "zhCN": "符文之语_v2.8",
        "zhTW": "符文之語_v2.8",
        "enUS": "Runeword_v2.8"
    },
    {
        "id": "resetBtn",
        "zhCN": "重置条件",
        "zhTW": "重置條件",
        "enUS": "Reset Conditions"
    },
    {
        "id": "squipmentSlot",
        "zhCN": "装备部位",
        "zhTW": "裝備部位",
        "enUS": "Equipment Slot"
    },
    {
        "id": "socketCount",
        "zhCN": "凹槽数量",
        "zhTW": "凹槽數量",
        "enUS": "Socket Count"
    },
];

const RADIOS = [
    {
        "zhCN": "头盔",
        "zhTW": "頭盔",
        "enUS": "Helmet"
    },
    {
        "zhCN": "护甲",
        "zhTW": "護甲",
        "enUS": "Armor"
    },
    {
        "zhCN": "盾牌",
        "zhTW": "盾牌",
        "enUS": "Shield"
    },
    {
        "zhCN": "圣骑盾",
        "zhTW": "聖騎盾",
        "enUS": "Paladin Shield"
    },
    {
        "zhCN": "武器",
        "zhTW": "武器",
        "enUS": "Weapon"
    },
    {
        "zhCN": "近战武器",
        "zhTW": "近戰武器",
        "enUS": "Melee Weapon"
    },
    {
        "zhCN": "匕首",
        "zhTW": "匕首",
        "enUS": "Dagger"
    },
    {
        "zhCN": "刀剑",
        "zhTW": "刀劍",
        "enUS": "Sword"
    },
    {
        "zhCN": "斧",
        "zhTW": "斧",
        "enUS": "Axe"
    },
    {
        "zhCN": "短棒",
        "zhTW": "短棒",
        "enUS": "Short Club"
    },
    {
        "zhCN": "钉锤",
        "zhTW": "釘錘",
        "enUS": "Spiked Mace"
    },
    {
        "zhCN": "重锤",
        "zhTW": "重錘",
        "enUS": "War Hammer"
    },
    {
        "zhCN": "长柄武器",
        "zhTW": "長柄武器",
        "enUS": "Polearm"
    },
    {
        "zhCN": "长矛",
        "zhTW": "長矛",
        "enUS": "Spear"
    },
    {
        "zhCN": "权杖",
        "zhTW": "權杖",
        "enUS": "Scepter"
    },
    {
        "zhCN": "短杖",
        "zhTW": "短杖",
        "enUS": "Short Staff"
    },
    {
        "zhCN": "法杖",
        "zhTW": "法杖",
        "enUS": "Staff"
    },
    {
        "zhCN": "爪/拳刃",
        "zhTW": "爪/拳刃",
        "enUS": "Claw / Blade"
    },
    {
        "zhCN": "弓/弩",
        "zhTW": "弓/弩",
        "enUS": "Bow / Crossbow"
    },
    {
        "zhCN": "2孔",
        "zhTW": "2孔",
        "enUS": "2 Sockets"
    },
    {
        "zhCN": "3孔",
        "zhTW": "3孔",
        "enUS": "3 Sockets"
    },
    {
        "zhCN": "4孔",
        "zhTW": "4孔",
        "enUS": "4 Sockets"
    },
    {
        "zhCN": "5孔",
        "zhTW": "5孔",
        "enUS": "5 Sockets"
    },
    {
        "zhCN": "6孔",
        "zhTW": "6孔",
        "enUS": "6 Sockets"
    }
];

const LOGIC = {
    "COUNT_PREFIX" : {
        "zhCN": "当前展示",
        "zhTW": "當前展示",
        "enUS": "Showing"
    },
    "COUNT_SUFFIX" : {
        "zhCN": "条数据",
        "zhTW": "條數據",
        "enUS": "results"
    },
    "SOCKETS" : {
        "zhCN": "凹槽",
        "zhTW": "凹槽",
        "enUS": "Sockets"
    },
    "REQUIRED_LEVEL" : {
        "zhCN": "最低需求等级: ",
        "zhTW": "最低需求等級: ",
        "enUS": "required level: "
    },
    "WEAPON" : {
        "zhCN": "武器",
        "zhTW": "武器",
        "enUS": "Weapon"
    },
    "HELM" : {
        "zhCN": "护甲",
        "zhTW": "護甲",
        "enUS": "Armor"
    },
    "SHIELD" : {
        "zhCN": "盾牌",
        "zhTW": "盾牌",
        "enUS": "Shield"
    },
    "SECONDS" : {
        "zhCN": "秒",
        "zhTW": "秒",
        "enUS": "sec."
    }
};

function saveLNG(value){
  LNG = value;
  saveData("LNG", value);
}

function loadLNG(){
  LNG = loadData("LNG") || LNG;
}