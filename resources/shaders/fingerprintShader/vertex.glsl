attribute vec3 aRandomColors;
attribute float aRandom;

uniform sampler2D uTexture;
uniform float uWidth;
uniform float uHeight;
uniform float uPointSize;
uniform float uPixelRatio;
uniform float uTime;
uniform float uTimeLine;

varying vec3 vRandomColor;
varying vec4 vPointColor;


void main (){
    vec3 vertexPosition = position;

    //Create animation
    float originalPosition = position.z;
    float randomDistance = aRandom*2.0;
    float frameOrigin = 200.0;
    float newTimeLine = abs(uTimeLine-frameOrigin)*-1.0+frameOrigin;
    // float newTimeLine = (pow((uTimeLine-frameOrigin)*0.1, 3.0)*+100.0);
    float x = newTimeLine; //-5.0 used to make the values of x can go bellow 0
    
    //Aplicando randomicidad a los vertices (posicion inicial)
    vertexPosition.z += randomDistance*50.0+40.0;

    
    vertexPosition.z -= x;
    vertexPosition.z = clamp(vertexPosition.z, originalPosition, 1000.0);
    vertexPosition.z += uTimeLine*0.075;
    // vertexPosition.z += 50.0;


    vec4 modelPosition = modelMatrix * vec4(vertexPosition, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;

    //PointSize
    gl_PointSize = uPointSize;

    //Perspective & pixelRatio fix
    gl_PointSize *= clamp(1.0/ -viewPosition.z, 0.0, 0.5);
    gl_PointSize *= uPixelRatio;



    //Varyings
    vRandomColor = aRandomColors;

    vec2 vertexUv = vec2(vertexPosition.x/uWidth, vertexPosition.y/uHeight);
    vertexUv.x += 0.5;
    vertexUv.y += 0.5;
    
    vPointColor = texture2D(uTexture, vertexUv); 
    vPointColor -= vec4(step(vPointColor.r, 0.5));

}