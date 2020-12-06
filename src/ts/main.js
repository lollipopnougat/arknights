"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../css/style.css");
var $ = require('jquery');
var six = ['能天使', '推进之王', '伊芙利特', '艾雅法拉', '安洁莉娜', '闪灵', '夜莺', '星熊', '塞雷娅', '银灰', '斯卡蒂', '陈', '黑', '赫拉格', '麦哲伦', '莫斯提马', '煌', '阿', '刻俄柏', '风笛', '傀影', '温蒂', '早露', '铃兰', '棘刺', '森蚺', '史尔特尔', '瑕光'];
var five = ['白面鸮', '凛冬', '德克萨斯', '芙兰卡', '拉普兰德', '幽灵鲨', '蓝毒', '白金', '陨星', '天火', '梅尔', '赫默', '华法琳', '临光', '红', '雷蛇', '可颂', '普罗旺斯', '守林人', '崖心', '初雪', '真理', '空', '狮蝎', '食铁兽', '夜魔', '诗怀雅', '格劳克斯', '星极', '送葬人', '槐琥', '苇草', '布洛卡', '灰喉', '吽', '惊蛰', '慑砂', '巫恋', '极境', '月禾', '石棉', '莱恩哈特', '蜜蜡', '贾维', '安哲拉', '燧石', '四月', '奥斯塔'];
var four = ['夜烟', '远山', '杰西卡', '流星', '白雪', '清道夫', '红豆', '杜宾', '缠丸', '霜叶', '慕斯', '砾', '暗索', '末药', '调香师', '角峰', '蛇屠箱', '古米', '深海色', '地灵', '阿消', '猎蜂', '格雷伊', '苏苏洛', '桃金娘', '红云', '梅', '安比尔', '宴', '刻刀', '波登可', '卡达', '孑', '酸糖', '芳汀', '泡泡'];
var three = ['芬', '香草', '翎羽', '玫兰莎', '卡缇', '米格鲁', '克洛丝', '炎熔', '芙蓉', '安塞尔', '史都华德', '梓兰', '空爆', '月见夜', '斑点', '泡普卡'];
var packageDesc = ['每月寻访礼包 (源石*42, 10连凭证*1)', '新人寻访组合包 (10连凭证*2)', '感谢庆典备战包 (源石*90, 10连凭证*1)', '月卡 (6源石+每天200合成玉)'];
var sstoneNum = [1, 7, 24, 50, 90, 185];
var sstoneMoney = [6, 30, 98, 198, 328, 648];
var sstoneFEx = [3, 12, 40, 80, 132, 260];
var activityNum = 2;
var act0Title = '常驻标准寻访';
var act1Title = '勿忘我';
var act2Title = '联合行动';
var sixActivity0 = ['能天使', '安洁莉娜'];
var fiveActivity0 = ['德克萨斯', '初雪', '断崖'];
var fourActivity0 = [];
var threeActivity0 = [];
var sixActivity1 = ['迷迭香', '泥岩'];
var fiveActivity1 = ['絮雨'];
var fourActivity1 = ['杰克'];
var threeActivity1 = [];
var sixActivity2 = ['刻俄柏', '阿', '风笛', '星熊'];
var fiveActivity2 = ['蓝毒', '华法琳', '真理', '星极', '布洛卡', '石棉'];
var fourActivity2 = [];
var threeActivity2 = [];
var act0 = {
    six: sixActivity0,
    five: fiveActivity0,
    four: fourActivity0,
    three: threeActivity0
};
var act0Prob = {
    six: 50,
    five: 50,
    four: 0,
    three: 0
};
var act1 = {
    six: sixActivity1,
    five: fiveActivity1,
    four: fourActivity1,
    three: threeActivity1
};
var act2 = {
    six: sixActivity2,
    five: fiveActivity2,
    four: fourActivity2,
    three: threeActivity2
};
var act1Prob = {
    six: 70,
    five: 50,
    four: 20,
    three: 0
};
var act2Prob = {
    six: 50,
    five: 50,
    four: 0,
    three: 0
};
var player;
var Random = (function () {
    function Random() {
        this.Next = function (min, max) {
            if (min === void 0) { min = 0; }
            if (max === void 0) { max = 1; }
            var range = max - min;
            var ranValue = min + Math.round(Math.random() * range);
            return ranValue;
        };
    }
    return Random;
}());
var Counter = (function () {
    function Counter() {
        var _this = this;
        this.Spend = function (name, money) {
            _this.SpendMoney += money;
            if (_this.SpendData.hasOwnProperty(money + "\u5143" + name)) {
                _this.SpendData[money + "\u5143" + name] += 1;
            }
            else {
                _this.SpendData[money + "\u5143" + name] = 1;
            }
        };
        this.AddSix = function (val) {
            _this.FindTimes++;
            _this.FindSix.push(val);
        };
        this.AddFive = function (val) {
            _this.FindTimes++;
            _this.FindFive.push(val);
        };
        this.AddFour = function (val) {
            _this.FindTimes++;
            _this.FindFour.push(val);
        };
        this.AddThree = function (val) {
            _this.FindTimes++;
            _this.FindThree.push(val);
        };
        this.GetTimes = function () {
            return _this.FindTimes;
        };
        this.GetSix = function () {
            return _this.FindSix;
        };
        this.GetFive = function () {
            return _this.FindFive;
        };
        this.GetFour = function () {
            return _this.FindFour;
        };
        this.GetThree = function () {
            return _this.FindThree;
        };
        this.GetSpendingData = function () {
            return _this.SpendData;
        };
        this.GetSpendingMoney = function () {
            return _this.SpendMoney;
        };
        this.FindTimes = 0;
        this.FindSix = [];
        this.FindFive = [];
        this.FindFour = [];
        this.FindThree = [];
        this.SpendData = {};
        this.SpendMoney = 0;
    }
    return Counter;
}());
var SJManager = (function () {
    function SJManager(count) {
        var _this = this;
        this.isFirstBuySStone0 = true;
        this.isFirstBuySStone1 = true;
        this.isFirstBuySStone2 = true;
        this.isFirstBuySStone3 = true;
        this.isFirstBuySStone4 = true;
        this.isFirstBuySStone5 = true;
        this.IsFirstBuy = function (type) {
            switch (type) {
                case 0: return _this.isFirstBuySStone0;
                case 1: return _this.isFirstBuySStone1;
                case 2: return _this.isFirstBuySStone2;
                case 3: return _this.isFirstBuySStone3;
                case 4: return _this.isFirstBuySStone4;
                case 5: return _this.isFirstBuySStone5;
                default: throw new Error('不存在这样的的源石商品');
            }
        };
        this.BuySStone = function (type) {
            switch (type) {
                case 0:
                    if (_this.isFirstBuySStone0) {
                        _this.AddStone(sstoneFEx[0]);
                        _this.counter.Spend(sstoneFEx[0] + " \u6E90\u77F3", sstoneMoney[0]);
                    }
                    else {
                        _this.AddStone(sstoneNum[0]);
                        _this.counter.Spend(sstoneNum[0] + " \u6E90\u77F3", sstoneMoney[0]);
                    }
                    _this.isFirstBuySStone0 = false;
                    break;
                case 1:
                    if (_this.isFirstBuySStone1) {
                        _this.AddStone(sstoneFEx[1]);
                        _this.counter.Spend(sstoneFEx[1] + " \u6E90\u77F3", sstoneMoney[1]);
                    }
                    else {
                        _this.AddStone(sstoneNum[1]);
                        _this.counter.Spend(sstoneNum[1] + " \u6E90\u77F3", sstoneMoney[1]);
                    }
                    _this.isFirstBuySStone1 = false;
                    break;
                case 2:
                    if (_this.isFirstBuySStone2) {
                        _this.AddStone(sstoneFEx[2]);
                        _this.counter.Spend(sstoneFEx[2] + " \u6E90\u77F3", sstoneMoney[2]);
                    }
                    else {
                        _this.AddStone(sstoneNum[2]);
                        _this.counter.Spend(sstoneNum[2] + " \u6E90\u77F3", sstoneMoney[2]);
                    }
                    _this.isFirstBuySStone2 = false;
                    break;
                case 3:
                    if (_this.isFirstBuySStone3) {
                        _this.AddStone(sstoneFEx[3]);
                        _this.counter.Spend(sstoneFEx[3] + " \u6E90\u77F3", sstoneMoney[3]);
                    }
                    else {
                        _this.AddStone(sstoneNum[3]);
                        _this.counter.Spend(sstoneNum[3] + " \u6E90\u77F3", sstoneMoney[3]);
                    }
                    _this.isFirstBuySStone3 = false;
                    break;
                case 4:
                    if (_this.isFirstBuySStone4) {
                        _this.AddStone(sstoneFEx[4]);
                        _this.counter.Spend(sstoneFEx[4] + " \u6E90\u77F3", sstoneMoney[4]);
                    }
                    else {
                        _this.AddStone(sstoneNum[4]);
                        _this.counter.Spend(sstoneNum[4] + " \u6E90\u77F3", sstoneMoney[4]);
                    }
                    _this.isFirstBuySStone4 = false;
                    break;
                case 5:
                    if (_this.isFirstBuySStone5) {
                        _this.AddStone(sstoneFEx[5]);
                        _this.counter.Spend(sstoneFEx[5] + " \u6E90\u77F3", sstoneMoney[5]);
                    }
                    else {
                        _this.AddStone(sstoneNum[5]);
                        _this.counter.Spend(sstoneNum[5] + " \u6E90\u77F3", sstoneMoney[5]);
                    }
                    _this.isFirstBuySStone5 = false;
                    break;
                default: throw new Error('不存在价格为 ' + sstoneMoney[type].toString() + ' 的源石商品');
            }
        };
        this.SStoneToJade = function (stonenum) {
            if (stonenum === void 0) { stonenum = 0; }
            if (stonenum > SJManager.sStone)
                throw new Error('兑换失败：源石不足');
            SJManager.sStone -= stonenum;
            SJManager.compoundJade += stonenum * 180;
        };
        this.BuyPackage = function (money, type) {
            switch (type) {
                case 0:
                    _this.AddStone(42);
                    _this.AddJade(6000);
                    _this.counter.Spend('每月寻访礼包', 168);
                    break;
                case 1:
                    _this.AddJade(12000);
                    _this.counter.Spend('新人寻访礼包', 128);
                    break;
                case 2:
                    _this.AddStone(90);
                    _this.AddJade(6000);
                    _this.counter.Spend('周年组合包', 328);
                    break;
                case 3:
                    _this.AddStone(6);
                    _this.counter.Spend('月卡', 30);
                    _this.AddJade(6000);
                    break;
                default: throw new Error('不存在价格为 ' + money.toString() + ' 的组合包');
            }
        };
        this.AddStone = function (num) {
            SJManager.sStone += num;
        };
        this.AddJade = function (num) {
            SJManager.compoundJade += num;
        };
        this.counter = count;
    }
    SJManager.compoundJade = 12000;
    SJManager.sStone = 56;
    SJManager.CanCalsStoneJade = function (onceMode) {
        if (onceMode === void 0) { onceMode = true; }
        var ssnum = SJManager.sStone;
        var tmpJade = SJManager.compoundJade;
        var needsstone = 0;
        if (onceMode) {
            while (ssnum > 0) {
                tmpJade += 180;
                ssnum--;
                needsstone++;
                if (tmpJade >= 600)
                    return needsstone;
            }
        }
        else {
            while (ssnum > 0) {
                tmpJade += 180;
                ssnum--;
                needsstone++;
                if (tmpJade >= 6000)
                    return needsstone;
            }
        }
        return -1;
    };
    return SJManager;
}());
var HeadHunter = (function () {
    function HeadHunter(isAct, count, actAgent, huntProb) {
        var _this = this;
        this.minFloor = 10;
        this.AddSixProb = function () {
            var times = _this.validSixTimes;
            var pro = 2;
            while (times - 50 >= 0) {
                pro += 2;
                times -= 50;
            }
            return pro;
        };
        this.GetAgent = function (stars, isAct) {
            var num;
            var res;
            var prob;
            if (isAct) {
                switch (stars) {
                    case 6:
                        num = _this.activityAgents.six.length;
                        prob = _this.rand.Next(0, num - 1);
                        res = _this.activityAgents.six[prob];
                        break;
                    case 5:
                        num = _this.activityAgents.five.length;
                        prob = _this.rand.Next(0, num - 1);
                        res = _this.activityAgents.five[prob];
                        break;
                    case 4:
                        num = _this.activityAgents.four.length;
                        prob = _this.rand.Next(0, num - 1);
                        res = _this.activityAgents.four[prob];
                        break;
                    case 3:
                        num = _this.activityAgents.three.length;
                        prob = _this.rand.Next(0, num - 1);
                        res = _this.activityAgents.three[prob];
                        break;
                    default: throw new Error('错误，不存在低于3星的或高于6星的寻访干员');
                }
            }
            else {
                switch (stars) {
                    case 6:
                        num = _this.normalAgents.six.length;
                        prob = _this.rand.Next(0, num - 1);
                        res = _this.normalAgents.six[prob];
                        break;
                    case 5:
                        num = _this.normalAgents.five.length;
                        prob = _this.rand.Next(0, num - 1);
                        res = _this.normalAgents.five[prob];
                        break;
                    case 4:
                        num = _this.normalAgents.four.length;
                        prob = _this.rand.Next(0, num - 1);
                        res = _this.normalAgents.four[prob];
                        break;
                    case 3:
                        num = _this.normalAgents.three.length;
                        prob = _this.rand.Next(0, num - 1);
                        res = _this.normalAgents.three[prob];
                        break;
                    default: throw new Error('错误，不存在低于3星的或高于6星的寻访干员');
                }
            }
            return res;
        };
        this.HuntOnce = function () {
            _this.validSixTimes++;
            var prob = _this.rand.Next(0, 100);
            var currSixProb = _this.AddSixProb() % 100;
            var currFiveProb = (_this.AddSixProb() + 8) % 100;
            var currFourProb = (_this.AddSixProb() + 8 + 50) % 100;
            if (_this.minFloor > 1)
                _this.minFloor--;
            else if (_this.minFloor == 1) {
                if (_this.rand.Next(0, 3) == 3)
                    currSixProb = 100;
                else {
                    currSixProb = 0;
                    currFiveProb = 100;
                }
            }
            var res;
            if (prob <= currSixProb) {
                _this.minFloor = 0;
                var res_name = _this.GetAgent(6, _this.isActivity && _this.rand.Next(0, 100) <= _this.huntProb.six && _this.activityAgents.six.length != 0);
                _this.validSixTimes = 0;
                _this.counter.AddSix(res_name);
                res = {
                    star: 6,
                    name: res_name
                };
                return res;
            }
            else if (prob <= currFiveProb) {
                _this.minFloor = 0;
                var res_name = _this.GetAgent(5, _this.isActivity && _this.rand.Next(0, 100) <= _this.huntProb.five && _this.activityAgents.five.length != 0);
                _this.counter.AddFive(res_name);
                res = {
                    star: 5,
                    name: res_name
                };
                return res;
            }
            else if (prob <= currFourProb) {
                var res_name = _this.GetAgent(4, _this.isActivity && _this.rand.Next(0, 100) <= _this.huntProb.four && _this.activityAgents.four.length != 0);
                _this.counter.AddFour(res_name);
                res = {
                    star: 4,
                    name: res_name
                };
                return res;
            }
            else {
                var res_name = _this.GetAgent(3, _this.isActivity && _this.rand.Next(0, 100) <= _this.huntProb.three && _this.activityAgents.three.length != 0);
                _this.counter.AddThree(res_name);
                res = {
                    star: 3,
                    name: res_name
                };
                return res;
            }
        };
        this.DrawTenth = function () {
            var resArray = [];
            for (var i = 0; i < 10; i++) {
                resArray.push(_this.HuntOnce());
            }
            return resArray;
        };
        this.GetValidSixTimes = function () {
            return _this.validSixTimes;
        };
        this.GetMinFloor = function () {
            return _this.minFloor;
        };
        this.normalAgents = {
            six: six,
            five: five,
            four: four,
            three: three
        };
        this.activityAgents = actAgent;
        this.huntProb = huntProb;
        this.validSixTimes = 0;
        this.rand = new Random();
        this.isActivity = isAct;
        this.counter = count;
    }
    return HeadHunter;
}());
var counter = new Counter();
var headHunter = new HeadHunter(true, counter, act0, act0Prob);
var sjManager = new SJManager(counter);
var ViewControl = (function () {
    function ViewControl() {
    }
    ViewControl.ViewSync = function (minFloor) {
        $('#sstone').text(SJManager.sStone);
        $('#jade').text(SJManager.compoundJade);
        $('#tojade').text(SJManager.sStone * 180);
        $('#jade').text(SJManager.compoundJade);
        $('#sixnum').text(counter.GetSix().length);
        $('#fivenum').text(counter.GetFive().length);
        $('#fournum').text(counter.GetFour().length);
        $('#threenum').text(counter.GetThree().length);
        $('#moneycost').text(counter.GetTimes() + " / " + counter.GetSpendingMoney());
        if (minFloor == 0) {
            $('#tips').text('保底已出');
        }
        else {
            $('#tips').text(minFloor + "\u6B21\u5185\u5FC5\u5B9A\u83B7\u5F975\u661F\u53CA\u4EE5\u4E0A\u5E72\u5458");
        }
    };
    ViewControl.ShowRes = function (res) {
        var pic_box = $('#image-box');
        pic_box.empty();
        if (res instanceof Array) {
            for (var i in res) {
                var pic_tmp = $('<img>', {
                    id: "img-agent" + i,
                    src: "./images/" + res[i].star + "/" + res[i].name + ".jpg",
                    class: 'agen-img'
                });
                pic_box.append(pic_tmp);
            }
        }
        else {
            var pic_tmp = $('<img>', {
                id: "img-agent0",
                src: "./images/" + res.star + "/" + res.name + ".jpg",
                class: 'agen-img'
            });
            $('#image-box').append(pic_tmp);
        }
    };
    ViewControl.CloseFirstEx = function (type) {
        $('#buy-sstone' + type.toString()).text('氪金' + sstoneMoney[type].toString() + '元买' + sstoneNum[type] + '源石');
    };
    ViewControl.ClosePackage = function (type) {
        $('#buy-package' + type.toString()).attr({ "disabled": "disabled" });
        $('#buy-package' + type.toString()).hover(function () {
            $('#buy-package' + type.toString()).css('background-color', '#aaa');
        });
        $('#buy-package' + type.toString()).css('background-color', '#aaa');
        $('#buy-package' + type.toString()).css('cursor', 'no-drop');
    };
    ViewControl.HideRadio = function () {
        if ($('#rad0').prop('checked')) {
            $('#rad1').css('display', 'none');
        }
        else if ($('#rad1').prop('checked')) {
            $('#rad0').css('display', 'none');
        }
    };
    return ViewControl;
}());
function DrawOnce() {
    if (player[0].paused) {
        player[0].play();
    }
    try {
        ViewControl.HideRadio();
        if (SJManager.compoundJade - 600 < 0) {
            var needSStone = SJManager.CanCalsStoneJade(true);
            if (needSStone == -1)
                throw new Error('合成玉/源石不足');
            var result = confirm('是否要花费 ' + needSStone.toString() + ' 源石来兑换 ' + (needSStone * 180).toString() + ' 合成玉用来寻访？');
            if (result) {
                sjManager.SStoneToJade(needSStone);
                ViewControl.ViewSync(headHunter.GetMinFloor());
            }
            else
                return;
        }
        SJManager.compoundJade -= 600;
        var res = headHunter.HuntOnce();
        $('#resu').text(res.name);
        ViewControl.ViewSync(headHunter.GetMinFloor());
        ViewControl.ShowRes(res);
    }
    catch (er) {
        alert(er.message);
    }
}
function DrawTenth() {
    if (player[0].paused) {
        player[0].play();
    }
    try {
        ViewControl.HideRadio();
        if (SJManager.compoundJade - 6000 < 0) {
            var needSStone = SJManager.CanCalsStoneJade(false);
            if (needSStone == -1)
                throw new Error('合成玉/源石不足');
            var result = confirm('是否要花费 ' + needSStone.toString() + ' 源石来兑换 ' + (needSStone * 180).toString() + ' 合成玉用来寻访？');
            if (result) {
                sjManager.SStoneToJade(needSStone);
                ViewControl.ViewSync(headHunter.GetMinFloor());
            }
            else
                return;
        }
        SJManager.compoundJade -= 6000;
        var res = headHunter.DrawTenth();
        var res_str = '';
        for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
            var i = res_1[_i];
            res_str += i.name + " ";
        }
        $('#resu').text(res_str);
        ViewControl.ViewSync(headHunter.GetMinFloor());
        ViewControl.ShowRes(res);
    }
    catch (er) {
        alert(er.message);
    }
}
function BuySStone(type) {
    if (player[0].paused) {
        player[0].play();
    }
    try {
        var num = void 0;
        if (sjManager.IsFirstBuy(type))
            num = sstoneFEx[type];
        else
            num = sstoneNum[type];
        var result = confirm('是否要花费 ' + sstoneMoney[type].toString() + ' 元来购买' + num.toString() + ' 源石？');
        if (!result)
            return;
        if (sjManager.IsFirstBuy(type))
            ViewControl.CloseFirstEx(type);
        sjManager.BuySStone(type);
        ViewControl.ViewSync(headHunter.GetMinFloor());
    }
    catch (er) {
        alert(er.message);
    }
}
function BuyPackage(money, type) {
    if (player[0].paused) {
        player[0].play();
    }
    try {
        var result = confirm('是否花费' + money.toString() + '元购买 ' + packageDesc[type] + ' ?');
        if (!result)
            return;
        sjManager.BuyPackage(money, type);
        ViewControl.ClosePackage(type);
        ViewControl.ViewSync(headHunter.GetMinFloor());
    }
    catch (er) {
        alert(er.message);
    }
}
function ConvertStoneToJade() {
    if (player[0].paused) {
        player[0].play();
    }
    try {
        var num = parseInt(prompt("请输入您想要兑换的源石数量：", "1"));
        if (isNaN(num))
            num = 1;
        var result = confirm('是否要花费 ' + num.toString() + ' 源石来兑换' + (num * 180).toString() + ' 合成玉？');
        if (!result)
            return;
        sjManager.SStoneToJade(num);
        ViewControl.ViewSync(headHunter.GetMinFloor());
    }
    catch (er) {
        alert(er.message);
    }
}
function SetHunter() {
    if (player[0].paused) {
        player[0].play();
    }
    if ($('#selector').val() == '0') {
        headHunter = new HeadHunter(true, counter, act0, act0Prob);
    }
    else if ($('#selector').val() == '1') {
        headHunter = new HeadHunter(true, counter, act1, act1Prob);
    }
    else {
        headHunter = new HeadHunter(true, counter, act2, act2Prob);
    }
}
function ShowHis(type) {
    if (player[0].paused) {
        player[0].play();
    }
    var agent_str = '';
    var agent_map = {};
    var agent_array;
    switch (type.data.type) {
        case 6:
            agent_array = counter.GetSix();
            break;
        case 5:
            agent_array = counter.GetFive();
            break;
        case 4:
            agent_array = counter.GetFour();
            break;
        case 3:
            agent_array = counter.GetThree();
            break;
        default:
            alert('寻访不存在此种干员');
            return;
    }
    if (agent_array.length == 0) {
        alert("\u6CA1\u6709\u62BD\u5230" + type.data.type + "\u661F\u5E72\u5458");
        return;
    }
    for (var _i = 0, agent_array_1 = agent_array; _i < agent_array_1.length; _i++) {
        var i = agent_array_1[_i];
        if (agent_map.hasOwnProperty(i)) {
            agent_map[i] += 1;
        }
        else {
            agent_map[i] = 1;
        }
    }
    for (var i in agent_map) {
        agent_str += i + ": " + agent_map[i] + "\n";
    }
    alert(agent_str);
}
window.onload = function () {
    player = $('#bgm');
    $('#CSTJ').on('click', ConvertStoneToJade);
    $('#show-panel1').on('click', function () {
        if (player[0].paused) {
            player[0].play();
        }
        $('#panel1').fadeIn();
    });
    $('#show-panel2').on('click', function () {
        if (player[0].paused) {
            player[0].play();
        }
        $('#panel2').fadeIn();
    });
    $('#close-panel1').on('click', function () {
        if (player[0].paused) {
            player[0].play();
        }
        $('#panel1').fadeOut();
    });
    $('#close-panel2').on('click', function () {
        if (player[0].paused) {
            player[0].play();
        }
        $('#panel2').fadeOut();
    });
    $('#selector').on('change', SetHunter);
    var text = act0Title + '(';
    if (sixActivity0.length != 0) {
        text += sixActivity0.join(' ') + ' ';
    }
    if (fiveActivity0.length != 0) {
        text += fiveActivity0.join(' ') + ' ';
    }
    if (fourActivity0.length != 0) {
        text += fourActivity0.join(' ') + ' ';
    }
    if (threeActivity0.length != 0) {
        text += threeActivity0.join(' ') + ' ';
    }
    text += ')';
    $('#opt0').text(text);
    text = act1Title + '(';
    if (sixActivity1.length != 0) {
        text += sixActivity1.join(' ') + ' ';
    }
    if (fiveActivity1.length != 0) {
        text += fiveActivity1.join(' ') + ' ';
    }
    if (fourActivity1.length != 0) {
        text += fourActivity1.join(' ') + ' ';
    }
    if (threeActivity1.length != 0) {
        text += threeActivity1.join(' ') + ' ';
    }
    text += ')';
    $('#opt1').text(text);
    if (activityNum == 2) {
        text = act2Title + '(';
        if (sixActivity2.length != 0) {
            text += sixActivity2.join(' ') + ' ';
        }
        if (fiveActivity2.length != 0) {
            text += fiveActivity2.join(' ') + ' ';
        }
        if (fourActivity2.length != 0) {
            text += fourActivity2.join(' ') + ' ';
        }
        if (threeActivity2.length != 0) {
            text += threeActivity2.join(' ') + ' ';
        }
        text += ')';
        $('#opt2').show();
        $('#opt2').text(text);
    }
    var _loop_1 = function (i) {
        $("#buy-sstone" + i).on('click', function () { BuySStone(i); });
    };
    for (var i = 0; i < 6; i++) {
        _loop_1(i);
    }
    $('#buy-package0').on('click', function () { BuyPackage(168, 0); });
    $('#buy-package1').on('click', function () { BuyPackage(128, 1); });
    $('#buy-package2').on('click', function () { BuyPackage(328, 2); });
    $('#buy-package3').on('click', function () { BuyPackage(30, 3); });
    $('#DO').on('click', DrawOnce);
    $('#DT').on('click', DrawTenth);
    $('#sixnum').on('click', '', { type: 6 }, ShowHis);
    $('#fivenum').on('click', '', { type: 5 }, ShowHis);
    $('#fournum').on('click', '', { type: 4 }, ShowHis);
    $('#threenum').on('click', '', { type: 3 }, ShowHis);
    $('#moneycost').on('click', function () {
        if (player[0].paused) {
            player[0].play();
        }
        var cost_data = counter.GetSpendingData();
        var cost_str = '';
        if (JSON.stringify(cost_data) == '{}') {
            alert('您还没氪金呢');
            return;
        }
        for (var i in cost_data) {
            cost_str += i + ": " + cost_data[i] + "\n";
        }
        alert(cost_str);
    });
};
//# sourceMappingURL=main.js.map