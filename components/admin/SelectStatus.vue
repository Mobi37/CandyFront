<template>
    <el-select v-model="status" placeholder="Select">
        <el-option
        v-for="item in options"
        :key="item.key"
        :label="item.name"
        :value="item.key">
        </el-option>
    </el-select>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    name: 'SelectStatus',
    props: {
        index: Number
    },
    data() {
        return {
            statusKey: ''
        }
    },
    computed: {
        ...mapState('modules/admin', {
            options: state => state.status
        }),
        status: {
            set(value){
                this.statusKey = value
                this.pushStatus({index: this.$props.index, status: this.statusKey})
            },
            get() {
                return this.statusKey
            }
        }
    },
    methods: {
        ...mapActions('modules/admin', [
            'pushStatus'
        ])
    }
}
</script>