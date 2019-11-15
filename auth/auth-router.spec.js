const request = require('supertest');
const router = require('./auth-router');

const input = {
    username: 'testing',
    password: 'testing'
}

describe('router', () => {
    describe('POST / register', () => {
        it('should return 200 OK', () => {
            request(router)
                .post('/register')
                .send(input)
                .set('Accept', 'application/json')
                .expect(200)
        })

        it('username should match "testing"', () => {
            request(router)
                .post('/register')
                .send(input)
                .set('Accept', 'application/json')
                .expect((res) => {
                    res.body.username.toLowerCase();
                })
                .expect(200, {
                    username: 'testing'
                })
        })
    })

})