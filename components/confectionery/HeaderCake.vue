<template>
    <div class="head">
        <div class="info">
            <div class="img"></div>
            <div class="namecond cart">Candyvery</div>
            <div class="shop-cart">
                <div>{{sumTotal}}</div>
                <div><el-button @click="dialogVisible = true" class="el-icon-shopping-cart-2 cart" /></div>
            </div>
        </div>

        <el-dialog
        title="Корзина"
        :visible.sync="dialogVisible"
        width="620px"
        top="10vh">
            <span>
                 <el-table
                    :data="order.cakes"
                    stripe
                    style="width: 100%"
                    empty-text="Корзина пустая">
                        <el-table-column
                        prop="name"
                        label="Название"
                        width="420">
                        </el-table-column>
                        <el-table-column
                        prop="price"
                        label="Цена">
                        </el-table-column>
                        <el-table-column
                        label="Удалить">
                            <template slot-scope="scope">
                                <el-button v-on:click="deleteCake(scope.$index)" type="danger" icon="el-icon-delete" circle></el-button>
                            </template>
                            
                        </el-table-column>
                </el-table>
                <span>Сумма заказа: {{sumTotal}}</span>
            </span>
            <div>
                <div class="orderer">Данные заказчика</div>
                <el-form :label-position="labelPosition" label-width="100px">
                    <el-form-item label="ФИО">
                        <el-input v-model="name"></el-input>
                    </el-form-item>
                    <el-form-item label="Номер">
                        <el-input
                            maxlength="11"
                            show-word-limit 
                            v-model="phone">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="Email">
                        <el-input  v-model="email"></el-input>
                    </el-form-item>
                    <el-form-item label="Адрес">
                        <el-input v-model="address"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button v-on:click="createOrder()" type="primary" @click="dialogVisible = false">Заказать</el-button>
            </span>
        </el-dialog>

        <el-dialog
        title="Заказ"

        :visible.sync="answer"
        width="620px"
        top="10vh">
            <span class="answer-request">Ваш заказ приянт<br> Ожидайте звонка </span>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="clearTrash()">ОК</el-button>
            </span>
        </el-dialog>

    </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex'
export default {
    name: 'HeaderCake',
    data() {
      return {
        dialogVisible: false,
        labelPosition: 'top',
      };
    },
    computed: {
        ...mapState('modules/cakeShop',{
            order: state => state.order,
            contact: state => state.order.contact,
            answer: state => state.response.success
        }),
        sumTotal() {
            let all_price = 0;
            this.order.cakes.forEach(val => {
                all_price += Number(val.price);
            });
            this.addAmount(all_price)
            return all_price
        },
        name: {
            set(value){
                this.setName(value)
            },
            get() {
                return this.contact.name
            }
        },
        phone: {
            set(value){
                this.setPhone(value)
            },
            get() {
                return this.contact.phone
            }
        },
        email: {
            set(value){
                this.setEmail(value)
            },
            get() {
                return this.contact.email
            }
        },
        address: {
            set(value){
                this.setAddress(value)
            },
            get() {
                return this.contact.address
            }
        },
    },
    methods:{
        ...mapActions('modules/cakeShop', [
             'deleteCake',
             'setName',
             'setPhone',
             'setEmail',
             'setAddress',
             'createOrder',
             'addAmount',
             'clearTrash'
        ])
    },
}
</script>

<style scoped>

.orderer{
    font-size: 21px;
    margin-top: 15px;
    margin-bottom: 15px;
}

.answer-request{
    font-size: 17px;
    line-height: 1.5em;
}

.head{
    background-color: #f7f7f7;
    height: 84px;
    display: flex;
    justify-content: center;
}

.info{
    width: 1280px;
    margin: auto;
    display: flex;
    justify-content: space-between;
}

.img{
    background-image: url(./static/logo.png);
    background-repeat: no-repeat;
    width: 120px;
    height: 76px;
}

.cart{
    font-size: 30px;
    border: none;
    background-color: #f7f7f7;
    cursor: pointer;
}
.namecond{
    margin-top: 22px;
    font-family: 'Marck Script';
}
.shop-cart {
    width: 120px;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

</style>