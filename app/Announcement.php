<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Announcement extends Model
{
    protected $fillable = ['user_id', 'title', 'photo', 'description', 'price', 'categorie_id'];

    public function categorie()
    {
    	return $this->belongsTo(Categorie::class);
    }
}
