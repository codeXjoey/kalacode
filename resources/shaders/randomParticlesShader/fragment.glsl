varying vec3 vRandomColor;


void main (){
    
    float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
    float strength = 0.05 / distanceToCenter - 0.5;
    vec4 colorGlowPoint = vec4(vRandomColor.r*strength, vRandomColor.g*strength, vRandomColor.b*strength, strength);

    // gl_FragColor = colorGlowPoint;



    gl_FragColor = vec4(vRandomColor, 1.0);



}