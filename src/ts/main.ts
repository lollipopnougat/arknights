import "../css/style.css";
var $ = require('jquery');
const six = ['能天使', '推进之王', '伊芙利特', '艾雅法拉', '安洁莉娜', '闪灵', '夜莺', '星熊', '塞雷娅', '银灰', '斯卡蒂', '陈', '黑', '赫拉格', '麦哲伦', '莫斯提马', '煌', '阿', '刻俄柏', '风笛', '傀影', '温蒂', '早露', '铃兰', '棘刺', '森蚺', '史尔特尔', '瑕光', '泥岩'];

const five = ['白面鸮', '凛冬', '德克萨斯', '芙兰卡', '拉普兰德', '幽灵鲨', '蓝毒', '白金', '陨星', '天火', '梅尔', '赫默', '华法琳', '临光', '红', '雷蛇', '可颂', '普罗旺斯', '守林人', '崖心', '初雪', '真理', '空', '狮蝎', '食铁兽', '夜魔', '诗怀雅', '格劳克斯', '星极', '送葬人', '槐琥', '苇草', '布洛卡', '灰喉', '吽', '惊蛰', '慑砂', '巫恋', '极境', '月禾', '石棉', '莱恩哈特', '蜜蜡', '贾维', '安哲拉', '燧石', '四月', '奥斯塔', '絮雨'];

const four = ['夜烟', '远山', '杰西卡', '流星', '白雪', '清道夫', '红豆', '杜宾', '缠丸', '霜叶', '慕斯', '砾', '暗索', '末药', '调香师', '角峰', '蛇屠箱', '古米', '深海色', '地灵', '阿消', '猎蜂', '格雷伊', '苏苏洛', '桃金娘', '红云', '梅', '安比尔', '宴', '刻刀', '波登可', '卡达', '孑', '酸糖', '芳汀', '泡泡', '杰克'];

const three = ['芬', '香草', '翎羽', '玫兰莎', '卡缇', '米格鲁', '克洛丝', '炎熔', '芙蓉', '安塞尔', '史都华德', '梓兰', '空爆', '月见夜', '斑点', '泡普卡'];

const packageDesc = ['每月寻访礼包 (源石*42, 10连凭证*1)', '新人寻访组合包 (10连凭证*2)', '感谢庆典备战包 (源石*90, 10连凭证*1)', '月卡 (6源石+每天200合成玉)'];

const sstoneNum = [1, 7, 24, 50, 90, 185]; // 源石礼包中的源石数

const sstoneMoney = [6, 30, 98, 198, 328, 648]; // 源石礼包价格

const sstoneFEx = [3, 12, 40, 80, 132, 260]; // 首充源石礼包送的源石

const activityNum = 2;

const act0Title = '常驻标准寻访';

const act1Title = '自由的囚徒'; // 活动卡池

const act2Title = '锁与匙的守卫者';

const sixActivity0: string[] = ['煌', '铃兰'];

const fiveActivity0: string[] = ['莱恩哈特', '苇草', '慑砂'];

const fourActivity0: string[] = [];

const threeActivity0: string[] = [];

const sixActivity1: string[] = ['山'];

const fiveActivity1: string[] = ['卡夫卡', '赫默'];

const fourActivity1: string[] = ['松果'];

const threeActivity1: string[] = [];

const sixActivity2: string[] = ['莫斯提马'];

const fiveActivity2: string[] = ['槐琥', '守林人'];

const fourActivity2: string[] = ['梅'];

const threeActivity2: string[] = [];


const act0: Agents = {
    six: sixActivity0,
    five: fiveActivity0,
    four: fourActivity0,
    three: threeActivity0
};

const act0Prob: HuntProb = {
    six: 50,
    five: 50,
    four: 0,
    three: 0
}

const act1: Agents = {
    six: sixActivity1,
    five: fiveActivity1,
    four: fourActivity1,
    three: threeActivity1
};

const act2: Agents = {
    six: sixActivity2,
    five: fiveActivity2,
    four: fourActivity2,
    three: threeActivity2
}

const act1Prob: HuntProb = {
    six: 50,
    five: 50,
    four: 20,
    three: 0
}

const act2Prob: HuntProb = {
    six: 50,
    five: 50,
    four: 20,
    three: 0
}

