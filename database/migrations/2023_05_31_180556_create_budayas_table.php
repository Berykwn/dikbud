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
        Schema::create('budayas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('kategori_budaya_id')->constrained('kategori_budayas');
            $table->string('thumbnail');
            $table->string('nama');
            $table->text('deskripsi');
            $table->text('konten');
            $table->string('sumber')->nullable();
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
        Schema::dropIfExists('budayas');
    }
};