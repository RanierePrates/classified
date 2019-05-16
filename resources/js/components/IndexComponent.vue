<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-8">
                    <input type="search" name="" placeholder="Pesquisar por título" class="form-control">
                </div>
                <div class="col-2">
                    <button class="btn btn-outline-primary">Pesquisar</button>
                </div>
                <div class="col-2">
                    <button class="btn btn-secondary" v-on:click="openFormInsertAnnouncement()">
                        Inserir Anúncio
                    </button>
                </div>
            </div>
            <form-announcement-component :visible="visible"></form-announcement-component>
            <announcement-component></announcement-component>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                visible: false
            }
        },
        methods: {
            openFormInsertAnnouncement() {
                this.visible = true;
            }
        }
    }
</script>
