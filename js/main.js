var six = ['能天使', '推进之王', '伊芙利特', '艾雅法拉', '安洁莉娜', '闪灵', '夜莺', '星熊', '塞雷娅', '银灰', '斯卡蒂', '陈', '黑', '赫拉格', '麦哲伦', '莫斯提马', '煌'];
var five = ['白面鸮', '凛冬', '德克萨斯', '芙兰卡', '拉普兰德', '幽灵鲨', '蓝毒', '白金', '陨星', '天火', '梅尔', '赫默', '华法琳', '临光', '红', '雷蛇', '可颂', '普罗旺斯', '守林人', '崖心', '初雪', '真理', '空', '狮蝎', '食铁兽', '夜魔', '诗怀雅', '格劳克斯', '星极', '送葬人', '槐琥', '苇草', '布洛卡', '灰喉'];
var four = ['夜烟', '远山', '杰西卡', '流星', '白雪', '清道夫', '红豆', '杜宾', '缠丸', '霜叶', '慕斯', '砾', '暗索', '末药', '调香师', '角峰', '蛇屠箱', '古米', '深海色', '地灵', '阿消', '猎蜂', '格雷伊', '苏苏洛', '桃金娘', '红云', '梅', '安比尔'];
var three = ['芬', '香草', '翎羽', '玫兰莎', '卡缇', '米格鲁', '克洛丝', '炎熔', '芙蓉', '安塞尔', '史都华德', '梓兰', '空爆', '月见夜', '斑点', '泡普卡'];
var packageDesc = ['每月寻访礼包 (源石*42, 10连凭证*1)', '新人寻访组合包 (10连凭证*2)', '迎春组合包 (源石*90, 10连凭证*1)'];
var sstoneNum = [1, 7, 24, 50, 90, 185];
var sstoneMoney = [6, 30, 98, 198, 328, 648];
var sstoneFEx = [3, 12, 40, 80, 132, 260];
var sixActivity0 = ['陈', '推进之王'];
var fiveActivity0 = ['德克萨斯', '真理', '雷蛇'];
var sixActivity1 = ['斯卡蒂', '艾雅法拉'];
var fiveActivity1 = ['夜魔', '诗怀雅', '赫默'];
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
var SJManager = (function () {
    function SJManager() {
        var _this = this;
        this.isFirstBuySStone0 = true;
        this.isFirstBuySStone1 = true;
        this.isFirstBuySStone2 = true;
        this.isFirstBuySStone3 = true;
        this.isFirstBuySStone4 = true;
        this.isFirstBuySStone5 = true;
        this.isFirstBuy = function (type) {
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
                    if (_this.isFirstBuySStone0)
                        _this.AddStone(sstoneFEx[0]);
                    else
                        _this.AddStone(sstoneNum[0]);
                    _this.AddMoney(sstoneMoney[0]);
                    _this.isFirstBuySStone0 = false;
                    break;
                case 1:
                    if (_this.isFirstBuySStone1)
                        _this.AddStone(sstoneFEx[1]);
                    else
                        _this.AddStone(sstoneNum[1]);
                    _this.AddMoney(sstoneMoney[1]);
                    _this.isFirstBuySStone1 = false;
                    break;
                case 2:
                    if (_this.isFirstBuySStone2)
                        _this.AddStone(sstoneFEx[2]);
                    else
                        _this.AddStone(sstoneNum[2]);
                    _this.AddMoney(sstoneMoney[2]);
                    _this.isFirstBuySStone2 = false;
                    break;
                case 3:
                    if (_this.isFirstBuySStone3)
                        _this.AddStone(sstoneFEx[3]);
                    else
                        _this.AddStone(sstoneNum[3]);
                    _this.AddMoney(sstoneMoney[3]);
                    _this.isFirstBuySStone3 = false;
                    break;
                case 4:
                    if (_this.isFirstBuySStone4)
                        _this.AddStone(sstoneFEx[4]);
                    else
                        _this.AddStone(sstoneNum[4]);
                    _this.AddMoney(sstoneMoney[4]);
                    _this.isFirstBuySStone4 = false;
                    break;
                case 5:
                    if (_this.isFirstBuySStone5)
                        _this.AddStone(sstoneFEx[5]);
                    else
                        _this.AddStone(sstoneNum[5]);
                    _this.AddMoney(sstoneMoney[5]);
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
                    _this.AddMoney(128);
                    break;
                case 1:
                    _this.AddJade(12000);
                    _this.AddMoney(128);
                    break;
                case 2:
                    _this.AddStone(90);
                    _this.AddJade(6000);
                    _this.AddMoney(328);
                    break;
                default: throw new Error('不存在价格为 ' + money.toString() + ' 的组合包');
            }
        };
        this.AddStone = function (num) {
            SJManager.sStone += num;
        };
        this.AddMoney = function (num) {
            SJManager.costMoney += num;
        };
        this.AddJade = function (num) {
            SJManager.compoundJade += num;
        };
    }
    SJManager.compoundJade = 12000;
    SJManager.sStone = 56;
    SJManager.costMoney = 0;
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
var FindAgent = (function () {
    function FindAgent(isActivity, sixActProb, sixActAgentsArray, fiveActProb, fiveActAgentsArray, fourActProb, fourActAgentsArray, threeActProb, threeActAgentsArray) {
        var _this = this;
        if (isActivity === void 0) { isActivity = false; }
        if (sixActProb === void 0) { sixActProb = 50; }
        if (sixActAgentsArray === void 0) { sixActAgentsArray = []; }
        if (fiveActProb === void 0) { fiveActProb = 50; }
        if (fiveActAgentsArray === void 0) { fiveActAgentsArray = []; }
        if (fourActProb === void 0) { fourActProb = 50; }
        if (fourActAgentsArray === void 0) { fourActAgentsArray = []; }
        if (threeActProb === void 0) { threeActProb = 50; }
        if (threeActAgentsArray === void 0) { threeActAgentsArray = []; }
        this.rand = new Random();
        this.currSix = [];
        this.currFive = [];
        this.currFour = [];
        this.currThree = [];
        this.sixTimes = 0;
        this.fiveTimes = 0;
        this.fourTimes = 0;
        this.threeTimes = 0;
        this.currAgentLevel = 3;
        this.currAgent = '';
        this.currAgentArray = [];
        this.lastIsTen = false;
        this.tenAgentLevel = [];
        this.minGuNum = 10;
        this.DrawOnce = function () {
            _this.validDrawTimes++;
            var prob = _this.rand.Next(0, 100);
            var currSixProb = _this.AddSixProb() % 100;
            var currFiveProb = (_this.AddSixProb() + FindAgent.standrdFiveProb) % 100;
            var currFourProb = (_this.AddSixProb() + FindAgent.standrdFiveProb + FindAgent.standrdFourProb) % 100;
            if (_this.minGuNum > 1)
                _this.minGuNum--;
            else if (_this.minGuNum == 1) {
                if (_this.rand.Next(0, 3) == 3)
                    currSixProb = 100;
                else {
                    currSixProb = 0;
                    currFiveProb = 100;
                }
            }
            _this.lastIsTen = false;
            if (prob <= currSixProb) {
                _this.minGuNum = 0;
                _this.currAgentLevel = 6;
                _this.sixTimes++;
                _this.currAgent = _this.GetAgent(6, _this.isActivity && _this.rand.Next() == 0 && _this.actSix.length != 0);
                _this.validDrawTimes = 0;
                return _this.currAgent;
            }
            else if (prob <= currFiveProb) {
                _this.minGuNum = 0;
                _this.currAgentLevel = 5;
                _this.fiveTimes++;
                _this.currAgent = _this.GetAgent(5, _this.isActivity && _this.rand.Next() == 0 && _this.actFive.length != 0);
                return _this.currAgent;
            }
            else if (prob <= currFourProb) {
                _this.currAgentLevel = 4;
                _this.fourTimes++;
                _this.currAgent = _this.GetAgent(4, _this.isActivity && _this.rand.Next() == 0 && _this.actFour.length != 0);
                return _this.currAgent;
            }
            else {
                _this.currAgentLevel = 3;
                _this.threeTimes++;
                _this.currAgent = _this.GetAgent(3, _this.isActivity && _this.rand.Next() == 0 && _this.actThree.length != 0);
                return _this.currAgent;
            }
        };
        this.DrawTenth = function () {
            _this.tenAgentLevel.length = 0;
            _this.currAgentArray.length = 0;
            for (var i = 0; i < 10; i++) {
                _this.currAgentArray.push(_this.DrawOnce());
                _this.tenAgentLevel.push(_this.currAgentLevel);
            }
            _this.lastIsTen = true;
            return _this.currAgentArray;
        };
        this.AddSixProb = function () {
            var times = _this.validDrawTimes;
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
                        num = _this.actSix.length;
                        prob = _this.rand.Next(0, num - 1);
                        res = _this.actSix[prob];
                        break;
                    case 5:
                        num = _this.actFive.length;
                        prob = _this.rand.Next(0, num - 1);
                        res = _this.actFive[prob];
                        break;
                    case 4:
                        num = _this.actFour.length;
                        prob = _this.rand.Next(0, num - 1);
                        res = _this.actFour[prob];
                        break;
                    case 3:
                        num = _this.actThree.length;
                        prob = _this.rand.Next(0, num - 1);
                        res = _this.actThree[prob];
                        break;
                    default: throw new Error('错误，不存在低于3星的或高于6星的寻访干员');
                }
            }
            else {
                switch (stars) {
                    case 6:
                        num = _this.currSix.length;
                        prob = _this.rand.Next(0, num - 1);
                        res = _this.currSix[prob];
                        break;
                    case 5:
                        num = _this.currFive.length;
                        prob = _this.rand.Next(0, num - 1);
                        res = _this.currFive[prob];
                        break;
                    case 4:
                        num = _this.currFour.length;
                        prob = _this.rand.Next(0, num - 1);
                        res = _this.currFour[prob];
                        break;
                    case 3:
                        num = _this.currThree.length;
                        prob = _this.rand.Next(0, num - 1);
                        res = _this.currThree[prob];
                        break;
                    default: throw new Error('错误，不存在低于3星的或高于6星的寻访干员');
                }
            }
            return res;
        };
        this.GetSixTimes = function () {
            return _this.sixTimes;
        };
        this.GetFiveTimes = function () {
            return _this.fiveTimes;
        };
        this.GetFourTimes = function () {
            return _this.fourTimes;
        };
        this.GetThreeTimes = function () {
            return _this.threeTimes;
        };
        this.GetLastAgentLevel = function () {
            return _this.currAgentLevel;
        };
        this.GetLastAgentsLevelArray = function () {
            return _this.tenAgentLevel;
        };
        this.isLastTen = function () {
            return _this.lastIsTen;
        };
        this.GetCurrAgent = function () {
            return _this.currAgent;
        };
        this.GetCurrAgentArray = function () {
            return _this.currAgentArray;
        };
        this.GetMinGuNum = function () {
            return _this.minGuNum;
        };
        this.validDrawTimes = 0;
        this.isActivity = isActivity;
        this.sixActProbablity = sixActProb;
        this.fiveActProbablity = fiveActProb;
        this.fourActProbablity = fourActProb;
        this.threeActProbablity = threeActProb;
        this.actSix = sixActAgentsArray;
        this.actFive = fiveActAgentsArray;
        this.actFour = fourActAgentsArray;
        this.actThree = threeActAgentsArray;
        six.forEach(function (e) {
            if (!(e in sixActAgentsArray)) {
                _this.currSix.push(e);
            }
        });
        five.forEach(function (e) {
            if (!(e in fiveActAgentsArray)) {
                _this.currFive.push(e);
            }
        });
        four.forEach(function (e) {
            if (!(e in fourActAgentsArray)) {
                _this.currFour.push(e);
            }
        });
        three.forEach(function (e) {
            if (!(e in threeActAgentsArray)) {
                _this.currThree.push(e);
            }
        });
    }
    FindAgent.standrdSixProb = 2;
    FindAgent.standrdFiveProb = 8;
    FindAgent.standrdFourProb = 50;
    FindAgent.standrdThreeProb = 40;
    return FindAgent;
}());
var findAgent = new FindAgent(true, 50, sixActivity0, 50, fiveActivity0);
var sjManager = new SJManager();
var ViewControl = (function () {
    function ViewControl() {
    }
    ViewControl.SyncView = function (findAg) {
        $('#sstone').text(SJManager.sStone);
        $('#jade').text(SJManager.compoundJade);
        $('#tojade').text(SJManager.sStone * 180);
        $('#jade').text(SJManager.compoundJade);
        $('#sixnum').text(findAg.GetSixTimes());
        $('#fivenum').text(findAg.GetFiveTimes());
        $('#fournum').text(findAg.GetFourTimes());
        $('#threenum').text(findAg.GetThreeTimes());
        var allTimes = findAg.GetSixTimes() + findAg.GetFiveTimes() + findAg.GetFourTimes() + findAg.GetThreeTimes();
        $('#moneycost').text(allTimes.toString() + ' / ' + SJManager.costMoney.toString());
        if (findAg.GetMinGuNum() == 0)
            $('#tips').text('保底已出');
        else
            $('#tips').text(findAg.GetMinGuNum() + '次内必定获得5星及以上干员');
    };
    ViewControl.ShowImg = function (findAg) {
        if (!findAg.isLastTen()) {
            $('#image-box').html('<img id="img-agent0" src="./img/' + findAg.GetLastAgentLevel().toString() + '/' + findAg.GetCurrAgent() + '.jpg" class="agen-img">');
        }
        else {
            var img0 = '<img id="img-agent0" src="./img/';
            var imgs = '';
            var LevelArray = findAg.GetLastAgentsLevelArray();
            var agents = findAg.GetCurrAgentArray();
            for (var i = 0; i < 10; i++) {
                imgs += (img0 + LevelArray[i].toString() + '/' + agents[i].toString() + '.jpg" class="agen-img">');
            }
            $('#image-box').html(imgs);
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
    try {
        ViewControl.HideRadio();
        if (SJManager.compoundJade - 600 < 0) {
            var needSStone = SJManager.CanCalsStoneJade(true);
            if (needSStone == -1)
                throw new Error('合成玉/源石不足');
            var result = confirm('是否要花费 ' + needSStone.toString() + ' 源石来兑换 ' + (needSStone * 180).toString() + ' 合成玉用来寻访？');
            if (result) {
                sjManager.SStoneToJade(needSStone);
                ViewControl.SyncView(findAgent);
            }
            else
                return;
        }
        SJManager.compoundJade -= 600;
        var currAgent = findAgent.DrawOnce();
        $('#resu').text(currAgent);
        ViewControl.SyncView(findAgent);
        ViewControl.ShowImg(findAgent);
    }
    catch (er) {
        alert(er.message);
    }
}
function DrawTenth() {
    try {
        ViewControl.HideRadio();
        if (SJManager.compoundJade - 6000 < 0) {
            var needSStone = SJManager.CanCalsStoneJade(false);
            if (needSStone == -1)
                throw new Error('合成玉/源石不足');
            var result = confirm('是否要花费 ' + needSStone.toString() + ' 源石来兑换 ' + (needSStone * 180).toString() + ' 合成玉用来寻访？');
            if (result) {
                sjManager.SStoneToJade(needSStone);
                ViewControl.SyncView(findAgent);
            }
            else
                return;
        }
        SJManager.compoundJade -= 6000;
        var currAgent = findAgent.DrawTenth();
        $('#resu').text(currAgent.toString());
        ViewControl.SyncView(findAgent);
        ViewControl.ShowImg(findAgent);
    }
    catch (er) {
        alert(er.message);
    }
}
function BuySStone(type) {
    try {
        var num = void 0;
        if (sjManager.isFirstBuy(type))
            num = sstoneFEx[type];
        else
            num = sstoneNum[type];
        var result = confirm('是否要花费 ' + sstoneMoney[type].toString() + ' 元来购买' + num.toString() + ' 源石？');
        if (!result)
            return;
        if (sjManager.isFirstBuy(type))
            ViewControl.CloseFirstEx(type);
        sjManager.BuySStone(type);
        ViewControl.SyncView(findAgent);
    }
    catch (er) {
        alert(er.message);
    }
}
function BuyPackage(money, type) {
    try {
        var result = confirm('是否花费' + money.toString() + '元购买 ' + packageDesc[type] + ' ?');
        if (!result)
            return;
        sjManager.BuyPackage(money, type);
        ViewControl.ClosePackage(type);
        ViewControl.SyncView(findAgent);
    }
    catch (er) {
        alert(er.message);
    }
}
function ConvertStoneToJade() {
    try {
        var num = parseInt(prompt("请输入您想要兑换的源石数量：", "1"));
        if (isNaN(num))
            num = 1;
        var result = confirm('是否要花费 ' + num.toString() + ' 源石来兑换' + (num * 180).toString() + ' 合成玉？');
        if (!result)
            return;
        sjManager.SStoneToJade(num);
        ViewControl.SyncView(findAgent);
    }
    catch (er) {
        alert(er.message);
    }
}
function RadioChange() {
    if ($('#rad0').prop('checked')) {
        findAgent = new FindAgent(true, 50, sixActivity0, 50, fiveActivity0);
    }
    else if ($('#rad1').prop('checked')) {
        findAgent = new FindAgent(true, 50, sixActivity1, 50, fiveActivity1);
    }
}
//# sourceMappingURL=main.js.map