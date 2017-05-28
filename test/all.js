/**
 * Created by Fabio on 28/05/2017.
 */
const assert = require('assert');
const humanPassword = require('../index');

describe('HumanPassword test', function () {

    describe('generate', function () {

        it('should be return 10', function () {
            let result = humanPassword({
                digits: 4,
                couples: 3
            });
            console.log(result);
            assert.equal(10, result.length);
            assert.equal(true, typeof result.substring(0, 6) === 'string');
            assert.equal(true, typeof parseInt(result.substring(6, 10)) === 'number' && result.substring(6, 10).length === 4);
        });

        it('should be return error with digits as string', function (done) {
            try{
                humanPassword({
                    digits: 'esdsdsd'
                });
            }catch(e) {
                done()
            }
        });

        it('should be return error with couples as string', function (done) {
            try{
                humanPassword({
                    couples: 'hhhhahha'
                });
            }catch(e) {
                done()
            }
        });

        it('should be return error with randomUpper as string', function (done) {
            try{
                humanPassword({
                    randomUpper: 'esdsdsd'
                });
            }catch(e) {
                done()
            }
        });

    });

    describe('randomNumber', function () {
        it('should be return 4 digits', function () {
            let result = humanPassword._randomNumber(4);
            assert(result.toString().length, 4)
        });

        it('should be return error with string as param', function (done) {
            try {
                humanPassword._randomNumber('4');
            } catch (e) {
                done();
            }
        });
    });

    describe('randomBoolean', function () {
        it('should be type boolean', function () {
            assert('boolean', typeof humanPassword._randomBoolean());
        });
    });

    describe('randomItem', function () {
        it('should be type boolean', function () {
            assert(1, humanPassword._randomItem([1]));
        });
    });
});