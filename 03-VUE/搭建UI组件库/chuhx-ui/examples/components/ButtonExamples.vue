<template>
    <div id="app">
        <div class="row">
            <hx-button @click="fn" >按钮</hx-button>
            <hx-button type="primary">按钮</hx-button>
            <hx-button type="success">按钮</hx-button>
            <hx-button type="info">按钮</hx-button>
            <hx-button type="danger">按钮</hx-button>
            <hx-button type="warning">按钮</hx-button>
        </div>
        <div class="row">
            <hx-button icon="hx-close" plain>按钮</hx-button>
            <hx-button plain type="primary">按钮</hx-button>
            <hx-button plain type="success">按钮</hx-button>
            <hx-button plain type="info">按钮</hx-button>
            <hx-button plain type="danger">按钮</hx-button>
            <hx-button plain type="warning">按钮</hx-button>
        </div>
        <div class="row">
            <hx-button round plain>按钮</hx-button>
            <hx-button round plain type="primary">按钮</hx-button>
            <hx-button round plain type="success">按钮</hx-button>
            <hx-button round plain type="info">按钮</hx-button>
            <hx-button round plain type="danger">按钮</hx-button>
            <hx-button round plain type="warning">按钮</hx-button>
        </div>
        <div class="row">
            <hx-button circle plain>按</hx-button>
            <hx-button circle plain type="primary">按</hx-button>
            <hx-button circle plain type="success">按</hx-button>
            <hx-button circle plain type="info">按</hx-button>
            <hx-button circle plain type="danger">按</hx-button>
            <hx-button circle plain type="warning">按</hx-button>
        </div>
        <div class="row">
            <hx-button circle icon="hx-close" plain></hx-button>
            <hx-button circle icon="hx-close" plain type="primary"></hx-button>
            <hx-button circle icon="hx-close" plain type="success"></hx-button>
            <hx-button circle icon="hx-close" plain type="info"></hx-button>
            <hx-button circle icon="hx-close" plain type="danger"></hx-button>
            <hx-button circle icon="hx-close" plain type="warning"></hx-button>
        </div>
    </div>
</template>

<script>

export default {
    methods: {
        fn () {
            console.log(123)
        },
    },
}
</script>

<style lang="scss" scoped>
.row {
    padding: 20px 0;
    .hx-button {
        margin-right: 20px ;
    }
}
</style>
