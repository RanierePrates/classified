<template>
    <div>
        <transition name="fade-form-announcement">
            <div id="div-insert-announcement" v-show="visible" class="card mt-2">
              <div class="card-body">
                <h5 class="card-title">Inserir Novo Anúncio</h5>
                <p class="card-text">
                    <form id="form-insert-announcement" enctype="multipart/form-data">
                        
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
                            <label for="select-categorie-announcement">Categoria: </label>
                            <select class="form-control" id="select-categorie-announcement">
                                <option v-for="categorie in categories" :value="categorie.id">
                                    {{ categorie.categorie }}
                                </option>
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

                        <button class="btn btn-outline-primary mt-3" v-on:click="insertNewAnnouncement()">
                            Inserir
                        </button>
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
        data() {
            return {
                categories: [],
                image: ''
            }
        },
        methods: {
            closeFormAnnouncement() {
                event.preventDefault();
                this.visible = !this.visible;
            },
            insertNewAnnouncement() {
                event.preventDefault();
                let form = document.querySelector("#form-insert-announcement");

                const params = {                    
                    title: form.querySelector("#input-title-announcement").value,
                    price: form.querySelector("#input-price-announcement").value,
                    categorie_id: form.querySelector("#select-categorie-announcement").value,
                    description: form.querySelector("#textarea-description-announcement").value,
                    photo: form.querySelector("#input-photo-announcement").files[0]                    
                }

                axios.post('/announcements', params)
                    .then(response => response.data)
                    .then(data => {
                        console.log(data)
                    })
                    

                

            }
        },
        created() {
            this.$http.get('/categories')
                .then(response => response.json())
                .then(categories => this.categories = categories)
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
