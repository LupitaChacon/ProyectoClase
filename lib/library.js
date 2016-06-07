/**
 * Created by lupita on 23/05/16.
 */
var Redis = require('ioredis')
var redis = new Redis(6379,'localhost')

exports.Test = function(args){

    this.putSimple = function (key,value) {

        redis.set(key,value)
        console.log('Sucess!')

    }

    this.getKey = function(key){

        redis.get(key, function (err, result) {

            console.log(result)
            console.log('Run')

        })
    }

    /*
    this.showHello = function () {
        console.log('Hello')
    }

    this.getKeyFalsa = function (key) {
        console.log(redis.get(key))
        console.log('Run')
    }
    */
}

exports.Library = function(args){

    /*
    this.createBook = function (key,values) {

        redis.rpush(key, values)
        console.log("Sucess!")
    }
    */

    this.createBook = function (key,values) {

        console.log("[DEBUG][createbook values] %s", values);

        for(var val in values){
            console.log("Fields:%s Value:%s" , values[val], val);
            redis.rpush(key, values[val])
        }
    }

    this.createBook1 = function (key,values) {

        console.log("[DEBUG][createbook values 1] %s", values);

        for(var val in values){
            console.log("Fields:%s and Value:%s" , values[val], val);
            redis.rpush(key, values[val])
        }
    }

    this.createBook2 = function (key,values, set) {

        console.log("[DEBUG][createbook values 2] %s", JSON.stringify(values))

        redis.set(key, JSON.stringify(values))
        redis.sadd(set,key)

    }

    this.getBook = function (key, callback) {
        
        redis.lrange(key, 0, -1,function (err, result) {
            return callback(err, result)
        })
    }

    this.getBook1 = function (key, callback) {

        redis.lrange(key, 0, -1,function (err, result) {
            return callback(err, result)
        })
    }

    this.getBook2 = function (key, callback) {

        redis.get(key,function (err, result) {
            return callback(err, result)
        })
    }

    this.showBooks = function (set, callback){

        redis.smembers(set, function(err, result){

            return callback(err,result)
        })

    }

    this.changeBooksStatus = function(s1, s2, key){
        redis.smove(s1,s2,key)

    }


}