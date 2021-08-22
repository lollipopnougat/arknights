export class Random {
    public constructor() {
    }
    public Next(min: number = 0, max: number = 1): number {
        let range = max - min;
        let ranValue = min + Math.round(Math.random() * range);
        return ranValue;
    }

}