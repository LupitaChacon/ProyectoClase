/**
 * Created by lupita on 23/05/16.
 */
exports.Name = function(args){

    this.id = args.id
    this.name = args.name || "testName"
    console.log(this.id)
    console.log(this.name)
    this.hello = function(name){
        console.log(name)
    }
}