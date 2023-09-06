attribute vec3 aRandomColors;

uniform float uPointSize;
uniform float uPixelRatio;
uniform float uTime;
uniform float uDepth;
uniform float uCameraPositionZ;

varying vec3 vRandomColor;

//Model matrix
//View Matrix
//Projection matrix 


void main (){
    vec3 vertexPosition = position;

    // float t = uTime*0.1;
    // t += distance(vertexPosition.z, 0.0);

    // //Animation
    // vertexPosition.z += (t - floor((t+1.0)))*uDepth;

    // vertexPosition.z += uTime;
    
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


}