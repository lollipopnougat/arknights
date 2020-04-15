import "../css/style.css";
var $ = require('jquery');
const six = ['能天使', '推进之王', '伊芙利特', '艾雅法拉', '安洁莉娜', '闪灵', '夜莺', '星熊', '塞雷娅', '银灰', '斯卡蒂', '陈', '黑', '赫拉格', '麦哲伦', '莫斯提马', '煌', '阿', '刻俄柏'];

const five = ['白面鸮', '凛冬', '德克萨斯', '芙兰卡', '拉普兰德', '幽灵鲨', '蓝毒', '白金', '陨星', '天火', '梅尔', '赫默', '华法琳', '临光', '红', '雷蛇', '可颂', '普罗旺斯', '守林人', '崖心', '初雪', '真理', '空', '狮蝎', '食铁兽', '夜魔', '诗怀雅', '格劳克斯', '星极', '送葬人', '槐琥', '苇草', '布洛卡', '灰喉', '吽', '惊蛰'];

const four = ['夜烟', '远山', '杰西卡', '流星', '白雪', '清道夫', '红豆', '杜宾', '缠丸', '霜叶', '慕斯', '砾', '暗索', '末药', '调香师', '角峰', '蛇屠箱', '古米', '深海色', '地灵', '阿消', '猎蜂', '格雷伊', '苏苏洛', '桃金娘', '红云', '梅', '安比尔'];

const three = ['芬', '香草', '翎羽', '玫兰莎', '卡缇', '米格鲁', '克洛丝', '炎熔', '芙蓉', '安塞尔', '史都华德', '梓兰', '空爆', '月见夜', '斑点', '泡普卡'];

const packageDesc = ['每月寻访礼包 (源石*42, 10连凭证*1)', '新人寻访组合包 (10连凭证*2)', '迎春组合包 (源石*90, 10连凭证*1)'];

const sstoneNum = [1, 7, 24, 50, 90, 185]; // 源石礼包中的源石数

const sstoneMoney = [6, 30, 98, 198, 328, 648]; // 源石礼包价格

const sstoneFEx = [3, 12, 40, 80, 132, 260]; // 首充源石礼包送的源石

const act0AgentLevel = {
    '6': 2,
    '5': 3,
    '4': 0,
    '3': 0
};

const act1AgentLevel = {
    '6': 1,
    '5': 2,
    '4': 1,
    '3': 0
};

const act0Title = '常驻标准寻访';

const act1Title = '草垛上的风笛声';

const sixActivity0 = ['陈', '闪灵']; // 活动卡池

const fiveActivity0 = ['可颂', '凛冬', '陨星'];

const sixActivity1 = ['风笛'];

const fiveActivity1 = ['慑砂', '凛冬'];

const fourActivity1 = ['宴'];


var player: JQuery<HTMLAudioElement>;

// const sixActivity1 = ['斯卡蒂', '艾雅法拉'];

// const fiveActivity1 = ['夜魔', '诗怀雅', '赫默'];

//const sixActivity1 = ['煌'];

//const fiveActivity1 = ['灰喉', '天火'];

//const fourActivity1 = ['安比尔'];
//var compoundJade = 12000;
//var sstone = 0;

class Random {
    constructor() {

    }

    public Next = (min: number = 0, max: number = 1): number => {
        let range = max - min;
        let ranValue = min + Math.round(Math.random() * range);
        return ranValue;
    }

}

class SJManager {
    public static compoundJade = 12000;
    public static sStone = 56;
    public static costMoney = 0;
    private isFirstBuySStone0: boolean = true;
    private isFirstBuySStone1: boolean = true;
    private isFirstBuySStone2: boolean = true;
    private isFirstBuySStone3: boolean = true;
    private isFirstBuySStone4: boolean = true;
    private isFirstBuySStone5: boolean = true;

    constructor() {

    }

    public isFirstBuy = (type: number): boolean => {
        switch (type) {
            case 0: return this.isFirstBuySStone0;
            case 1: return this.isFirstBuySStone1;
            case 2: return this.isFirstBuySStone2;
            case 3: return this.isFirstBuySStone3;
            case 4: return this.isFirstBuySStone4;
            case 5: return this.isFirstBuySStone5;
            default: throw new Error('不存在这样的的源石商品');
        }
    }

