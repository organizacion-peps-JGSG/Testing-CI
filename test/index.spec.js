/**
 * Pruebas unitarias 
 * @author: José Gaspar Sánchez García.
 */

const chai = require('chai');
const mocha = require('mocha');  
const assert = chai.assert;    // Using Assert style
const expect = chai.expect;    // Using Expect style
const should = chai.should();  // Using Should style

const {uno, zero, saludar} = require('../js/index');

describe('Banco de pruebas unitarias', () => {
    describe('Caso de pruebas 1', () => {
        it('uno() == 1', () => {
            assert.equal(uno(),1, "Uno");
        });

        it('zero() == 0', () => {
            assert.equal(zero(),0, "Zero");
        });
    });

    describe('Caso de pruebas 2', () => {
        it('zero() == 0', () => {
            assert.equal(zero(),0, "Zero");
        });
    });
    describe('Caso de pruebas 3', () => {
        it('saludar() es una cadena', () => {
            assert.isString(saludar(), "Saludar");
        });

        it('saludar() == Hola mundo', () => {
            assert.equal(saludar(), "Hola mundo");
        });
    });
});

