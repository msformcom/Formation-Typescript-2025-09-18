var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Voiture_proprietaire;
// rend la classe Voioture visible dans les autres fichiers via import
export class Voiture {
    // suivi d'une implémentation qui couvre les déclarations
    constructor(marque, modele, proprietaireOrPrix) {
        this.modele = modele;
        _Voiture_proprietaire.set(this, "Moi");
        this.marque = marque;
        if (proprietaireOrPrix === undefined) {
            //  constructor(marque:string,modele:string);
            this.proprietaire = "Toto";
            this.prix = 10000;
        }
        else if (typeof (proprietaireOrPrix) === "string") {
            // constructor(marque:string,modele:string,proprietaire:string);
            this.proprietaire = proprietaireOrPrix;
            this.prix = 10000;
        }
        else if (typeof (proprietaireOrPrix) === "number") {
            // constructor(marque:string,modele:string,prix:number);
            this.proprietaire = "Toto";
            this.prix = proprietaireOrPrix;
        }
        else {
            throw new Error("Typage incorrect");
        }
    }
    // 
    get proprietaire() {
        return __classPrivateFieldGet(this, _Voiture_proprietaire, "f");
    }
    set proprietaire(v) {
        if (!v) {
            //  v ne vaut pas null, undefined, "",0,false,NaN
            // let v=Math.sqrt(-2) => NaN
            // v=1/0 => 
            throw new Error("Pas possible");
        }
        __classPrivateFieldSet(this, _Voiture_proprietaire, v, "f");
    }
}
_Voiture_proprietaire = new WeakMap();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidm9pdHVyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL3ZvaXR1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsc0VBQXNFO0FBQ3RFLE1BQU0sT0FBTyxPQUFPO0lBTWhCLHlEQUF5RDtJQUN6RCxZQUFZLE1BQWEsRUFBUyxNQUFhLEVBQUUsa0JBQW9DO1FBQW5ELFdBQU0sR0FBTixNQUFNLENBQU87UUEyQi9DLGdDQUFxQixLQUFLLEVBQUM7UUExQnZCLElBQUksQ0FBQyxNQUFNLEdBQUMsTUFBTSxDQUFDO1FBQ25CLElBQUcsa0JBQWtCLEtBQUssU0FBUyxFQUFDLENBQUM7WUFDakMsNkNBQTZDO1lBQzdDLElBQUksQ0FBQyxZQUFZLEdBQUMsTUFBTSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7YUFDSSxJQUFHLE9BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxLQUFHLFFBQVEsRUFBQyxDQUFDO1lBQzNDLGdFQUFnRTtZQUNoRSxJQUFJLENBQUMsWUFBWSxHQUFDLGtCQUFrQixDQUFDO1lBQ3JDLElBQUksQ0FBQyxJQUFJLEdBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7YUFDSSxJQUFJLE9BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxLQUFHLFFBQVEsRUFBQyxDQUFDO1lBQzVDLHdEQUF3RDtZQUN4RCxJQUFJLENBQUMsWUFBWSxHQUFDLE1BQU0sQ0FBQztZQUN6QixJQUFJLENBQUMsSUFBSSxHQUFDLGtCQUFrQixDQUFDO1FBQ2pDLENBQUM7YUFBSSxDQUFDO1lBQ0YsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7SUFFTCxDQUFDO0lBU0QsR0FBRztJQUNILElBQUksWUFBWTtRQUNaLE9BQU8sdUJBQUEsSUFBSSw2QkFBYyxDQUFDO0lBQzlCLENBQUM7SUFFRCxJQUFJLFlBQVksQ0FBQyxDQUFRO1FBQ3JCLElBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQztZQUNILGlEQUFpRDtZQUNqRCw2QkFBNkI7WUFDN0IsWUFBWTtZQUNWLE1BQU0sSUFBSSxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDdEMsQ0FBQztRQUNBLHVCQUFBLElBQUkseUJBQWUsQ0FBQyxNQUFBLENBQUM7SUFFMUIsQ0FBQztDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVuZCBsYSBjbGFzc2UgVm9pb3R1cmUgdmlzaWJsZSBkYW5zIGxlcyBhdXRyZXMgZmljaGllcnMgdmlhIGltcG9ydFxyXG5leHBvcnQgY2xhc3MgVm9pdHVyZXtcclxuXHJcbiAgICAvLyBqZSBkw6ljbGFyZSAzIHNpZ25hdHVyZXMgcG91ciBsZSBjb25zdHJ1Y3RldXIgPT4gISB1bmUgc2V1bGUgaW1wbMOpbWVudGF0aW9uXHJcbiAgICBjb25zdHJ1Y3RvcihtYXJxdWU6c3RyaW5nLG1vZGVsZTpzdHJpbmcscHJvcHJpZXRhaXJlOnN0cmluZyk7XHJcbiAgICBjb25zdHJ1Y3RvcihtYXJxdWU6c3RyaW5nLG1vZGVsZTpzdHJpbmcpO1xyXG4gICAgY29uc3RydWN0b3IobWFycXVlOnN0cmluZyxtb2RlbGU6c3RyaW5nLHByaXg6bnVtYmVyKTtcclxuICAgIC8vIHN1aXZpIGQndW5lIGltcGzDqW1lbnRhdGlvbiBxdWkgY291dnJlIGxlcyBkw6ljbGFyYXRpb25zXHJcbiAgICBjb25zdHJ1Y3RvcihtYXJxdWU6c3RyaW5nLCBwdWJsaWMgbW9kZWxlOnN0cmluZywgcHJvcHJpZXRhaXJlT3JQcml4PyA6c3RyaW5nIHwgbnVtYmVyICl7XHJcbiAgICAgICAgdGhpcy5tYXJxdWU9bWFycXVlO1xyXG4gICAgICAgIGlmKHByb3ByaWV0YWlyZU9yUHJpeCA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgLy8gIGNvbnN0cnVjdG9yKG1hcnF1ZTpzdHJpbmcsbW9kZWxlOnN0cmluZyk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHJpZXRhaXJlPVwiVG90b1wiO1xyXG4gICAgICAgICAgICB0aGlzLnByaXg9MTAwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodHlwZW9mKHByb3ByaWV0YWlyZU9yUHJpeCk9PT1cInN0cmluZ1wiKXtcclxuICAgICAgICAgICAgLy8gY29uc3RydWN0b3IobWFycXVlOnN0cmluZyxtb2RlbGU6c3RyaW5nLHByb3ByaWV0YWlyZTpzdHJpbmcpO1xyXG4gICAgICAgICAgICB0aGlzLnByb3ByaWV0YWlyZT1wcm9wcmlldGFpcmVPclByaXg7XHJcbiAgICAgICAgICAgIHRoaXMucHJpeD0xMDAwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mKHByb3ByaWV0YWlyZU9yUHJpeCk9PT1cIm51bWJlclwiKXtcclxuICAgICAgICAgICAgLy8gY29uc3RydWN0b3IobWFycXVlOnN0cmluZyxtb2RlbGU6c3RyaW5nLHByaXg6bnVtYmVyKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcmlldGFpcmU9XCJUb3RvXCI7XHJcbiAgICAgICAgICAgIHRoaXMucHJpeD1wcm9wcmlldGFpcmVPclByaXg7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlR5cGFnZSBpbmNvcnJlY3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyAgbWFycXVlOnN0cmluZyB8IHVuZGVmaW5lZDsgaW5pdGlhbGlzYXRpb24gcG9zc2libGUgc2kgbWFycXVlIHBldXQgw6p0cmUgdW5kZWZpbmVkIGRhbnMgbGUgbcOpdGllclxyXG4gICAgLy9wcml4PTA7IC8vIGluaXRpYWxpc2F0aW9uIGF2ZWMgdmFsZXVyIHBhciBkw6lmYXV0ICh0b3Vqb3VycyBldHJlIHZhbGlkZSlcclxuICAgIHB1YmxpYyBtYXJxdWUgOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcHJpeDpudW1iZXI7XHJcbiAgICAjcHJvcHJpZXRhaXJlOnN0cmluZz1cIk1vaVwiO1xyXG5cclxuICAgIC8vIFxyXG4gICAgZ2V0IHByb3ByaWV0YWlyZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLiNwcm9wcmlldGFpcmU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHByb3ByaWV0YWlyZSh2OnN0cmluZyl7XHJcbiAgICAgICAgaWYoIXYpeyBcclxuICAgICAgICAgICAgLy8gIHYgbmUgdmF1dCBwYXMgbnVsbCwgdW5kZWZpbmVkLCBcIlwiLDAsZmFsc2UsTmFOXHJcbiAgICAgICAgICAgIC8vIGxldCB2PU1hdGguc3FydCgtMikgPT4gTmFOXHJcbiAgICAgICAgICAgIC8vIHY9MS8wID0+IFxyXG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBhcyBwb3NzaWJsZVwiKTsgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAgdGhpcy4jcHJvcHJpZXRhaXJlPXY7IFxyXG5cclxuICAgIH1cclxufVxyXG5cclxuIl19