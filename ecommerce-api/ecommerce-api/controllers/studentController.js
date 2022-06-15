class Student {
    constructor(){

    }
    home(type){
        let data = this.getInfo(type, 1)
        return data+5
    }
    userId(){
        return 12
    }
    getInfo(){
        return 10
    }
    finalMarks(total){
        let external = this.getExternal(total);
        let internal = this.getInternal(total);
        let finalSum = external + internal + 5;
        return finalSum
    }
    getExternal(total){
        return total + 2
    }
    getInternal(total){
        return total - 2
    }
    myData(){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>resolve(10),1500)
        })
    }
}

module.exports = Student