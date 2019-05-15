<template>
	<div>		
	    <div class="card mt-3" v-for="announcement in announcements">
		  <div class="card-body">
		    <h5 class="card-title">{{ announcement.title }}</h5>
		    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
		    <a href="#" class="btn btn-primary">Go somewhere</a>
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
