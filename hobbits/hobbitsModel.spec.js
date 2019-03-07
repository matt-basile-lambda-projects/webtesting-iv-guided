const db = require('../data/dbConfig.js');
const Hobbits = require('./hobbitsModel');


describe('hobbits modelo', () => {
    describe('insert()', () => {
        afterEach(async ()=>{
         await db('hobbits').truncate();
        });

        it('should insert the provided hobbit to db', async() => {
            const hobbit = await Hobbits.insert({name: 'Sam'})
            
            expect(hobbit.name).toBe('Sam')
        });
        it('should insert multiple hobbit to db', async() => {
            await Hobbits.insert({name: 'Sam'})
            await Hobbits.insert({name: 'Gaffer'})
            const hobbits = await db('hobbits')
            
            expect(hobbits).toHaveLength(2)
        });
    });
    
});