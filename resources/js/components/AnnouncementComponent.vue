<template>
	<div>		
	    <div class="card mt-3" v-for="announcement in announcements">
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
	</div>


</template>

<script>
    export default {
        data() {
        	return {
        		announcements: []
        	}
        },

        created() {
    
            let promise = this.$http.get('/announcements');
            promise
              .then(res => res.json())
              .then(announcements => this.announcements = announcements, err => console.log(err));

        }
    }
</script>

<style scoped>
	
</style>
