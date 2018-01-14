/**
 * Created by pei on 25/08/2017.
 */

import * as React from 'react';
export const initial = '';
//TODO change the config
export const sub1 = 'coupling scheme';
export const sub2 = 'data';
export const sub3 = ' ';
export const sub4 = ' ';
export const sub5 = ' ';
export const sub6 = ' ';

export const sec01 = {
  start: 1,
  total: 42,
  end: 42,
};
export const sec1 = {
  start: 43,
  total: 1,
  end: 43,
};
export const sec12 = {
  start: 44,
  total: 17,
  end: 60,
};
export const sec2 = {
  start: 61,
  total: 2,
  end: 62,
};
export const sec23 = {
  start: 0,
  total: 0,
  end: 0,
};
export const sec3 = {
  start: 0,
  total: 0,
  end: 0,
};
export const sec34 = {
  start: 0,
  total: 0,
  end: 0,
};
export const sec4 = {
  start: 0,
  total: 0,
  end: 0,
};
export const sec45 = {
  start: 0,
  total: 0,
  end: 0,
};
export const sec5 = {
  start: 0,
  total: 0,
  end: 0,
};
export const sec56 = {
  start: 0,
  total: 0,
  end: 0,
};
export const sec6 = {
  start: 0,
  total: 0,
  end: 0,
};
export const secEnd = {
  start: 63,
  total: 4,
  end: 74,
};

export const initialCodeString01 = `<?xml version="1.0" encoding='UTF-8'?>

<precice-configuration>

   <solver-interface dimensions="3">
      <data:vector name="Forces0"/>
      <data:vector name="DisplacementDeltas0"/>

      <mesh name="SU2_Mesh0">
         <use-data name="Forces0"/>
         <use-data name="DisplacementDeltas0"/>
      </mesh>

      <mesh name="Calculix_Mesh">
         <use-data name="DisplacementDeltas0"/>
         <use-data name="Forces0"/>
      </mesh>

      <participant name="SU2_CFD">
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
      </participant>

      <participant name="Calculix">
         <use-mesh name="Calculix_Mesh" provide="yes"/>
         <write-data name="DisplacementDeltas0" mesh="Calculix_Mesh"/>
         <read-data  name="Forces0"      mesh="Calculix_Mesh"/>
        <watch-point mesh="Calculix_Mesh" name="point1" coordinate="-0.05;0.01;1">
      </participant>

      <m2n:sockets
        from="SU2_CFD" to="Calculix"
        exchange-directory="../" distribution-type="gather-scatter"/>
 `;

export const initialCodeString1 = `      <coupling-scheme:parallel-implicit>`;
export const initialCodeString12 = `           <participants first="SU2_CFD" second="Calculix"/>
           <max-timesteps value="400"/>
           <timestep-length value="1e-2" />
           <exchange
             data="Forces0" mesh="Calculix_Mesh"
             from="SU2_CFD" to="Calculix"/>
           <exchange
             data="DisplacementDeltas0"
             mesh="Calculix_Mesh" from="Calculix" to="SU2_CFD" />
           <max-iterations value="50"/>
           <relative-convergence-measure
             limit="1e-3" data="DisplacementDeltas0" mesh="Calculix_Mesh"/>
           <relative-convergence-measure
             limit="1e-3" data="Forces0" mesh="Calculix_Mesh"/>
           <extrapolation-order value="2"/>

           <post-processing:IQN-ILS>`;
export const initialCodeString2 = `            <data name="DisplacementDeltas0" mesh="Calculix_Mesh"/>
            <data name="Forces0" mesh="Calculix_Mesh"/>`;
export const initialCodeString23 = ``;
export const initialCodeString3 = ``;
export const initialCodeString45 = ``;
export const initialCodeString5 = ``;
export const initialCodeString56 = ` `;
export const initialCodeString6 = ``;
export const initialCodeStringEnd = `            <preconditioner type="residual-sum"/>
            <filter type="QR1" limit="1e-6"/>
            <initial-relaxation value="0.5"/>
            <max-used-iterations value="40"/>
            <timesteps-reused value="10"/>
           </post-processing:IQN-ILS>

      </coupling-scheme:parallel-implicit>

   </solver-interface>

</precice-configuration>
`;

