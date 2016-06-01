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

/*
data.getKeyFalsa(1)
data.showHello()
*/

var library = new database.Library()

var key = "L0001"
var key1 = "L0002"
var key2 = "L0003"
var values = ["testTitle", "lupita Chacon", "CESUN"]
var values1 = {'title':'testTitle', 'author':'lupita Chacon', 'editorial':'CESUN'}
var values2 = {'title':'testTitle', 'author':'lupita Chacon', 'editorial':'CESUN'}

library.createBook(key,values)
library.createBook1(key1,values1)
library.createBook2(key2,values2)

library.getBook( key ,function(err, result)
{
    console.log(result)
});
library.getBook1( key1 ,function(err, result)
{
    console.log(result)
});
library.getBook2( key2 ,function(err, result)
{
    console.log(result)
});