/**
 * Created by lupita on 23/05/16.
 */
var test = require('../lib/test')
var t1 = new test.Name({'id':2, 'name':'Lupita'})
t1.hello('Edgar')

var database = require('../lib/library')
var data = new database.Test()
data.putSimple(1,'my data')
data.putSimple('potatoe', 'ketchup')

data.getKey('potatoe')
data.getKeyFalsa(1)
data.showHello()