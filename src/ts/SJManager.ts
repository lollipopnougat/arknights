import { Counter } from "./Counter";
import { originiumsPacks, packagePacks } from "./ConstVar";

export class SJManager {
    public static compoundJade = 12000;
    public static originiums = 56;
    private isFirstBuyOriginiumsPack: boolean[] = [];
    private counter: Counter;

    constructor(count: Counter) {
        this.counter = count;
        for (let i of originiumsPacks.count) {
            this.isFirstBuyOriginiumsPack.push(true);
        }
    }

    public IsFirstBuy(type: number): boolean {
        if (type >= originiumsPacks.count.length || type < 0) {
            throw new Error(`不存在编号为 ${type} 的源石商品`);
        }
        return this.isFirstBuyOriginiumsPack[type];
    }

    public static CanCalsOriginiumJade(onceMode: boolean = true): number {
        let ssnum = SJManager.originiums;
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

    public BuyOriginiums(type: number) {
        if (type >= originiumsPacks.count.length || type < 0) {
            throw new Error(`不存在编号为 ${type} 的源石商品`);
        }
        if (this.isFirstBuyOriginiumsPack[type]) {
            this.AddOriginiums(originiumsPacks.extra[type]);
            this.counter.Spend(`${originiumsPacks.extra[type]} 源石`, originiumsPacks.price[type]);
        } else {
            this.AddOriginiums(originiumsPacks.count[type]);
            this.counter.Spend(`${originiumsPacks.count[type]} 源石`, originiumsPacks.price[type]);
        }
        this.isFirstBuyOriginiumsPack[type] = false;
    }

    public OriginiumsToJade(stonenum: number = 0) {
        if (stonenum > SJManager.originiums) throw new Error('兑换失败：源石不足');
        SJManager.originiums -= stonenum;
        SJManager.compoundJade += stonenum * 180;

    }

    public BuyPackage(type: number) {
        if (type >= packagePacks.name.length || type < 0) {
            throw new Error(`不存在编号为 ${type} 的组合包`);
        }
        this.AddOriginiums(packagePacks.originiums[type]);
        this.AddJade(packagePacks.jade[type]);
        this.counter.Spend(packagePacks.name[type], packagePacks.price[type]);
    }

    private AddOriginiums(num: number) {
        SJManager.originiums += num;
    }

    private AddJade(num: number) {
        SJManager.compoundJade += num;
    }
}