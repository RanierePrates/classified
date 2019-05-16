<template>
	<div>		
	    <div class="card mt-3" v-for="announcement in announcements">
		  <div class="card-body">
		    <h5 class="card-title">{{ announcement.title }}</h5>
		    <p class="card-text">
                {{ announcement.description }}
            </p>
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