    public static CanCalsStoneJade = (onceMode: boolean = true): number => {
        let ssnum = SJManager.sStone;
        let tmpJade = SJManager.compoundJade;
        let needsstone = 0;
        if (onceMode) {

            while (ssnum > 0) {
                tmpJade += 180;
                ssnum--;
                needsstone++;
                if (tmpJade >= 600) return needsstone;
            }
        }
        else {
            while (ssnum > 0) {
                tmpJade += 180;
                ssnum--;
                needsstone++;
                if (tmpJade >= 6000) return needsstone;
            }
        }
        return -1;
    }

    public BuySStone = (type: number): void => {
        switch (type) {
            case 0: if (this.isFirstBuySStone0) this.AddStone(sstoneFEx[0]); else this.AddStone(sstoneNum[0]); this.AddMoney(sstoneMoney[0]); this.isFirstBuySStone0 = false; break;
            case 1: if (this.isFirstBuySStone1) this.AddStone(sstoneFEx[1]); else this.AddStone(sstoneNum[1]); this.AddMoney(sstoneMoney[1]); this.isFirstBuySStone1 = false; break;
            case 2: if (this.isFirstBuySStone2) this.AddStone(sstoneFEx[2]); else this.AddStone(sstoneNum[2]); this.AddMoney(sstoneMoney[2]); this.isFirstBuySStone2 = false; break;
            case 3: if (this.isFirstBuySStone3) this.AddStone(sstoneFEx[3]); else this.AddStone(sstoneNum[3]); this.AddMoney(sstoneMoney[3]); this.isFirstBuySStone3 = false; break;
            case 4: if (this.isFirstBuySStone4) this.AddStone(sstoneFEx[4]); else this.AddStone(sstoneNum[4]); this.AddMoney(sstoneMoney[4]); this.isFirstBuySStone4 = false; break;
            case 5: if (this.isFirstBuySStone5) this.AddStone(sstoneFEx[5]); else this.AddStone(sstoneNum[5]); this.AddMoney(sstoneMoney[5]); this.isFirstBuySStone5 = false; break;
            default: throw new Error('不存在价格为 ' + sstoneMoney[type].toString() + ' 的源石商品');
        }

    }

    public SStoneToJade = (stonenum: number = 0): void => {
        if (stonenum > SJManager.sStone) throw new Error('兑换失败：源石不足');
        SJManager.sStone -= stonenum;
        SJManager.compoundJade += stonenum * 180;

    }

    public BuyPackage = (money: number, type: number): void => {
        switch (type) {
            case 0: this.AddStone(42); this.AddJade(6000); this.AddMoney(128); break;
            case 1: this.AddJade(12000); this.AddMoney(128); break;
            case 2: this.AddStone(90); this.AddJade(6000); this.AddMoney(328); break;
            default: throw new Error('不存在价格为 ' + money.toString() + ' 的组合包');
        }

    }

    private AddStone = (num: number): void => {
        SJManager.sStone += num;
    }
    private AddMoney = (num: number): void => {
        SJManager.costMoney += num;
    }
    private AddJade = (num: number): void => {
        SJManager.compoundJade += num;
    }
}

class FindAgent {
    private rand = new Random();
    private validDrawTimes: number;
    private isActivity: boolean;
    private sixActProbablity: number;
    private fiveActProbablity: number;
    private fourActProbablity: number;
    private threeActProbablity: number;
    private static standrdSixProb = 2;
    private static standrdFiveProb = 8;
    private static standrdFourProb = 50;
    private static standrdThreeProb = 40;
    private currSix: string[] = [];
    private currFive: string[] = [];
    private currFour: string[] = [];
    private currThree: string[] = [];
    private actSix: string[];
    private actFive: string[];
    private actFour: string[];
    private actThree: string[];
    private sixTimes = 0;
    private fiveTimes = 0;
    private fourTimes = 0;
    private threeTimes = 0;
    private currAgentLevel = 3;
    private currAgent: string = '';
    private currAgentArray: string[] = [];
    private lastIsTen = false;
    private tenAgentLevel: number[] = [];
    private minGuNum = 10;
    constructor(isActivity: boolean = false,
        sixActProb: number = 50, sixActAgentsArray: string[] = [],
        fiveActProb = 50, fiveActAgentsArray: string[] = [],
        fourActProb: number = 50, fourActAgentsArray: string[] = [],
        threeActProb: number = 50, threeActAgentsArray: string[] = [], ) {
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

        six.forEach(e => {
            if (!(e in sixActAgentsArray)) {
                this.currSix.push(e);
            }
        });
        five.forEach(e => {
            if (!(e in fiveActAgentsArray)) {
                this.currFive.push(e);
            }
        });
        four.forEach(e => {
            if (!(e in fourActAgentsArray)) {
                this.currFour.push(e);
            }
        });
        three.forEach(e => {
            if (!(e in threeActAgentsArray)) {
                this.currThree.push(e);
            }
        });

    }

