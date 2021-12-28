<template>
    <div>
        <el-menu class="el-menu-demo mainMenu" mode="horizontal">
            <el-menu-item class="blockMenu" index="1"><a class="butHref" href="/admin/orders">Orders</a></el-menu-item>
            <el-menu-item class="blockMenu" index="1"><a class="butHref" href="/admin/requests">Requests</a></el-menu-item>
        </el-menu>
    </div>
</template>

<style scoped>

.butHref{
    font-size: 20px;
    text-decoration: none;
    color: rgb(131, 40, 40);
}
.blockMenu{
    margin-right: 15px;
    margin-left: 15px;
}

</style>