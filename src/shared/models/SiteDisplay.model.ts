import { Type } from "@angular/core"
import { Address } from "ngx-google-places-autocomplete/objects/address"
import { SubRegionService } from "../services/sub-region.service"

export class SiteDisplay{
    CodeSite?:number
    NameSiteKind?:string
    NameSite?:string
    Adress?:string
    NameSub_Region?:string
    NameRegion?:string
    ExtraLevel?:number
    MinAge?:number
    MaxAge?:number
    MisLiterWater?:number
    Free_notFree?:string
    Car_bus?:string
    TimeSpend?:number
    StatusSite?:string
     SiteDiplay(code:number,name:string,type:string,address:string,sub:string,region:string,extra:number,min:number,max:number,mis:number,free:string,car:string,misSpend:number,status:string):void{
        this.CodeSite=code;
        this.NameSite=name;
        this.NameSiteKind=type;
        this.Adress=address;
        this.NameSub_Region=sub;
        this.NameRegion=region;
        this.ExtraLevel=extra;
        this.MinAge=min;
        this.MaxAge=max;
        this.MisLiterWater=mis;
        this.Free_notFree=free;
        this.Car_bus=car;
        this.TimeSpend=misSpend;
        this.StatusSite=status;
    }
}