    public DrawOnce = (): string => {

        this.validDrawTimes++;
        //let currAgent: string;
        let prob = this.rand.Next(0, 100);
        //console.log('prob = ' + prob);
        //console.log('addsixprob = ' + this.AddSixProb());
        let currSixProb = this.AddSixProb() % 100;
        let currFiveProb = (this.AddSixProb() + FindAgent.standrdFiveProb) % 100;
        let currFourProb = (this.AddSixProb() + FindAgent.standrdFiveProb + FindAgent.standrdFourProb) % 100;
        //let currThreeProb = (this.AddSixProb() + FindAgent.standrdFiveProb + FindAgent.standrdFourProb + FindAgent.standrdThreeProb) % 100;
        if (this.minGuNum > 1) this.minGuNum--;
        else if (this.minGuNum == 1) {
            if (this.rand.Next(0, 3) == 3) currSixProb = 100;
            else {
                currSixProb = 0;
                currFiveProb = 100;
            }
        }
        this.lastIsTen = false;
        if (prob <= currSixProb) {
            this.minGuNum = 0;
            //console.log('抽6');
            this.currAgentLevel = 6;
            this.sixTimes++;
            this.currAgent = this.GetAgent(6, this.isActivity && this.rand.Next() == 0 && this.actSix.length != 0);
            this.validDrawTimes = 0;
            //console.log('当前抽到: ' + currAgent);
            return this.currAgent
        }
        else if (prob <= currFiveProb) {
            this.minGuNum = 0;
            //console.log('抽5');
            this.currAgentLevel = 5;
            this.fiveTimes++;
            this.currAgent = this.GetAgent(5, this.isActivity && this.rand.Next() == 0 && this.actFive.length != 0);
            //console.log('当前抽到: ' + currAgent);
            return this.currAgent;
        }
        else if (prob <= currFourProb) {
            this.currAgentLevel = 4;
            this.fourTimes++;
            //console.log('抽4');
            this.currAgent = this.GetAgent(4, this.isActivity && this.rand.Next() == 0 && this.actFour.length != 0);
            //console.log('当前抽到: ' + currAgent);
            return this.currAgent;
        }
        else {
            //console.log('抽3');
            this.currAgentLevel = 3;
            this.threeTimes++;
            this.currAgent = this.GetAgent(3, this.isActivity && this.rand.Next() == 0 && this.actThree.length != 0);
            //console.log('当前抽到: ' + currAgent);
            return this.currAgent;
        }

        //throw new Error('无匹配');

    }

    public DrawTenth = (): string[] => {
        //let currAgents: string[] = [];
        this.tenAgentLevel.length = 0;
        this.currAgentArray.length = 0;
        for (let i = 0; i < 10; i++) {
            this.currAgentArray.push(this.DrawOnce());
            this.tenAgentLevel.push(this.currAgentLevel);
        }
        this.lastIsTen = true;
        return this.currAgentArray;

    }

    private AddSixProb = (): number => {
        let times = this.validDrawTimes;
        let pro = 2;
        while (times - 50 >= 0) {
            pro += 2;
            times -= 50;
        }
        return pro;
    }

    private GetAgent = (stars: number, isAct: boolean): string => {
        let num;
        let res;
        let prob;
        // console.log(this.currSix);
        // console.log(this.currFive);
        // console.log(this.currFour);
        // console.log(this.currThree);
        if (isAct) {
            switch (stars) {
                case 6: num = this.actSix.length; prob = this.rand.Next(0, num - 1); res = this.actSix[prob]; break;
                case 5: num = this.actFive.length; prob = this.rand.Next(0, num - 1); res = this.actFive[prob]; break;
                case 4: num = this.actFour.length; prob = this.rand.Next(0, num - 1); res = this.actFour[prob]; break;
                case 3: num = this.actThree.length; prob = this.rand.Next(0, num - 1); res = this.actThree[prob]; break;
                default: throw new Error('错误，不存在低于3星的或高于6星的寻访干员');
            }
        }
        else {
            switch (stars) {
                case 6: num = this.currSix.length; prob = this.rand.Next(0, num - 1); res = this.currSix[prob]; break;
                case 5: num = this.currFive.length; prob = this.rand.Next(0, num - 1); res = this.currFive[prob]; break;
                case 4: num = this.currFour.length; prob = this.rand.Next(0, num - 1); res = this.currFour[prob]; break;
                case 3: num = this.currThree.length; prob = this.rand.Next(0, num - 1); res = this.currThree[prob]; break;
                default: throw new Error('错误，不存在低于3星的或高于6星的寻访干员');
            }
        }
        return res;
    }

