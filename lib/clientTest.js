/**
 * Created by lupita on 23/05/16.
 */

var database = require('../lib/libraryTest')
var library = new database.Library()

var title = "Programacion 1"
var valuesBook = {'ISBN':'0000000123', 'author':'lupita Chacon', 'editorial':'CESUN'}
var setD = "Disponibles"
var setP = "Prestados"
var setRE = "Revista Electronica"


library.createBook(title, valuesBook, setD)
library.getBook( title ,function(err, result)
{
    console.log('getBook: ' + result)
});
library.showBooks( setD ,function(err, result)
{
    console.log('showBooks: ' + result)
});
library.changeBooksStatus(setD, setP, title)