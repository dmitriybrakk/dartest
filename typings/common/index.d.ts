export namespace Common {
    export enum NumberType {
        Base = 'Основание',
        Remainder = 'Остаток',
    }
    export type Base = number | null;
    export type Remainder = number | null;
    export type Pair = [Base, Remainder];
}