//var player: JQuery<HTMLAudioElement>;


class Random {
    constructor() {

    }

    public Next = (min: number = 0, max: number = 1): number => {
        let range = max - min;
        let ranValue = min + Math.round(Math.random() * range);
        return ranValue;
    }

}

interface BuyData {
    [key: string]: number;
}

class Counter {
    private FindTimes: number;
    private FindSix: string[];
    private FindFive: string[];
    private FindFour: string[];
    private FindThree: string[];
    private SpendData: BuyData;
    private SpendMoney: number;

    public constructor() {
        this.FindTimes = 0;
        this.FindSix = [];
        this.FindFive = [];
        this.FindFour = [];
        this.FindThree = [];
        this.SpendData = {};
        this.SpendMoney = 0;
    }

    public Spend = (name: string, money: number) => {
        this.SpendMoney += money;
        if (this.SpendData.hasOwnProperty(`${money}元${name}`)) {
            this.SpendData[`${money}元${name}`] += 1;
        }
        else {
            this.SpendData[`${money}元${name}`] = 1;
        }
    }

    public AddSix = (val: string) => {
        this.FindTimes++;
        this.FindSix.push(val);
    }

    public AddFive = (val: string) => {
        this.FindTimes++;
        this.FindFive.push(val);
    }

    public AddFour = (val: string) => {
        this.FindTimes++;
        this.FindFour.push(val);
    }

    public AddThree = (val: string) => {
        this.FindTimes++;
        this.FindThree.push(val);
    }

    public GetTimes = (): number => {
        return this.FindTimes;
    }

    public GetSix = (): string[] => {
        return this.FindSix;
    }

    public GetFive = (): string[] => {
        return this.FindFive;
    }

    public GetFour = (): string[] => {
        return this.FindFour;
    }

    public GetThree = (): string[] => {
        return this.FindThree;
    }

    public GetSpendingData = (): BuyData => {
        return this.SpendData;
    }

    public GetSpendingMoney = (): number => {
        return this.SpendMoney;

    }

}


class SJManager {
    public static compoundJade = 12000;
    public static sStone = 56;
    //public static costMoney = 0;
    private isFirstBuySStone0: boolean = true;
    private isFirstBuySStone1: boolean = true;
    private isFirstBuySStone2: boolean = true;
    private isFirstBuySStone3: boolean = true;
    private isFirstBuySStone4: boolean = true;
    private isFirstBuySStone5: boolean = true;
    private counter: Counter;

    constructor(count: Counter) {
        this.counter = count;
    }

