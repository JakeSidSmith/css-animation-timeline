declare type Diff<T extends string, U extends string> = ({
  [P in T]: P;
} & {
  [P in U]: never;
} & {
  [x: string]: never;
})[T];

declare type Omit<T, K extends keyof T> = {
  [P in Diff<keyof T, K>]: T[P];
};

declare type Overwrite<T, U> = {
  [P in Diff<keyof T, keyof U>]: T[P];
} & U;

declare type Only<T, K extends keyof T> = {
  [P in K]: T[K];
}