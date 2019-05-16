<template>
    <div>
        <transition name="fade-form-announcement">
            <div id="form-insert-announcement" v-show="visible" class="card mt-2">
              <div class="card-body">
                <h5 class="card-title">Inserir Novo Anúncio</h5>
                <p class="card-text">
                    <form>
                        
                        <div class="form-group">
                            <label for="input-title-announcement">Titulo: </label>
                            <input type="text" class="form-control" id="input-title-announcement" 
                                    placeholder="Digite o titulo de seu anúncio">
                        </div>

                        <div class="form-group">
                            <label for="input-price-announcement">Valor: </label>
                            <input type="text" class="form-control" id="input-price-announcement" 
                                    placeholder="Digite o valor de seu anúncio">
                        </div>

                        <div class="form-group">
                            <label for="input-categorie-announcement">Categoria: </label>
                            <select class="form-control" id="input-categorie-announcement">
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="textarea-description-announcement">Descrição</label>
                            <textarea placeholder="Digite aqui a descrição do seu anúncio" class="form-control" 
                                        id="textarea-description-announcement" rows="3">
                            </textarea>
                        </div>

                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="input-photo-announcement">
                            <label class="custom-file-label" for="input-photo-announcement">
                                Selecione uma foto
                            </label>
                        </div>

                        <button class="btn btn-outline-primary mt-3">Inserir</button>
                        <button class="btn btn-outline-danger mt-3 ml-2" v-on:click="closeFormAnnouncement()">
                            Cancelar
                        </button>
                        
                    </form>
                </p>
              </div>
            </div>
        </transition> 
    </div>
</template>

<script>
    export default {
        props: ['visible'],
        methods: {
            closeFormAnnouncement() {
                event.preventDefault();
                this.visible = false;
            }
        }
    }
</script>


<style scoped>
    .fade-form-announcement-enter, .fade-form-announcement-leave-active {
        opacity: 0;
    }

    .fade-form-announcement-enter-active, .fade-form-announcement-leave-active {
        transition: opacity .5s;
    }
</style>