    public IsFirstBuy = (type: number): boolean => {
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
            case 0:
                if (this.isFirstBuySStone0) {
                    this.AddStone(sstoneFEx[0]);
                    this.counter.Spend(`${sstoneFEx[0]} 源石`, sstoneMoney[0]);
                } else {
                    this.AddStone(sstoneNum[0]);
                    this.counter.Spend(`${sstoneNum[0]} 源石`, sstoneMoney[0]);
                }
                //this.AddMoney(sstoneMoney[0]);
                this.isFirstBuySStone0 = false;
                break;
            case 1:
                if (this.isFirstBuySStone1) {
                    this.AddStone(sstoneFEx[1]);
                    this.counter.Spend(`${sstoneFEx[1]} 源石`, sstoneMoney[1]);
                } else {
                    this.AddStone(sstoneNum[1]);
                    this.counter.Spend(`${sstoneNum[1]} 源石`, sstoneMoney[1]);
                }
                //this.AddMoney(sstoneMoney[1]);
                this.isFirstBuySStone1 = false;
                break;
            case 2:
                if (this.isFirstBuySStone2) {
                    this.AddStone(sstoneFEx[2]);
                    this.counter.Spend(`${sstoneFEx[2]} 源石`, sstoneMoney[2]);
                } else {
                    this.AddStone(sstoneNum[2]);
                    this.counter.Spend(`${sstoneNum[2]} 源石`, sstoneMoney[2]);
                }
                //this.AddMoney(sstoneMoney[2]); 
                this.isFirstBuySStone2 = false;
                break;
            case 3:
                if (this.isFirstBuySStone3) {
                    this.AddStone(sstoneFEx[3]);
                    this.counter.Spend(`${sstoneFEx[3]} 源石`, sstoneMoney[3]);
                } else {
                    this.AddStone(sstoneNum[3]);
                    this.counter.Spend(`${sstoneNum[3]} 源石`, sstoneMoney[3]);
                }
                //this.AddMoney(sstoneMoney[3]); 
                this.isFirstBuySStone3 = false;
                break;
            case 4:
                if (this.isFirstBuySStone4) {
                    this.AddStone(sstoneFEx[4]);
                    this.counter.Spend(`${sstoneFEx[4]} 源石`, sstoneMoney[4]);
                } else {
                    this.AddStone(sstoneNum[4]);
                    this.counter.Spend(`${sstoneNum[4]} 源石`, sstoneMoney[4]);
                }
                //this.AddMoney(sstoneMoney[4]); 
                this.isFirstBuySStone4 = false;
                break;
            case 5:
                if (this.isFirstBuySStone5) {
                    this.AddStone(sstoneFEx[5]);
                    this.counter.Spend(`${sstoneFEx[5]} 源石`, sstoneMoney[5]);
                } else {
                    this.AddStone(sstoneNum[5]);
                    this.counter.Spend(`${sstoneNum[5]} 源石`, sstoneMoney[5]);
                }
                //this.AddMoney(sstoneMoney[5]); 
                this.isFirstBuySStone5 = false;
                break;
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
            case 0:
                this.AddStone(42);
                this.AddJade(6000);
                this.counter.Spend('每月寻访礼包', 168);
                //this.AddMoney(168);
                break;
            case 1:
                this.AddJade(12000);
                this.counter.Spend('新人寻访礼包', 128);
                //this.AddMoney(128); 
                break;
            case 2:
                this.AddStone(90);
                this.AddJade(6000);
                this.counter.Spend('周年组合包', 328);
                //this.AddMoney(328); 
                break;
            case 3:
                this.AddStone(6);
                this.counter.Spend('月卡', 30);
                //this.AddMoney(30); 
                this.AddJade(6000);
                break;
            default: throw new Error('不存在价格为 ' + money.toString() + ' 的组合包');
        }

    }

    private AddStone = (num: number): void => {
        SJManager.sStone += num;
    }
    private AddJade = (num: number): void => {
        SJManager.compoundJade += num;
    }
}

interface Agents {
    six: string[];
    five: string[];
    four: string[];
    three: string[];
}

interface HuntProb {
    six: number;
    five: number;
    four: number;
    three: number;
}

interface HuntRes {
    star: number;
    name: string;
}

