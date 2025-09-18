"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Import de la classe Voiture exportée dans voiture.ts (js)
import { Voiture } from "./voiture.js"; // => Voiture
import { Voiture as V } from "./voiture.js"; // alias pour la classe Voiture
import * as classes from "./voiture.js"; // classes. => toutes ce qui est exporté dans voiture.js
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        let p = Promise.resolve(4);
        let r = yield p;
        let v = new classes.Voiture();
    });
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2NyaXB0cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7QUFFYiw0REFBNEQ7QUFDNUQsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLGNBQWMsQ0FBQyxDQUFDLGFBQWE7QUFDbkQsT0FBTyxFQUFFLE9BQU8sSUFBSSxDQUFDLEVBQUUsTUFBTSxjQUFjLENBQUMsQ0FBQywrQkFBK0I7QUFDNUUsT0FBTyxLQUFLLE9BQU8sTUFBTSxjQUFjLENBQUMsQ0FBQyx3REFBd0Q7QUFJakcsQ0FBQzs7UUFDRyxJQUFJLENBQUMsR0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxHQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLEdBQUMsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDaEMsQ0FBQztDQUFBLENBQUMsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBJbXBvcnQgZGUgbGEgY2xhc3NlIFZvaXR1cmUgZXhwb3J0w6llIGRhbnMgdm9pdHVyZS50cyAoanMpXHJcbmltcG9ydCB7Vm9pdHVyZX0gZnJvbSBcIi4vdm9pdHVyZS5qc1wiOyAvLyA9PiBWb2l0dXJlXHJcbmltcG9ydCB7IFZvaXR1cmUgYXMgViB9IGZyb20gXCIuL3ZvaXR1cmUuanNcIjsgLy8gYWxpYXMgcG91ciBsYSBjbGFzc2UgVm9pdHVyZVxyXG5pbXBvcnQgKiBhcyBjbGFzc2VzIGZyb20gXCIuL3ZvaXR1cmUuanNcIjsgLy8gY2xhc3Nlcy4gPT4gdG91dGVzIGNlIHF1aSBlc3QgZXhwb3J0w6kgZGFucyB2b2l0dXJlLmpzXHJcblxyXG5cclxuXHJcbihhc3luYyBmdW5jdGlvbigpe1xyXG4gICAgbGV0IHA9UHJvbWlzZS5yZXNvbHZlKDQpO1xyXG4gICAgbGV0IHI9IGF3YWl0IHA7XHJcbiAgICBsZXQgdj1uZXcgY2xhc3Nlcy5Wb2l0dXJlKCk7XHJcbn0pKCk7XHJcblxyXG4gICAiXX0=