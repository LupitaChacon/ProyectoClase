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

}