    public GetSixTimes = (): number => {
        return this.sixTimes;
    }

    public GetFiveTimes = (): number => {
        return this.fiveTimes;
    }

    public GetFourTimes = (): number => {
        return this.fourTimes;
    }

    public GetThreeTimes = (): number => {
        return this.threeTimes;
    }

    public GetLastAgentLevel = (): number => {
        return this.currAgentLevel;
    }

    public GetLastAgentsLevelArray = (): number[] => {
        return this.tenAgentLevel;
    }

    public isLastTen = (): boolean => {
        return this.lastIsTen;
    }

    public GetCurrAgent = (): string => {
        return this.currAgent;
    }

    public GetCurrAgentArray = (): string[] => {
        return this.currAgentArray;
    }

    public GetMinGuNum = (): number => {
        return this.minGuNum;
    }
}

var findAgent = new FindAgent(true, 50, sixActivity0, 50, fiveActivity0);
var sjManager = new SJManager();

class ViewControl {
    public static SyncView = (findAg: FindAgent): void => {
        $('#sstone').text(SJManager.sStone);
        $('#jade').text(SJManager.compoundJade);
        $('#tojade').text(SJManager.sStone * 180);
        $('#jade').text(SJManager.compoundJade);
        $('#sixnum').text(findAg.GetSixTimes());
        $('#fivenum').text(findAg.GetFiveTimes());
        $('#fournum').text(findAg.GetFourTimes());
        $('#threenum').text(findAg.GetThreeTimes());
        let allTimes = findAg.GetSixTimes() + findAg.GetFiveTimes() + findAg.GetFourTimes() + findAg.GetThreeTimes();
        $('#moneycost').text(allTimes.toString() + ' / ' + SJManager.costMoney.toString());
        if (findAg.GetMinGuNum() == 0) $('#tips').text('保底已出');
        else $('#tips').text(findAg.GetMinGuNum() + '次内必定获得5星及以上干员');
    }

    public static ShowImg = (findAg: FindAgent): void => {
        if (!findAg.isLastTen()) {
            $('#image-box').html('<img id="img-agent0" src="./images/' + findAg.GetLastAgentLevel().toString() + '/' + findAg.GetCurrAgent() + '.jpg" class="agen-img">');
        }
        else {
            let img0 = '<img id="img-agent0" src="./images/';
            let imgs: string = '';
            let LevelArray = findAg.GetLastAgentsLevelArray();
            let agents = findAg.GetCurrAgentArray();
            for (let i = 0; i < 10; i++) {
                imgs += (img0 + LevelArray[i].toString() + '/' + agents[i].toString() + '.jpg" class="agen-img">');
            }
            $('#image-box').html(imgs);
            if ($('#bgm')) {
                $('')
            }
        }
    }



    public static CloseFirstEx = (type: number): void => {
        $('#buy-sstone' + type.toString()).text('氪金' + sstoneMoney[type].toString() + '元买' + sstoneNum[type] + '源石');
    }

    public static ClosePackage = (type: number): void => {
        $('#buy-package' + type.toString()).attr({ "disabled": "disabled" });
        $('#buy-package' + type.toString()).hover(() => {
            $('#buy-package' + type.toString()).css('background-color', '#aaa');
        });
        $('#buy-package' + type.toString()).css('background-color', '#aaa');
        $('#buy-package' + type.toString()).css('cursor', 'no-drop');
    }

    public static HideRadio = (): void => {
        if ($('#rad0').prop('checked')) {
            $('#rad1').css('display', 'none');
        }
        else if ($('#rad1').prop('checked')) {
            $('#rad0').css('display', 'none');
        }
    }


}



function DrawOnce() {
    if (player[0].paused) {
        player[0].play();
    }
    try {
        ViewControl.HideRadio();
        if (SJManager.compoundJade - 600 < 0) {
            let needSStone = SJManager.CanCalsStoneJade(true);
            if (needSStone == -1) throw new Error('合成玉/源石不足');
            let result = confirm('是否要花费 ' + needSStone.toString() + ' 源石来兑换 ' + (needSStone * 180).toString() + ' 合成玉用来寻访？');
            if (result) {
                sjManager.SStoneToJade(needSStone);
                ViewControl.SyncView(findAgent);
                //alert('兑换成功');

            }
            else return;
        }
        //console.log('点击了寻访一次');
        SJManager.compoundJade -= 600;
        let currAgent = findAgent.DrawOnce();
        $('#resu').text(currAgent);
        ViewControl.SyncView(findAgent);
        ViewControl.ShowImg(findAgent);
    }
    catch (er) {
        alert(er.message);
    }
    //console.log(currAgent);
}

