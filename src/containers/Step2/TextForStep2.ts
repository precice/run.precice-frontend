/**
 * Created by pei on 25/08/2017.
 */

import * as React from 'react';

export const sub1 = 'interface';
export const sub2 = 'mesh';
export const sub3 = 'behavior';
export const sub4 = 'communication method';
export const sub5 = 'coupling scheme';

export const initialCodeString = `<?xml version="1.0"?>

<precice-configuration>

  <solver-interface dimensions="">

    <!-- Data fields that are exchanged between the solvers -->
    <data:(type) name="(string)"/>
    <data:(type) name="(string)"/>

    <!-- A common mesh that uses these data fields -->
    <mesh name="(string)">
      <use-data name="(string)"/>
      <use-data name="(string)"/>
    </mesh>

    <mesh name="(string)">
      <use-data name="(string)"/>
      <use-data name="(string)"/>
    </mesh>

    <!-- Represents each solver using preCICE. In a coupled simulation, two participants have to be
         defined. The name of the participant has to match the name given on construction of the
         precice::SolverInterface object used by the participant. -->

    <participant name="">
      <!-- Makes the named mesh available to the participant. Mesh is provided by the solver directly. -->
      <use-mesh name="" provide="yes"/>
      <use-mesh name="" from=""/>
      <!-- Define input/output of the solver.  -->
      <write-data name="" mesh=""/>
      <read-data  name="" mesh=""/>
      <mapping:nearest-neighbor direction="write" from="" to="" constraint="" timing="initial"/>
      <mapping:nearest-neighbor direction="read"  from="" to="" constraint="" timing="initial"/>
    </participant>

    <participant name="">
      <use-mesh name="" provide="yes"/>
      <write-data name="" mesh=""/>
      <read-data  name=""      mesh=""/>
    </participant>

    <!-- Communication method, use TCP/IP sockets, change network to "ib0" on SuperMUC -->
    <m2n:sockets from="" to="" distribution-type="" exchange-directory="../"/>

    <coupling-scheme:(scheme)>
      <participants first="" second=""/>
      <max-time value=""/>
      <timestep-length value=""/>
      <max-iterations value=""/>
      <exchange data=""      mesh="" from="" to="" />
      <exchange data=""      mesh="" from="" to="" />
      <relative-convergence-measure data="" mesh="" limit=""/>
      <relative-convergence-measure data="" mesh="" limit=""/>
      <extrapolation-order value="2"/>
      <post-processing:>
	<!-- PostProc always done on the second participant -->
        <data name="" mesh=""/>
        <initial-relaxation value=""/>
      </post-processing:>
    </coupling-scheme:(scheme)>

  </solver-interface>
</precice-configuration>`;
interface TextForStep2 {
  totalText: string;
  sub1Text: string;
  sub2Text: string;
  sub3Text: string;
  sub4Text: string;
  sub5Text: string;
}
class TextForStep2 extends React.Component<TextForStep2, any> {
  constructor() {
    super();
    this.state = {ini: initialCodeString1 + initialCodeString2};
    }
}

export default TextForStep2;

export const initialCodeString1 = `<solver-interface dimensions="">

    <data:vector name=""/>
    <data:vector name=""/>`;
export const initialCodeString2 = `<mesh name="">
      <use-data name=""/>
      <use-data name=""/>
    </mesh>

    <mesh name="">
      <use-data name=""/>
      <use-data name=""/>
    </mesh>`;
export const initialCodeString3 = `<participant name="">
      <!-- Makes the named mesh available to the participant. Mesh is provided by the solver directly. -->
      <use-mesh name="" provide="yes"/>
      <use-mesh name="" from=""/>
      <!-- Define input/output of the solver.  -->
      <write-data name="" mesh=""/>
      <read-data  name="" mesh=""/>
      <mapping:nearest-neighbor direction="write" from="" to="" constraint="" timing="initial"/>
      <mapping:nearest-neighbor direction="read"  from="" to="" constraint="" timing="initial"/>
    </participant>

    <participant name="">
      <use-mesh name="" provide="yes"/>
      <write-data name="" mesh=""/>
      <read-data  name=""      mesh=""/>
    </participant>`;
export const initialCodeString4 = `<m2n:sockets from="" to=""  distribution-type="gather-scatter"/>`;
export const initialCodeString5 = `<coupling-scheme:>
      <participants first="" second=""/>
      <max-time value=""/>
      <timestep-length value=""/>
      <max-iterations value=""/>
      <exchange data=""      mesh="" from="" to="" />
      <exchange data=""      mesh="" from="" to="" />
      <relative-convergence-measure data="" mesh="" limit=""/>
      <relative-convergence-measure data="" mesh="" limit=""/>
      <extrapolation-order value="2"/>
      <post-processing:>
	<!-- PostProc always done on the second participant -->
        <data name="" mesh=""/>
        <initial-relaxation value=""/>
      </post-processing:>
    </coupling-scheme:>`;
