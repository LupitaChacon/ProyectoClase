/**
 * Created by lupita on 23/05/16.
 */
var Redis = require('ioredis')
var redis = new Redis(6379,'localhost')


exports.Library = function(args){

    this.createBook = function (key,values, set) {

        console.log("[DEBUG][createbook values] %s", JSON.stringify(values))

        redis.set(key, JSON.stringify(values))
        redis.sadd(set,key)

    }

    this.getBook = function (key, callback) {

        console.log("[DEBUG][getBook key] %s", key)

        redis.get(key,function (err, result) {
            return callback(err, result)
        })
    }

    this.showBooks = function (set, callback){

        console.log("[DEBUG][showBooks set] %s", set)
        redis.smembers(set, function(err, result){

            return callback(err,result)
        })

    }

    this.changeBooksStatus = function(s1, s2, key){
        console.log("[DEBUG][changeBooksStatus values] %s %s %s", s1, s2, key)
        redis.smove(s1,s2,key)
    }


}