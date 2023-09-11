attribute vec3 aRandomColors;

uniform float uPointSize;
uniform float uPixelRatio;
uniform float uTime;
uniform float uTimeLine;
uniform float uDepth;

varying vec3 vRandomColor;

//Model matrix
//View Matrix
//Projection matrix 


void main (){
    vec3 vertexPosition = position;

    //Modified the wich change direction at time line value 300
    float timeLine = -abs(uTimeLine-280.0);
    float t = -(timeLine-uTime)*0.005;
    t += distance(vertexPosition.z, 0.0);

    //Particles go backwards when arrived to 0
    vertexPosition.z = (t - floor((t+1.0)))*uDepth;

    
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