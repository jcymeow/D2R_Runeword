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
    "weap": { "type": null, "name": "武器", "parent": null },
    "mele": { "type": null, "name": "近戰武器", "parent": "weap" },
    "helm": { "type": EQUIPMENT_TYPE.HELM, "name": "頭盔", "parent": null },
    "tors": { "type": EQUIPMENT_TYPE.HELM, "name": "護甲", "parent": null },
    "shld": { "type": EQUIPMENT_TYPE.SHIELD, "name": "盾牌", "parent": null },
    "pala": { "type": EQUIPMENT_TYPE.SHIELD, "name": "聖騎盾", "parent": "shld" },
    "miss": { "type": EQUIPMENT_TYPE.WEAPON, "name": "弓/弩/亚马逊弓", "parent": "weap" },
    "swor": { "type": EQUIPMENT_TYPE.WEAPON, "name": "刀劍", "parent": "mele" },
    "knif": { "type": EQUIPMENT_TYPE.WEAPON, "name": "匕首", "parent": "mele" },
    "mace": { "type": EQUIPMENT_TYPE.WEAPON, "name": "釘錘", "parent": "mele" },
    "hamm": { "type": EQUIPMENT_TYPE.WEAPON, "name": "重錘", "parent": "mele" },
    "axe": { "type": EQUIPMENT_TYPE.WEAPON, "name": "斧", "parent": "mele" },
    "club": { "type": EQUIPMENT_TYPE.WEAPON, "name": "短棒", "parent": "mele" },
    "pole": { "type": EQUIPMENT_TYPE.WEAPON, "name": "長柄武器", "parent": "mele" },
    "spea": { "type": EQUIPMENT_TYPE.WEAPON, "name": "長矛/亚马逊长矛", "parent": "mele" },
    "h2h": { "type": EQUIPMENT_TYPE.WEAPON, "name": "爪/拳刃", "parent": "mele" },
    "scep": { "type": EQUIPMENT_TYPE.WEAPON, "name": "權杖", "parent": "mele" },
    "wand": { "type": EQUIPMENT_TYPE.WEAPON, "name": "魔杖", "parent": "mele" },
    "staf": { "type": EQUIPMENT_TYPE.WEAPON, "name": "法杖", "parent": "mele" },
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
