<template>
    <div class="mid-all blockMain">
        <div class="filters">
            <div class="namef-filt font">Фильтр:</div>
            <button class="price">
                <div>Цена</div>
                <div class="el-icon-arrow-up js-arrow "></div>
            </button>
        </div>
        <div class="cardsCake">
            <card-cakes :cakes="cakes" />
        </div> 
    </div>
</template>

<script>
import CardCakes from './CardCakes.vue'
import { mapState, mapActions } from 'vuex'
export default {
    name: 'MainBlock',
    mounted() {
        this.getCakes()
    },
    components: {
        CardCakes
    },
    computed:{
        ...mapState('modules/cakeShop',[
            'cakes'
        ]),
    },
    methods: {
        ...mapActions('modules/cakeShop', [
            'getCakes'
        ]),
    }
}
</script>

<style scoped>

.blockMain{
    margin-top: 40px;
    margin-bottom: 40px;
}

.price{
    display: flex;
    border: none;
    background-color: initial;
    margin-left: 15px;
    margin-right: 15px;
    cursor: pointer;
    margin-top: 4px;
    font-size: 22px;
}
.filters{
    display: flex;
    margin-bottom: 10px;
    
}
.font{
    font-size: 25px;
}

</style>