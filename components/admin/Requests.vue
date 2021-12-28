<template>
    <div class="container">
        <div class="header-page">
            <div class="name-page">Candyvery admin</div> 
        </div>
        <div class="order-table">
            <el-table
                :data="requests"
                border
                style="min-width: 1250px; width: 1250px">
                <el-table-column
                    prop="_id"
                    label="Номер заказа"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="cakes"
                    label="Торты"
                    width="280">
                    <template slot-scope="props">
                       <span v-for="(item, index) in props.row.cakes" :key="index">
                           {{item.name}} <br>
                       </span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="count"
                    label="Цена"
                    width="80">
                </el-table-column>
                <el-table-column
                    prop="status"
                    label="Статус заказа"
                    width="180">
                    <template slot-scope="scope" >
                        <SelectStatus :index="scope.$index" />
                    </template>
                </el-table-column>
                <el-table-column
                    label="Доставщик"
                    width="180">
                    <template slot-scope="scope">
                       <SelectStuff :index="scope.$index"/>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="contact"
                    label="Данные покупателя"
                    width="180">
                    <template slot-scope="props">
                       <span>
                           <div>ФИО: {{props.row.contact.name}}</div>
                           <div>Номер телефона: {{props.row.contact.phone}}</div>
                           <div>Email: {{props.row.contact.email}}</div>                                                  
                       </span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="Адрес доставки">
                    <template slot-scope="props">
                       <span>
                           {{props.row.contact.address}}
                       </span>
                    </template>
                </el-table-column>
                <el-table-column
                    label="Обновить">
                    <template slot-scope="scope">
                        <el-button v-on:click="approveRequest(scope.$index)" type="danger" icon="el-icon-s-claim" circle></el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import SelectStuff from './SelectStuff.vue'
import SelectStatus from './SelectStatus.vue'
export default {
    mounted() {
        this.getRequests(),
        this.getStuff(),
        this.clearStatus(),
        this.clearStuff()
    },
    name: 'Requests',
    data() {
        return {
        }
    },
    components: {
        SelectStuff,
        SelectStatus
    },
    computed: {
        ...mapState('modules/admin', {
            requests: state => state.requests,
            stuff: state => state.stuff
        }),
    },
    methods: {
        ...mapActions('modules/admin', [
            'getRequests',
            'getStuff',
            'approveRequest',
            'clearStatus',
            'clearStuff'
        ])
    }
}
</script>


<style scoped>

.name-page{
    font-size: 25px;
}
.header-page{
    display: flex;
    justify-content: center;
}

.order-table{
    margin-top: 50px;
}
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>