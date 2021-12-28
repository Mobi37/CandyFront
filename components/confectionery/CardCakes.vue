<template>
    <div>
        <el-row :gutter="10">
            <el-col :span="8" v-for="(cake, index) in cakes" :key="index" >
                <el-card shadow="hover" :body-style="{ height: '460px' }" >
                <img :src="cake.key + '.png'" class="image">
                <div class="heiddd">
                    <div class="nameCakes cal">{{ cake.name }}</div>
                    <div class="main-text cal">{{  cake.description  }}</div>
                    <div class="bottom clearfix">
                        <span class="priceCake">Цена:{{cake.price}} рублей</span>
                        <el-button type="success" v-on:click="addCake(cake)">Добавить в корзину</el-button>
                    </div>
                </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'CardCakes',
    props:{
        cakes: Array
    },
    methods: {
        ...mapActions('modules/cakeShop', [
            'addCake',
        ])
    }
}
</script>

<style scoped>

.heiddd{
    height: 210px;
    display: flex;
    flex-direction: column;
}

.el-col{
    margin-bottom: 10px;
}
.el-card{
    height: 500px;
    background-color: #f7f7f7;
}

.image{
    width: auto;
    height: 250px;
}

.cal{
    font-family: Calibri;
}

.clearfix{
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    height: 150px;
}

.nameCakes{
    font-size: 21px;
    margin-bottom: 5px;
}
.main-text{
    font-size: 18px;
    line-height: 1.5em;
    margin-bottom: 15px;
}
.priceCake{
    margin-bottom: 9px;
    font-size: 18px;
    margin-right: 10px;
}
</style>