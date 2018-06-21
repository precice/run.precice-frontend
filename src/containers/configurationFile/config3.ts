/**
 * Created by pei on 25/08/2017.
 */

export const config3 = { 
 initial : '',
//TODO change the config
 sub1 : 'interface',
 sub2 : 'mesh',
 sub3 : 'SU2',
 sub4 : 'CalculiX',
 sub5 : 'communication method',
 sub6 : 'coupling scheme',

 sec01 : {
  start: 1,
  total: 4,
  end: 4,
},
 sec1 : {
  start: 5,
  total: 3,
  end: 7,
},
 sec12 : {
  start: 8,
  total: 1,
  end: 8,
},
 sec2 : {
  start: 9,
  total: 9,
  end: 17,
},
 sec23 : {
  start: 18,
  total: 1,
  end: 18,
},
 sec3 : {
  start: 19,
  total: 12,
  end: 30,
},
 sec34 : {
  start: 31,
  total: 1,
  end: 31,
},
 sec4 : {
  start: 32,
  total: 7,
  end: 38,
},
 sec45 : {
  start: 39,
  total: 1,
  end: 39,
},
 sec5 : {
  start: 40,
  total: 3,
  end: 42,
},
 sec56 : {
  start: 43,
  total: 1,
  end: 43,
},
 sec6 : {
  start: 44,
  total: 26,
  end: 69,
},
 secEnd : {
  start: 70,
  total: 4,
  end: 73,
},

 initialCodeString01 : `<?xml version="1.0"?>

<precice-configuration>
 `,

 initialCodeString1 : `  <solver-interface dimensions="3">
    <data:vector name="Forces0"/>
    <data:vector name="DisplacementDeltas0"/>`,
 initialCodeString12 : ``,
 initialCodeString2 : `    <mesh name="SU2_Mesh0">
      <use-data name="Forces0"/>
      <use-data name="DisplacementDeltas0"/>
    </mesh>

    <mesh name="Calculix_Mesh">
      <use-data name="DisplacementDeltas0"/>
      <use-data name="Forces0"/>
    </mesh>`,
 initialCodeString23 : ``,
 initialCodeString3 : `    <participant name="SU2_CFD">
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
    </participant>`,
 initialCodeString34 : ` `,
 initialCodeString4 : `    <participant name="Calculix">
      <use-mesh name="Calculix_Mesh" provide="yes"/>
      <write-data name="DisplacementDeltas0" mesh="Calculix_Mesh"/>
      <read-data  name="Forces0"      mesh="Calculix_Mesh"/>
      <watch-point 
        mesh="Calculix_Mesh" name="point1" coordinate="-0.05;0.01;1">
    </participant>`,
 initialCodeString45 : ``,
 initialCodeString5 : `    <m2n:sockets
      from="SU2_CFD" to="Calculix"
      distribution-type="gather-scatter"/>`,
 initialCodeString56 : ` `,


 initialCodeString6 : `    <coupling-scheme:serial-implicit>
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
        
        </coupling-scheme:serial-implicit>`,

 initialCodeStringEnd : `
   </solver-interface>

</precice-configuration>`,

};