class HeadHunter {
    private activityAgents: Agents;
    private normalAgents: Agents;
    private huntProb: HuntProb;
    private validSixTimes: number;
    private rand: Random;
    private minFloor = 10;
    private isActivity: boolean;
    private counter: Counter;
    constructor(isAct: boolean, count: Counter, actAgent: Agents, huntProb: HuntProb) {
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

    private AddSixProb = (): number => {
        let times = this.validSixTimes;
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
                case 6: num = this.activityAgents.six.length; prob = this.rand.Next(0, num - 1); res = this.activityAgents.six[prob]; break;
                case 5: num = this.activityAgents.five.length; prob = this.rand.Next(0, num - 1); res = this.activityAgents.five[prob]; break;
                case 4: num = this.activityAgents.four.length; prob = this.rand.Next(0, num - 1); res = this.activityAgents.four[prob]; break;
                case 3: num = this.activityAgents.three.length; prob = this.rand.Next(0, num - 1); res = this.activityAgents.three[prob]; break;
                default: throw new Error('错误，不存在低于3星的或高于6星的寻访干员');
            }
        }
        else {
            switch (stars) {
                case 6: num = this.normalAgents.six.length; prob = this.rand.Next(0, num - 1); res = this.normalAgents.six[prob]; break;
                case 5: num = this.normalAgents.five.length; prob = this.rand.Next(0, num - 1); res = this.normalAgents.five[prob]; break;
                case 4: num = this.normalAgents.four.length; prob = this.rand.Next(0, num - 1); res = this.normalAgents.four[prob]; break;
                case 3: num = this.normalAgents.three.length; prob = this.rand.Next(0, num - 1); res = this.normalAgents.three[prob]; break;
                default: throw new Error('错误，不存在低于3星的或高于6星的寻访干员');
            }
        }
        return res;
    }

    public HuntOnce = (): HuntRes => {
        this.validSixTimes++;

        let prob = this.rand.Next(0, 100);

        let currSixProb = this.AddSixProb() % 100;
        let currFiveProb = (this.AddSixProb() + 8) % 100;
        let currFourProb = (this.AddSixProb() + 8 + 50) % 100;

        if (this.minFloor > 1) this.minFloor--;
        else if (this.minFloor == 1) {
            if (this.rand.Next(0, 3) == 3) currSixProb = 100;
            else {
                currSixProb = 0;
                currFiveProb = 100;
            }
        }
        let res: HuntRes;

        if (prob <= currSixProb) {
            this.minFloor = 0;
            //console.log('抽6');
            let res_name = this.GetAgent(6, this.isActivity && this.rand.Next(0, 100) <= this.huntProb.six && this.activityAgents.six.length != 0);
            this.validSixTimes = 0;
            this.counter.AddSix(res_name);
            res = {
                star: 6,
                name: res_name
            };
            //console.log('当前抽到: ' + currAgent);
            return res;
        }
        else if (prob <= currFiveProb) {
            this.minFloor = 0;
            //console.log('抽5');
            let res_name = this.GetAgent(5, this.isActivity && this.rand.Next(0, 100) <= this.huntProb.five && this.activityAgents.five.length != 0);
            this.counter.AddFive(res_name);
            res = {
                star: 5,
                name: res_name
            };
            //console.log('当前抽到: ' + currAgent);
            return res;
        }
        else if (prob <= currFourProb) {
            //console.log('抽4');
            let res_name = this.GetAgent(4, this.isActivity && this.rand.Next(0, 100) <= this.huntProb.four && this.activityAgents.four.length != 0);
            this.counter.AddFour(res_name);
            res = {
                star: 4,
                name: res_name
            };
            //console.log('当前抽到: ' + currAgent);
            return res;
        }
        else {
            //console.log('抽3');
            let res_name = this.GetAgent(3, this.isActivity && this.rand.Next(0, 100) <= this.huntProb.three && this.activityAgents.three.length != 0);
            this.counter.AddThree(res_name);
            res = {
                star: 3,
                name: res_name
            };
            //console.log('当前抽到: ' + currAgent);
            return res;
        }
    }

    public DrawTenth = (): HuntRes[] => {
        let resArray: HuntRes[] = [];
        for (let i = 0; i < 10; i++) {
            resArray.push(this.HuntOnce());
        }
        return resArray;
    }

    public GetValidSixTimes = (): number => {
        return this.validSixTimes;
    }

    public GetMinFloor = (): number => {
        return this.minFloor;
    }


}

var counter = new Counter();
//var findAgent = new FindAgent(counter, true, 50, sixActivity0, 50, fiveActivity0);

var headHunter = new HeadHunter(true, counter, act0, act0Prob);
var sjManager = new SJManager(counter);

class ViewControl {
    public static ViewSync = (minFloor: number): void => {
        $('#sstone').text(SJManager.sStone);
        $('#jade').text(SJManager.compoundJade);
        $('#tojade').text(SJManager.sStone * 180);
        $('#jade').text(SJManager.compoundJade);
        $('#sixnum').text(counter.GetSix().length);
        $('#fivenum').text(counter.GetFive().length);
        $('#fournum').text(counter.GetFour().length);
        $('#threenum').text(counter.GetThree().length);
        $('#moneycost').text(`${counter.GetTimes()} / ${counter.GetSpendingMoney()}`);
        if (minFloor == 0) {
            $('#tips').text('保底已出');
        }
        else {
            $('#tips').text(`${minFloor}次内必定获得5星及以上干员`);
        }
    }

