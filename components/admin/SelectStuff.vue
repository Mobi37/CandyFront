<template>
<div>
    <el-select v-model="staffi" placeholder="Select">
        <el-option
        v-for="(item, index) in stuff"
        :key="index"
        :label="item.name"
        :value="item._id">
        </el-option>
    </el-select>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    name: 'SelectStuff',
    props: {
        index: Number
    },
    data() {
        return {
            stuffId: ''
        }
    },
    computed: {
        ...mapState('modules/admin', {
            stuff: state => state.stuff
        }),
        staffi: {
            set(value){
                this.stuffId = value
                this.pushStuff({index: this.$props.index, stuff: this.stuffId})
            },
            get() {
                return this.stuffId
            }
        }
    },
    methods: {
        ...mapActions('modules/admin', [
            'pushStuff'
        ])
    }
}
</script>