const request = require('supertest')
const chai = require('chai')
const { expect, assert } = chai
const colors = require('colors')
const app = require('../app')
const testData = require('./data')

colors.setTheme({
    title: 'yellow',
    error: 'red',
    info: 'blue'
})

describe('[Connected Vehicles TEST]', () => {
    before(function() {
        it('Should remove customers', done => {
            return request(app)
                .delete('/v1/customers')
                .expect(200)
                .send()
                .end((err, res) => {
                    expect(res.body.status).to.equal(true)
                    console.log('status', res.body.status)
                    done()
                })
        })
    })

    for (const customer of testData) {
        describe(customer.name, function() {
            it('Should save customer and its vehicles', done => {
                request(app)
                    .post('/v1/customer')
                    .expect(200)
                    .send(customer)
                    .end((err, res) => {
                        expect(res.body.status).to.equal(true)
                        done()
                    })
            })
        })
    }
})
