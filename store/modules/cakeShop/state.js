export default () => ({
    cakes: [],
    order: {
        cakes: [],
        contact: {
            name: '',
            phone: '',
            email: '',
            address: ''
        },
        count:0,
        status: {
            key: 'prepare',
            name: 'Готовится' 
        },
        responsible: {}
    },
    response: {
        success: false
    },
})