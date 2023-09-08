varying vec3 vRandomColor;


void main (){
    
    // vec4 color = vec4(gl_PointCoord.xy, 1.0, 1.0);

    gl_FragColor = vec4(vRandomColor, 1.0);

    // if(gl_FragColor.r < 0.1){
    //     discard;
    // }


}