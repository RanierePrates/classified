<template>
	<div>		
	    <div class="card mt-3" v-for="announcement in announcements.data" :key="announcement.id">
		  <div class="card-body">
		    <h5 class="card-title">{{ announcement.title }}</h5>
            <hr>
		    <div class="card-text">
                <div class="row">
                    
                    <div class="col-12">
                        {{ announcement.description }}                    
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-7">
                        <div>
                            {{ announcement.price }}
                        </div>                        
                    </div>
                    <div class="col-5">
                        {{ announcement.created_at }}
                    </div>
                </div>
            </div>
		  </div>
		</div>
        <pagination :align="center" :data="announcements" @pagination-change-page="getResults">
        </pagination>
	</div>


</template>

<script>
    export default {
        data() {
        	return {
        		announcements: {}
        	}
        },

        mounted() {
            // Pega os resultados iniciais
            this.getResults();
        },

        methods: {
            getResults(page = 1) {
                this.$http.get('/announcements?page=' + page)            
                  .then(res => res.json())
                  .then(announcements => this.announcements = announcements, err => console.log(err));
            }
        }
    }
</script>

<style scoped>
	
</style>