function DrawTenth() {
    if (player[0].paused) {
        player[0].play();
    }
    //console.log('点击了寻访十次');
    try {
        ViewControl.HideRadio();
        if (SJManager.compoundJade - 6000 < 0) {
            let needSStone = SJManager.CanCalsStoneJade(false);
            if (needSStone == -1) throw new Error('合成玉/源石不足');
            let result = confirm('是否要花费 ' + needSStone.toString() + ' 源石来兑换 ' + (needSStone * 180).toString() + ' 合成玉用来寻访？');
            if (result) {
                sjManager.SStoneToJade(needSStone);
                ViewControl.SyncView(findAgent);
                //alert('兑换成功');
            }
            else return;
        }
        //console.log('点击了寻访10次');
        SJManager.compoundJade -= 6000;
        let currAgent = findAgent.DrawTenth();
        $('#resu').text(currAgent.toString());
        ViewControl.SyncView(findAgent);
        ViewControl.ShowImg(findAgent);
    }
    catch (er) {
        alert(er.message);
    }
    //console.log(currAgent);
}

function BuySStone(type: number) {
    if (player[0].paused) {
        player[0].play();
    }
    try {
        let num;
        if (sjManager.isFirstBuy(type)) num = sstoneFEx[type];
        else num = sstoneNum[type];
        let result = confirm('是否要花费 ' + sstoneMoney[type].toString() + ' 元来购买' + num.toString() + ' 源石？');
        if (!result) return;
        if (sjManager.isFirstBuy(type)) ViewControl.CloseFirstEx(type);
        sjManager.BuySStone(type);
        ViewControl.SyncView(findAgent);

    } catch (er) {
        alert(er.message);
    }

}

function BuyPackage(money: number, type: number) {
    if (player[0].paused) {
        player[0].play();
    }
    try {
        let result: boolean = confirm('是否花费' + money.toString() + '元购买 ' + packageDesc[type] + ' ?');
        if (!result) return;
        sjManager.BuyPackage(money, type);
        ViewControl.ClosePackage(type);
        ViewControl.SyncView(findAgent);
    } catch (er) {
        alert(er.message);
    }
}

function ConvertStoneToJade() {
    if (player[0].paused) {
        player[0].play();
    }
    try {
        let num = parseInt(prompt("请输入您想要兑换的源石数量：", "1"));
        if (isNaN(num)) num = 1;
        let result = confirm('是否要花费 ' + num.toString() + ' 源石来兑换' + (num * 180).toString() + ' 合成玉？');
        if (!result) return;
        sjManager.SStoneToJade(num);
        ViewControl.SyncView(findAgent);
    }
    catch (er) {
        alert(er.message);
    }
}

function RadioChange() {
    if (player[0].paused) {
        player[0].play();
    }
    if ($('#rad0').prop('checked')) {
        findAgent = new FindAgent(true, 50, sixActivity0, 50, fiveActivity0);
    }
    else if ($('#rad1').prop('checked')) {
        findAgent = new FindAgent(true, 50, sixActivity1, 50, fiveActivity1, 50, fourActivity1);
    }
}

window.onload = function () {
    player = $('#bgm');
    $('#CSTJ').on('click', ConvertStoneToJade);
    if ($('#rad0')) {
        $('#rad0').on('change', RadioChange);
        let text = act0Title + '(' + sixActivity0.join('、') + '、' + fiveActivity0.join('、') + ')';
        $('#act0').text(text);
    }
    if ($('#rad1')) {
        $('#rad1').on('change', RadioChange);
        let text = act1Title + '(' + sixActivity1.join('、') + '、' + fiveActivity1.join('、') + '、' + fourActivity1.join('、') + ')';
        $('#act1').text(text);
    }
    for (let i = 0; i < 6; i++) {
        $(`#buy-sstone${i}`).on('click', function () { BuySStone(i); });
    }

    $('#buy-package0').on('click', function () { BuyPackage(128, 0); });
    $('#buy-package1').on('click', function () { BuyPackage(128, 1); });
    $('#buy-package2').on('click', function () { BuyPackage(328, 2); });
    $('#DO').on('click', DrawOnce);
    $('#DT').on('click', DrawTenth);
}