    public static ShowRes = (res: HuntRes | HuntRes[]): void => {
        let pic_box = $('#image-box');
        pic_box.empty();
        if (res instanceof Array) {
            for (let i in res) {
                let pic_tmp = $('<img>', {
                    id: `img-agent${i}`,
                    src: `./images/${res[i].star}/${res[i].name}.jpg`,
                    class: 'agen-img'
                });
                pic_box.append(pic_tmp);
            }
        }
        else {
            let pic_tmp = $('<img>', {
                id: `img-agent0`,
                src: `./images/${res.star}/${res.name}.jpg`,
                class: 'agen-img'
            });
            $('#image-box').append(pic_tmp);
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
    // if (player[0].paused) {
    //     player[0].play();
    // }
    try {
        ViewControl.HideRadio();
        if (SJManager.compoundJade - 600 < 0) {
            let needSStone = SJManager.CanCalsStoneJade(true);
            if (needSStone == -1) throw new Error('合成玉/源石不足');
            let result = confirm('是否要花费 ' + needSStone.toString() + ' 源石来兑换 ' + (needSStone * 180).toString() + ' 合成玉用来寻访？');
            if (result) {
                sjManager.SStoneToJade(needSStone);
                ViewControl.ViewSync(headHunter.GetMinFloor());
                //alert('兑换成功');

            }
            else return;
        }
        //console.log('点击了寻访一次');
        SJManager.compoundJade -= 600;

        let res = headHunter.HuntOnce();
        $('#resu').text(res.name);
        ViewControl.ViewSync(headHunter.GetMinFloor());
        ViewControl.ShowRes(res);
    }
    catch (er) {
        alert(er.message);
    }
    //console.log(currAgent);
}

function DrawTenth() {
    // if (player[0].paused) {
    //     player[0].play();
    // }
    //console.log('点击了寻访十次');
    try {
        ViewControl.HideRadio();
        if (SJManager.compoundJade - 6000 < 0) {
            let needSStone = SJManager.CanCalsStoneJade(false);
            if (needSStone == -1) throw new Error('合成玉/源石不足');
            let result = confirm('是否要花费 ' + needSStone.toString() + ' 源石来兑换 ' + (needSStone * 180).toString() + ' 合成玉用来寻访？');
            if (result) {
                sjManager.SStoneToJade(needSStone);
                ViewControl.ViewSync(headHunter.GetMinFloor());
                //alert('兑换成功');
            }
            else return;
        }
        //console.log('点击了寻访10次');
        SJManager.compoundJade -= 6000;
        let res = headHunter.DrawTenth();
        let res_str: string = '';
        for (let i of res) {
            res_str += `${i.name} `;
        }
        $('#resu').text(res_str);
        ViewControl.ViewSync(headHunter.GetMinFloor());
        ViewControl.ShowRes(res);
    }
    catch (er) {
        alert(er.message);
    }
    //console.log(currAgent);
}

function BuySStone(type: number) {
    // if (player[0].paused) {
    //     player[0].play();
    // }
    try {
        let num;
        if (sjManager.IsFirstBuy(type)) num = sstoneFEx[type];
        else num = sstoneNum[type];
        let result = confirm('是否要花费 ' + sstoneMoney[type].toString() + ' 元来购买' + num.toString() + ' 源石？');
        if (!result) return;
        if (sjManager.IsFirstBuy(type)) ViewControl.CloseFirstEx(type);
        sjManager.BuySStone(type);
        ViewControl.ViewSync(headHunter.GetMinFloor());

    } catch (er) {
        alert(er.message);
    }

}

function BuyPackage(money: number, type: number) {
    // if (player[0].paused) {
    //     player[0].play();
    // }
    try {
        let result: boolean = confirm('是否花费' + money.toString() + '元购买 ' + packageDesc[type] + ' ?');
        if (!result) return;
        sjManager.BuyPackage(money, type);
        ViewControl.ClosePackage(type);
        ViewControl.ViewSync(headHunter.GetMinFloor());
    } catch (er) {
        alert(er.message);
    }
}

function ConvertStoneToJade() {
    // if (player[0].paused) {
    //     player[0].play();
    // }
    try {
        let num = parseInt(prompt("请输入您想要兑换的源石数量：", "1"));
        if (isNaN(num)) num = 1;
        let result = confirm('是否要花费 ' + num.toString() + ' 源石来兑换' + (num * 180).toString() + ' 合成玉？');
        if (!result) return;
        sjManager.SStoneToJade(num);
        ViewControl.ViewSync(headHunter.GetMinFloor());
    }
    catch (er) {
        alert(er.message);
    }
}

function SetHunter() {
    // if (player[0].paused) {
    //     player[0].play();
    // }
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

interface MyEventData {
    type: number;
}

interface MyEvent {
    data: MyEventData;
}

interface ViewData {
    [key: string]: number;
}


function ShowHis(type: MyEvent) {
    // if (player[0].paused) {
    //     player[0].play();
    // }
    let agent_str = '';
    let agent_map: ViewData = {};
    let agent_array: string[];
    switch (type.data.type) {
        case 6: agent_array = counter.GetSix(); break;
        case 5: agent_array = counter.GetFive(); break;
        case 4: agent_array = counter.GetFour(); break;
        case 3: agent_array = counter.GetThree(); break;
        default: alert('寻访不存在此种干员'); return;
    }
    if (agent_array.length == 0) {
        alert(`没有抽到${type.data.type}星干员`);
        return;
    }

    for (let i of agent_array) {
        if (agent_map.hasOwnProperty(i)) {
            agent_map[i] += 1;
        }
        else {
            agent_map[i] = 1;
        }
    }
    for (let i in agent_map) {
        agent_str += `${i}: ${agent_map[i]}\n`;
    }
    alert(agent_str);
}


window.onload = function () {
    //player = $('#bgm');

    $('#CSTJ').on('click', ConvertStoneToJade);

    $('#show-panel1').on('click', () => {
        // if (player[0].paused) {
        //     player[0].play();
        // }
        $('#panel1').fadeIn();
    });

    $('#show-panel2').on('click', () => {
        // if (player[0].paused) {
        //     player[0].play();
        // }
        $('#panel2').fadeIn();
    });

    $('#close-panel1').on('click', () => {
        // if (player[0].paused) {
        //     player[0].play();
        // }
        $('#panel1').fadeOut();
    });

    $('#close-panel2').on('click', () => {
        // if (player[0].paused) {
        //     player[0].play();
        // }
        $('#panel2').fadeOut();
    });

    $('#selector').on('change', SetHunter);

    let text = act0Title + '(';
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
    //let text = act0Title + '(' + sixActivity0.join('、') + '、' + fiveActivity0.join('、') + ')';
    //let text = act0Title + '('  + fiveActivity0.join('、') + ')';

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
    //text += sixActivity1.join('、') + '、' + fiveActivity1.join('、') + '、' + fourActivity1.join('、') + ')';
    //let text = act1Title + '(' + sixActivity1.join('') + '、' + fiveActivity1.join('、') + ')';
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
        //text += sixActivity1.join('、') + '、' + fiveActivity1.join('、') + '、' + fourActivity1.join('、') + ')';
        //let text = act1Title + '(' + sixActivity1.join('') + '、' + fiveActivity1.join('、') + ')';
        $('#opt2').show();
        $('#opt2').text(text);
    }


    for (let i = 0; i < 6; i++) {
        $(`#buy-sstone${i}`).on('click', () => { BuySStone(i); });
    }

    $('#buy-package0').on('click', () => { BuyPackage(168, 0); });
    $('#buy-package1').on('click', () => { BuyPackage(128, 1); });
    $('#buy-package2').on('click', () => { BuyPackage(328, 2); });
    $('#buy-package3').on('click', () => { BuyPackage(30, 3); });
    $('#DO').on('click', DrawOnce);
    $('#DT').on('click', DrawTenth);

    $('#sixnum').on('click', '', { type: 6 }, ShowHis);
    $('#fivenum').on('click', '', { type: 5 }, ShowHis);
    $('#fournum').on('click', '', { type: 4 }, ShowHis);
    $('#threenum').on('click', '', { type: 3 }, ShowHis);
    $('#moneycost').on('click', () => {
        // if (player[0].paused) {
        //     player[0].play();
        // }
        let cost_data: BuyData = counter.GetSpendingData();
        let cost_str: string = '';
        if (JSON.stringify(cost_data) == '{}') {
            alert('您还没氪金呢');
            return;
        }
        for (let i in cost_data) {
            cost_str += `${i}: ${cost_data[i]}\n`;
        }
        alert(cost_str);
    });
}




