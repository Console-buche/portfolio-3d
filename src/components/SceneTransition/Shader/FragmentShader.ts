import { glsl } from '../../../helpers/glsl';

export const fragmentShader = glsl`
varying vec2 vUv;
uniform float time;
float ALPHA = 1.;

float fragmentationPixel = 1000.;
float fragmentation = 10.;



float rand(vec2 n) { 
	return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float noise(vec2 p){
	vec2 ip = floor(p);
	vec2 u = fract(p);
	u = u*u*(3.0-2.0*u);
	
	float res = mix(
		mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),
		mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
	return res*res;
}

float circle(vec2 uv, vec2 pos, float rad) {
	float d = length(pos - uv) - rad;
	// return step(d, abs(sin(time * 10.) - 0.5));
	return 1.- smoothstep( 0.2, 0.4, d);
}




 


float circleSharp(vec2 uv, vec2 pos, float rad) {

	float d = length(pos  - uv ) - rad ;
	//    d += variation(diff, vec2(0.0, 1.0), 5.0, 2.0);
    // d -= variation(diff, vec2(1.0, 0.0), 5.0, 2.0);



	// return step(d, abs(sin(time * 10.) - 0.5));
	return step(d,  0.4);
}


float variation(vec2 v1, vec2 v2, float strength, float speed) {
	return sin(
        dot(normalize(v1), normalize(v2)) * strength + time * speed
    ) / 100.0;
}


void main() {


  float randomPoints = noise(vec2(fragmentation * vUv));
  float versleHaut = sin(randomPoints + time)  * 0.5;
  float moitieBas = step( vUv.y + versleHaut, 0.5);

  vec3 orange = vec3(1., 146./255., 62./255.);

  gl_FragColor = vec4(orange * moitieBas  , orange * moitieBas) ;


//   vec2 diff = vec2(0.5*2.)-vUv * 2.;
//     float len = length(diff);

//     len += variation(diff, vec2(0.0, 1.0), 5.0, 200.0);
//     len -= variation(diff, vec2(1.0, 0.0), 5.0, 200.0);

// 	float rad = 0.35;
// 	float width = 0.01;
    
//     float circle = smoothstep(rad-width, rad, len) - smoothstep(rad, rad+width, len);
    



//   gl_FragColor = vec4(vec3(1., 0., 0.) * circle, circle) ;
}
`;
