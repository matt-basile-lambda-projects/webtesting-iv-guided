const request = require('supertest');
const server = require('./server.js');

describe('server.js', () => {
  it('should set testing environment', ()=>{
      expect(process.env.DB_ENV).toBe('testing');
  })
  describe('GET /', () => {
    it('should return 200 ok', () => {
       return request(server).get('/')
        .then(res=>{
            expect(res.status).toBe(200)
        })
    });
    // ASYNC VERSION
    it('ASYNC/AWAIT should return 200 ok', async () => {
       const res = await request(server).get('/')
       expect(res.status).toBe(200)
    });
    it('Should return JSON', async () => {
        const res = await request(server).get('/');
        expect(res.type).toBe('application/json')
    });
    it('Should return {api: "up"}}', async () => {
        const res = await request(server).get('/');
        expect(res.body).toEqual({"api": "up"})
    });
      
  });
})


//http status code
//format of the data (JSON)
//shape of the response body