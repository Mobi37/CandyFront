<template>
    <div class="foot">
        <div class="mid-all mainfoot">
            <div class="coompanyName">TICCOC Company</div>
            <div class="img"></div>
            <div>© 2021 Candyvery</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FooterCake'
}
</script>

<style scoped>

.foot{
    height: 84px;
    background-color: #f7f7f7;
    display: flex;
    
}
.mainfoot{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.coompanyName{
    font-size: 30px;
}
.img{
    background-image: url(./static/companylogo.png);
    width: 81px;
    height: 62px;
}

</style>