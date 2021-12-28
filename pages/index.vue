<template>
    <div>
        <cake-shop />
    </div>
</template>

<script>
import CakeShop from '../components/confectionery/CakeShop.vue'
export default {
    components: {
        CakeShop
    }
}
</script>

<style>

@font-face {
    font-family: 'Marck Script';
    src: local('Marck Script'), local('MarckScript-Regular'), url('./static/font/marckscript.woff2') format('woff2'), url('./static/font/marckscript.woff') format('woff'), url('./static/font/marckscript.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
}

body{
    margin: 0px;
    background-image: url("./static/site-bg.jpg");
}
.mid-all{
    width: 1280px;
    margin: auto;
}


</style>