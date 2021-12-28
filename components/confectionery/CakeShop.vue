<template>
    <div>
        <header-cake />
        <main-block />
        <footer-cake/>
    </div>
</template>

<script>
import FooterCake from './FooterCake.vue'
import HeaderCake from './HeaderCake.vue'
import MainBlock from './MainBlock.vue'
export default {
    name: 'CakeShop',
    components: { 
        HeaderCake,
        MainBlock,
        FooterCake 
    },
}
</script>
