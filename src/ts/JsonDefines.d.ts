declare interface BuyData {
    [key: string]: number;
}

declare interface PoolData {
    six: string[];
    five: string[];
    four: string[];
    three: string[];
    name: string;
    prob6: number;
    prob5: number;
    prob4: number;
    prob3: number;
    floor: string[];
    probfloorcount: number;

}

declare interface OriginiumsPackData {
    count: number[];
    price: number[];
    extra: number[];
}

declare interface PackagesPackData {
    name: string[];
    jade: number[];
    price: number[];
    originiums: number[];
}


declare interface HuntRes {
    star: number;
    name: string;
}

declare interface MyEventData {
    type: number;
}

declare interface MyEvent {
    data: MyEventData;
}

declare interface ViewData {
    [key: string]: number;
}

