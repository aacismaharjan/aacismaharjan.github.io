<?php
// Function to compress images
function compress_images($directory, $minSize, $quality = 20) {
    // Step 1: Get all files in the directory with jpg, jpeg, or png extensions
    $files = glob($directory . '/*.{jpg,jpeg,png}', GLOB_BRACE);
    
    echo ("Compressing...");
    print_r($files);

    // Step 2: Iterate through each file
    foreach($files as $file) {

        echo(fileSize($file));
        // Step 3: Get the file size
        $fileSize = filesize($file);

        // Step 4: Check if the file size is greater than the minimum size
        if ($fileSize > $minSize) {
            // Step 5: Get the file extension
            $extension = strtolower(pathinfo($file, PATHINFO_EXTENSION));

            // Step 6: Check if the file is an image (jpg, jpeg, png)
            if (in_array($extension, ['jpg', 'jpeg', 'png'])) {
                // Step 7: Load the image based on its extension
                switch ($extension) {
                    case 'jpg':
                    case 'jpeg':
                        $image = imagecreatefromjpeg($file);
                        break;
                    case 'png':
                        $image = imagecreatefrompng($file);
                        break;
                    default:
                        break; // Skip unsupported file types
                }

                // Step 8: Compress the image
                imagejpeg($image, $file, $quality);

                // Step 9: Free up memory by destroying the image resource
                imagedestroy($image);
            }
        }
    }
}

// Step 10: Specify the directory containing the images
$directory = "C:\Users\aashi\Documents\Projects\aacismaharjan\src\assets\portfolio";

// Step 11: Specify the minimum size in bytes
$minSize = 1024 * 1024; // 1MB
$minSize /= 10; // Size of 50KB

// Step 12: Compress images in the directory with size greater than minSize
compress_images($directory, $minSize);
?>
