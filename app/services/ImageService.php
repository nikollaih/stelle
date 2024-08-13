<?php
namespace App\Services;

use Illuminate\Support\Facades\Storage;
// import the Intervention Image Manager Class
use Intervention\Image\ImageManager;

class ImageService
{
    public static function handleUpload($file, $directory = 'profile_pictures')
    {
        try {
            // Generar un nombre único para el archivo
            $filename = time() . '_' . $file->getClientOriginalName();

            // Guardar la imagen en la carpeta especificada
            $path = $file->storeAs('public/' . $directory, $filename);

            // Optimize image
            $image = ImageManager::imagick()->read(storage_path('app/public/'.$directory.'/' . $filename))
                ->scale(height: 200);

            // Save the optimized image
            Storage::put('public/'.$directory.'/' . $filename, (string) $image->encode());

            // Retornar la URL de la imagen
            return Storage::url($path);
        } catch (\Exception $e) {
            // En caso de error, registrar el error y retornar una cadena vacía
            \Log::error('Error uploading file: ' . $e->getMessage());
            return "";
        }
    }
}
