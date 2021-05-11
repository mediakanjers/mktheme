<?php

include '../../../../../../wp-load.php';


$module = isset($_GET['module']);

if( $module != null)
{
    echo $_GET['module'];

    if (file_exists( get_stylesheet_directory(). '/modules/' . $_GET['module'] )) 
    {
        echo 'ja';
    }
    else
    {
        echo 'nee';
    }
}
else
{
    if (file_exists( get_stylesheet_directory(). '/modules' )) 
    {
        $dir    = get_stylesheet_directory(). '/modules';
    
        $files1 = scandir($dir);

        $stringpoint = "";

        foreach( $files1 as $file)
        {
            if($stringpoint == "")
            {
                $stringpoint = $file;
            }
            else
            {
                $stringpoint .= '}"{'. $file;
            }
            
        }

        echo $stringpoint;
    }
}