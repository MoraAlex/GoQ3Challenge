const request = require('supertest');
const app = require('../server')

describe('Testing home url', () => {
    it('should response Hello world and status 200', async () => {
        const res = await request(app)
        .get('/');
        expect(res.statusCode).toEqual(200)
        expect(res.text).toEqual('Hello world')
    })
})

describe('Testing /second-api url', () => {
    it('should response status 200', async () => {
        const res = await request(app)
        .get('/jokes');
        expect(res.statusCode).toEqual(200)
    })
    it('should response status 404 when random activity type', async () => {
        const res = await request(app)
        .get(`/jokes/akohsjdasjd`);
        expect(res.statusCode).toEqual(404)
    })
})