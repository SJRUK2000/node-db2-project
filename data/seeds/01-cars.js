// STRETCH
const cars = [
    {
        vin: '11111111111111111',
        make: 'toyota',
        model: 'prius',
        mileage: 215000,
        title:  'clean',
        transmission: 'manual', 
    },
    {
        vin: '11111111111111112',
        make: 'toyota',
        model: 'carolla',
        mileage: 300852,
        title:  'salvage',
    },
    {
        vin: '11111111111111113',
        make: 'ford',
        model: 'focus',
        mileage: 52,
    },
]

exports.seed = async function (knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}