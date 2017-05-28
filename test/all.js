/**
 * Created by Fabio on 28/05/2017.
 */
const assert = require('assert');
const humanPassword = require('../index');

describe('HumanPassword test', function () {

    describe('generate', function () {

        it('should return 10', function () {
            let result = humanPassword({
                digits: 4,
                couples: 3
            });
            console.log(result);
            assert.equal(10, result.length);
            assert.equal(true, typeof result.substring(0, 6) === 'string');
            assert.equal(true, typeof parseInt(result.substring(6, 10)) === 'number' && result.substring(6, 10).length === 4);
        });

        it('should return error with digits as string', function (done) {
            try{
                humanPassword({
                    digits: 'esdsdsd'
                });
            }catch(e) {
                done()
            }
        });

        it('should return error with couples as string', function (done) {
            try{
                humanPassword({
                    couples: 'hhhhahha'
                });
            }catch(e) {
                done()
            }
        });

        it('should return error with randomUpper as string', function (done) {
            try{
                humanPassword({
                    randomUpper: 'esdsdsd'
                });
            }catch(e) {
                done()
            }
        });

    });

});