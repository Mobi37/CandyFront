export default () => ({
    orders: [],
    requests: [],
    stuff: [],
    stackStatus: [],
    stackStuff: [],
    status:[
        {
            key: 'prepare',
            name: 'Готовится'
        },
        {
            key: 'sent',
            name: 'Отправлен'
        },
        {
            key: 'completed',
            name: 'Выполнен'
        }
    ]
})