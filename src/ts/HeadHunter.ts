import { Random } from "./Random";
import { Counter, counter } from "./Counter";
import { noactdata, actList } from "./ConstVar";

export class HeadHunter {
    private normalAgents: PoolData;
    private actList: PoolData[];
    private curAct: number = 0;
    private validSixTimes: number;
    private rand: Random;
    private minFloor = 10;
    private isActivity: boolean;
    private counter: Counter;
    private hasExOp: boolean = false; // 是否有大保底(120抽必出等)
    public constructor(isAct: boolean, count: Counter, actList: PoolData[], cur: number = 0) {
        this.normalAgents = noactdata;
        this.curAct = cur;
        this.actList = actList;
        if(this.actList[this.curAct].floor.length != 0) {
            this.hasExOp = true;
        }

        this.validSixTimes = 0;
        this.rand = new Random();
        this.isActivity = isAct;
        this.counter = count;
    }

    public AddSixProb(): number {
        let times = this.validSixTimes;
        let pro = 2;
        while (times - 50 >= 0) {
            pro += 2;
            times -= 50;
        }
        return pro;
    }

    private GetAgent(stars: number, isAct: boolean): string {
        let num;
        let res;
        let prob;
        if (isAct) {
            switch (stars) {
                case 6: num = this.actList[this.curAct].six.length; prob = this.rand.Next(0, num - 1); res = this.actList[this.curAct].six[prob]; break;
                case 5: num = this.actList[this.curAct].five.length; prob = this.rand.Next(0, num - 1); res = this.actList[this.curAct].five[prob]; break;
                case 4: num = this.actList[this.curAct].four.length; prob = this.rand.Next(0, num - 1); res = this.actList[this.curAct].four[prob]; break;
                case 3: num = this.actList[this.curAct].three.length; prob = this.rand.Next(0, num - 1); res = this.actList[this.curAct].three[prob]; break;
                default: throw new Error('错误，不存在低于3星的或高于6星的寻访干员');
            }
        }
        else {
            switch (stars) {
                case 6: if (this.hasExOp && this.rand.Next(0, 1) == 1) { res = this.actList[this.curAct].floor[0]; break; } num = this.normalAgents.six.length; prob = this.rand.Next(0, num - 1); res = this.normalAgents.six[prob]; break;
                case 5: num = this.normalAgents.five.length; prob = this.rand.Next(0, num - 1); res = this.normalAgents.five[prob]; break;
                case 4: num = this.normalAgents.four.length; prob = this.rand.Next(0, num - 1); res = this.normalAgents.four[prob]; break;
                case 3: num = this.normalAgents.three.length; prob = this.rand.Next(0, num - 1); res = this.normalAgents.three[prob]; break;
                default: throw new Error('错误，不存在低于3星的或高于6星的寻访干员');
            }
        }
        return res;
    }

    public HuntOnce(): HuntRes {
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

        if (this.actList[this.curAct].probfloorcount == this.validSixTimes) {
            currSixProb = 100;
        }

        let res: HuntRes;

        if (prob <= currSixProb) {
            this.minFloor = 0;
            if (this.actList[this.curAct].probfloorcount == this.validSixTimes) {
                return {
                    star: 6,
                    name: this.actList[this.curAct].six[0]
                };
            }
            //console.log('抽6');
            let res_name = this.GetAgent(6, this.isActivity && this.rand.Next(0, 100) <= this.actList[this.curAct].prob6 && this.actList[this.curAct].six.length != 0);
            this.validSixTimes = 0;
            this.counter.AddSix(res_name);
            res = {
                star: 6,
                name: res_name
            };
            return res;
        }
        else if (prob <= currFiveProb) {
            this.minFloor = 0;
            //console.log('抽5');
            let res_name = this.GetAgent(5, this.isActivity && this.rand.Next(0, 100) <= this.actList[this.curAct].prob5 && this.actList[this.curAct].five.length != 0);
            this.counter.AddFive(res_name);
            res = {
                star: 5,
                name: res_name
            };
            return res;
        }
        else if (prob <= currFourProb) {
            //console.log('抽4');
            let res_name = this.GetAgent(4, this.isActivity && this.rand.Next(0, 100) <= this.actList[this.curAct].prob4 && this.actList[this.curAct].four.length != 0);
            this.counter.AddFour(res_name);
            res = {
                star: 4,
                name: res_name
            };

            return res;
        }
        else {
            //console.log('抽3');
            let res_name = this.GetAgent(3, this.isActivity && this.rand.Next(0, 100) <= this.actList[this.curAct].prob3 && this.actList[this.curAct].three.length != 0);
            this.counter.AddThree(res_name);
            res = {
                star: 3,
                name: res_name
            };
            return res;
        }
    }

    public DrawTenth(): HuntRes[] {
        let resArray: HuntRes[] = [];
        for (let i = 0; i < 10; i++) {
            resArray.push(this.HuntOnce());
        }
        return resArray;
    }

    public GetValidSixTimes(): number {
        return this.validSixTimes;
    }

    public GetMinFloor(): number {
        return this.minFloor;
    }

    public SwitchActivity(type: number = 0) {
        if(type >= this.actList.length || type < 0) {
            throw new Error(`不存在编号为 ${type} 的卡池`);
        }
        this.curAct = type;
    }


}

export var headHunter = new HeadHunter(true, counter, actList, 0);