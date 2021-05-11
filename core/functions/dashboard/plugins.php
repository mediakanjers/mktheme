<?php

include '../../../../../../wp-load.php';


function my_get_plugin_info() {

    // Get all plugins
    include_once( ABSPATH . 'wp-admin/includes/plugin.php' );
    $all_plugins = get_plugins();

    // Get active plugins
    $active_plugins = get_option('active_plugins');

    // Assemble array of name, version, and whether plugin is active (boolean)
    // foreach ( $all_plugins as $key => $value ) {
    //     $is_active = ( in_array( $key, $active_plugins ) ) ? true : false;
    //     $plugins[ $key ] = array(
    //         'name'    => $value['Name'],
    //         'domain'    => $value['TextDomain'],
    //         'version' => $value['Version'],
    //         'active'  => $is_active,
    //     );
    // }


    $stringplugins = "";


    foreach ( $all_plugins as $key => $value ) {
        $is_active = ( in_array( $key, $active_plugins ) ) ? true : false;


        if( $stringplugins != "") { $stringplugins .= ']"['; }

        $stringplugins .=  $value['TextDomain'];
        $stringplugins .= '}"{'.  $value['Name'];
        $stringplugins .= '}"{'.  $value['Version'];
        $stringplugins .= '}"{'.  $is_active;
    }

    //return $plugins;
    return $stringplugins;
}

//print ( my_get_plugin_info() );

//var_dump( my_get_plugin_info() );

echo my_get_plugin_info();


?>