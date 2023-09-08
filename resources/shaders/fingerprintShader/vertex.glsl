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

    //Random distnace o 
    float lenthDistance = (clamp(length(vertexPosition), 0.25, 1.0)+length(vertexPosition)*0.1);
    float randomDistance = abs(aRandom*10.0)+pow(lenthDistance,2.0);
    float timeLine = (pow((uTimeLine*0.02)-5.0, 7.0));

    vertexPosition.z += uTimeLine*0.09;
    vertexPosition.z += timeLine*randomDistance;
    // vertexPosition.z += uTime*0.1;

    // vertexPosition.z *=  randomDistance*100.0;

    vec4 modelPosition = modelMatrix * vec4(vertexPosition, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;

    //PointSize
    gl_PointSize = uPointSize;

    //Perspective & pixelRatio fix
    gl_PointSize *= (1.0/ -viewPosition.z)*uPixelRatio;

    //Varyings
    vRandomColor = aRandomColors;

    vec2 vertexUv = vec2(vertexPosition.x/uWidth, vertexPosition.y/uHeight);
    vertexUv.x += 0.5;
    vertexUv.y += 0.5;
    
    vPointColor = texture2D(uTexture, vertexUv);
        
    vPointColor -= vec4(step(vPointColor.r, 0.5));

}