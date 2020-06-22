class DataHelprt {
    dataKey: string
    primaryKey: string

    constructor(dataKey: string, primaryKey: string) {
        this.dataKey = dataKey
        this.primaryKey = primaryKey
    }
    // 获取本地数据转换为数组
    readData() {
        let strData: string | null = localStorage.getItem(this.dataKey)
        let arrData: any = []
        if (strData !== null) {
            arrData = JSON.parse(strData)
        }
        return arrData
    }
    

}