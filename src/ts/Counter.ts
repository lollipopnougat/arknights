

export class Counter {
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

    public Spend(name: string, money: number) {
        this.SpendMoney += money;
        if (this.SpendData.hasOwnProperty(`${money}元${name}`)) {
            this.SpendData[`${money}元${name}`] += 1;
        }
        else {
            this.SpendData[`${money}元${name}`] = 1;
        }
    }

    public AddSix(val: string) {
        this.FindTimes++;
        this.FindSix.push(val);
    }

    public AddFive(val: string) {
        this.FindTimes++;
        this.FindFive.push(val);
    }

    public AddFour(val: string) {
        this.FindTimes++;
        this.FindFour.push(val);
    }

    public AddThree(val: string) {
        this.FindTimes++;
        this.FindThree.push(val);
    }

    public GetTimes(): number {
        return this.FindTimes;
    }

    public GetSix(): string[] {
        return this.FindSix;
    }

    public GetFive(): string[] {
        return this.FindFive;
    }

    public GetFour(): string[] {
        return this.FindFour;
    }

    public GetThree(): string[] {
        return this.FindThree;
    }

    public GetSpendingData(): BuyData {
        return this.SpendData;
    }

    public GetSpendingMoney(): number {
        return this.SpendMoney;

    }

}

export var counter = new Counter();