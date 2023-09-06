varying vec3 vRandomColor;
varying vec4 vPointColor;


void main (){
    
    // vec4 color = vec4(gl_PointCoord.xy, 1.0, 1.0);

    vec4 color = vec4(vRandomColor.r*vPointColor.r, vRandomColor.g*vPointColor.g, vRandomColor.b*vPointColor.b, vPointColor.a);

    // color.w = ;

    gl_FragColor = vec4(color);

    // if(gl_FragColor.r < 0.1){
    //     discard;
    // }


}