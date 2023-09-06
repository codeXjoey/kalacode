attribute vec3 aRandomColors;

uniform sampler2D uTexture;
uniform float uWidth;
uniform float uHeight;
uniform float uPointSize;
uniform float uPixelRatio;

varying vec3 vRandomColor;
varying vec4 vPointColor;

//Model matrix
//View Matrix
//Projection matrix 


void main (){
    vec3 vertexPosition = position;
    
    vec4 modelPosition = modelMatrix * vec4(vertexPosition, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;

    //PointSize
    gl_PointSize = uPointSize;

    //Perspective & pixelRatio fix
    gl_PointSize *= (1.0/ -viewPosition.z);
    gl_PointSize *= uPixelRatio;

    //Varyings
    vRandomColor = aRandomColors;

    vec2 vertexUv = vec2(vertexPosition.x/uWidth, vertexPosition.y/uHeight);
    vertexUv.x += 0.5;
    vertexUv.y += 0.5;
    
    vPointColor = (texture2D(uTexture, vertexUv));
    
    // vPointColor = vPointColor

}