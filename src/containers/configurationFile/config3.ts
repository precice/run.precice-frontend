/**
 * Created by pei on 25/08/2017.
 */

export const initial = '';
//TODO change the config
export const sub1 = 'interface';
export const sub2 = 'mesh';
export const sub3 = 'SU2';
export const sub4 = 'CalculiX';
export const sub5 = 'communication method';
export const sub6 = 'coupling scheme';

export const sec01 = {
  start: 1,
  total: 4,
  end: 4,
};
export const sec1 = {
  start: 5,
  total: 3,
  end: 7,
};
export const sec12 = {
  start: 8,
  total: 1,
  end: 8,
};
export const sec2 = {
  start: 9,
  total: 9,
  end: 17,
};
export const sec23 = {
  start: 18,
  total: 1,
  end: 18,
};
export const sec3 = {
  start: 19,
  total: 12,
  end: 30,
};
export const sec34 = {
  start: 31,
  total: 1,
  end: 31,
};
export const sec4 = {
  start: 32,
  total: 7,
  end: 38,
};
export const sec45 = {
  start: 39,
  total: 1,
  end: 39,
};
export const sec5 = {
  start: 40,
  total: 3,
  end: 42,
};
export const sec56 = {
  start: 43,
  total: 1,
  end: 43,
};
export const sec6 = {
  start: 44,
  total: 26,
  end: 69,
};
export const secEnd = {
  start: 70,
  total: 4,
  end: 73,
};

export const initialCodeString01 = `<?xml version="1.0"?>

<precice-configuration>
 `;

export const initialCodeString1 = `  <solver-interface dimensions="3">
    <data:vector name="Forces0"/>
    <data:vector name="DisplacementDeltas0"/>`;
export const initialCodeString12 = ``;
export const initialCodeString2 = `    <mesh name="SU2_Mesh0">
      <use-data name="Forces0"/>
      <use-data name="DisplacementDeltas0"/>
    </mesh>

    <mesh name="Calculix_Mesh">
      <use-data name="DisplacementDeltas0"/>
      <use-data name="Forces0"/>
    </mesh>`;
export const initialCodeString23 = ``;
export const initialCodeString3 = `    <participant name="SU2_CFD">
      <use-mesh name="Calculix_Mesh" from="Calculix"/>
      <use-mesh name="SU2_Mesh0" provide="yes"/>
      <write-data name="Forces0" mesh="SU2_Mesh0"/>
      <read-data  name="DisplacementDeltas0" mesh="SU2_Mesh0"/>
      <mapping:nearest-neighbor
        direction="write" from="SU2_Mesh0" to="Calculix_Mesh"
        constraint="conservative" timing="initial"/>
      <mapping:nearest-neighbor 
        direction="read" from="Calculix_Mesh" to="SU2_Mesh0" 
        constraint="consistent" timing="initial"/>
    </participant>`;
export const initialCodeString34 = ` `;
export const initialCodeString4 = `    <participant name="Calculix">
      <use-mesh name="Calculix_Mesh" provide="yes"/>
      <write-data name="DisplacementDeltas0" mesh="Calculix_Mesh"/>
      <read-data  name="Forces0"      mesh="Calculix_Mesh"/>
      <watch-point 
        mesh="Calculix_Mesh" name="point1" coordinate="-0.05;0.01;1">
    </participant>`
export const initialCodeString45 = ``;
export const initialCodeString5 = `    <m2n:sockets
      from="SU2_CFD" to="Calculix"
      exchange-directory="../" distribution-type="gather-scatter"/>`
export const initialCodeString56 = ` `;


export const initialCodeString6 = `    <coupling-scheme:serial-implicit>
           <participants first="SU2_CFD" second="Calculix"/>
           <max-timesteps value="400"/>
           <timestep-length value="1e-2" />
           
           <exchange
             data="Forces0" mesh="Calculix_Mesh"
             from="SU2_CFD" to="Calculix"/>
           
           <exchange
             data="DisplacementDeltas0" mesh="Calculix_Mesh"
             from="Calculix" to="SU2_CFD" />
             <max-iterations value="50"/>
             
           <relative-convergence-measure
             limit="1e-3" data="DisplacementDeltas0" mesh="Calculix_Mesh"/>
           <relative-convergence-measure
            limit="1e-3" data="Forces0" mesh="Calculix_Mesh"/>
           <extrapolation-order value="2"/>
           
           <post-processing:aitken>
              <data name="DisplacementDeltas0" mesh="Calculix_Mesh"/>
              <initial-relaxation value="0.8"/>
           </post-processing:aitken>
        
        </coupling-scheme:serial-implicit>`;

export const initialCodeStringEnd = `
   </solver-interface>

</precice-configuration>`;

