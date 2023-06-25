<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('gambar_beritas', function (Blueprint $table) {
            $table->id();
            $table->string('gambar');
            $table->unsignedBigInteger('berita_id');
            $table->foreign('berita_id')->references('id')->on('beritas')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('gambar_beritas');
    }
};