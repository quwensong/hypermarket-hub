import {request} from "./request";

export function getDetail(iid) {
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
}

export function getRecommend() {
    return request({
        url:'/recommend',
        params:{

        }
    })
}

export class Goods{
    constructor(itemInfo,columns,services) {
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.realPrice = itemInfo.realPrice
        this.oldPrice = itemInfo.oldPrice
        this.columns = columns
        this.services = services
        this.realPrice = itemInfo.lowNowPrice
    }
}

export class GoodsInfo{
    
}

export class Shop{
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo
        this.name = shopInfo.name
        this.fans = shopInfo.cFans
        this.sells = shopInfo.cSells
        this.score = shopInfo.score
        this.goodsCount = shopInfo.cGoods
        this.isMarked = shopInfo.isMarked
    }
}