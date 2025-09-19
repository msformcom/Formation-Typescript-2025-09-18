import * as divers from "./namespace-divers";
divers.

interface MonV{
    a: number;
    b: number;
    c: number;
}
let v: MonV=JSON.parse(`toto`); // Attention !

let h:Pick<MonV,"a" | "b">
h=JSON.parse(`toto`);
(h as any)["c"]



