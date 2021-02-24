const faker = require('faker')

const orders = []

const generateId = () => (Date.now().toString() * Math.random() * 10).toFixed(0)

for (let index = 0; index < 1000; index++) {
    orders.push({
        id: generateId(),
        customer: faker.name.firstName(faker.random.number(1)),
        product: faker.commerce.productName(),
        quantity: faker.random.number(50),
        total: `$${100 + faker.random.number(300)}`
    })
}

function fetchOrders(page = 1) {
    const pageSize = 10
    const startAt = page == 1 ? 0 : (page - 1) * pageSize
    const endAt = startAt + (pageSize - 1)

    return orders.slice(startAt, endAt)
}

module.exports = {
    fetchOrders
}