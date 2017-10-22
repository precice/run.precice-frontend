/**
 * Created by pei on 25/08/2017.
 */

import * as React from 'react';

export const sub1 = 'interface';
export const sub2 = 'mesh';
export const sub3 = 'behavior for SU2';
export const sub4 = 'behavior for CalculiX';
export const sub5 = 'communication method';
export const sub6 = 'coupling scheme';

export const initialCodeString0 = `<?xml version="1.0"?>

<precice-configuration>
 `;

export const initialCodeString1 = `  <solver-interface dimensions="3">

    <!-- Data fields that are exchanged between the solvers -->
    <data:vector name="Forces0"/>
    <data:vector name="DisplacementDeltas0"/>`;
export const initialCodeString12 = `
    <!-- A common mesh that uses these data fields -->`;
export const initialCodeString2 = `    <mesh name="SU2_Mesh0">
      <use-data name="Forces0"/>
      <use-data name="DisplacementDeltas0"/>
    </mesh>

    <mesh name="Calculix_Mesh">
      <use-data name="DisplacementDeltas0"/>
      <use-data name="Forces0"/>
    </mesh>`
export const initialCodeString23 = `
    <!-- Represents each solver using preCICE. In a coupled simulation, two participants have to be
         defined. The name of the participant has to match the name given on construction of the
         precice::SolverInterface object used by the participant. -->
 `
export const initialCodeString3 = `    <participant name="SU2_CFD">
      <!-- Makes the named mesh available to the participant. Mesh is provided by the solver directly. -->
      <use-mesh name="Calculix_Mesh" from="Calculix"/>
      <use-mesh name="SU2_Mesh0" provide="yes"/>
      <!-- Define input/output of the solver.  -->
      <write-data name="Forces0" mesh="SU2_Mesh0"/>
      <read-data  name="DisplacementDeltas0" mesh="SU2_Mesh0"/>
      <mapping:nearest-neighbor direction="write" from="SU2_Mesh0" to="Calculix_Mesh" constraint="conservative" timing="initial"/>
      <mapping:nearest-neighbor direction="read" from="Calculix_Mesh" to="SU2_Mesh0" constraint="consistent" timing="initial"/>
    </participant>`
export const initialCodeString34 = ` `
export const initialCodeString4 = `    <participant name="Calculix">
      <use-mesh name="Calculix_Mesh" provide="yes"/>
      <write-data name="DisplacementDeltas0" mesh="Calculix_Mesh"/>
      <read-data  name="Forces0"      mesh="Calculix_Mesh"/>
    </participant>`
export const initialCodeString45 = `
    <!-- Communication method, use TCP/IP sockets, change network to "ib0" on SuperMUC -->`
export const initialCodeString5 = `    <m2n:sockets from="SU2_CFD" to="Calculix"  exchange-directory="../" distribution-type="gather-scatter"/>`
export const initialCodeString56 = ` `;
export const initialCodeString6 = `    <coupling-scheme:serial-implicit>
      <participants first="SU2_CFD" second="Calculix"/>
      <max-time value="10000"/>
      <timestep-length value="1e-4" />
      <exchange data="Forces0" mesh="Calculix_Mesh" from="SU2_CFD" to="Calculix"/>
      <exchange data="DisplacementDeltas0" mesh="Calculix_Mesh" from="Calculix" to="SU2_CFD" />
      <max-iterations value="50"/>
      <relative-convergence-measure limit="1e-4" data="DisplacementDeltas0" mesh="Calculix_Mesh"/>
      <relative-convergence-measure limit="1e-4" data="Forces0" mesh="Calculix_Mesh"/>
      <extrapolation-order value="2"/>
      <post-processing:aitken>
	<!-- PostProc always done on the second participant -->
        <data name="DisplacementDeltas0" mesh="Calculix_Mesh"/>
        <initial-relaxation value="0.1"/>
      </post-processing:aitken>
    </coupling-scheme:serial-implicit>`
export const initialCodeStringEnd = `
  </solver-interface>
</precice-configuration>`;

export const sunburstModified = {
  "hljs": {
    "display": "block",
    "overflowX": "auto",
    "padding": "0 0.5em",
    "background": "#000",
    "color": "#f8f8f8"
  },
  "hljs-comment": {
    "color": "#aeaeae",
    "fontStyle": "italic"
  },
  "hljs-quote": {
    "color": "#aeaeae",
    "fontStyle": "italic"
  },
  "hljs-keyword": {
    "color": "#e28964"
  },
  "hljs-selector-tag": {
    "color": "#e28964"
  },
  "hljs-type": {
    "color": "#e28964"
  },
  "hljs-string": {
    "color": "#65b042"
  },
  "hljs-subst": {
    "color": "#daefa3"
  },
  "hljs-regexp": {
    "color": "#e9c062"
  },
  "hljs-link": {
    "color": "#e9c062"
  },
  "hljs-title": {
    "color": "#89bdff"
  },
  "hljs-section": {
    "color": "#89bdff"
  },
  "hljs-tag": {
    "color": "#89bdff"
  },
  "hljs-name": {
    "color": "#89bdff"
  },
  "hljs-class .hljs-title": {
    "textDecoration": "underline"
  },
  "hljs-doctag": {
    "textDecoration": "underline"
  },
  "hljs-symbol": {
    "color": "#3387cc"
  },
  "hljs-bullet": {
    "color": "#3387cc"
  },
  "hljs-number": {
    "color": "#3387cc"
  },
  "hljs-params": {
    "color": "#3e87e3"
  },
  "hljs-variable": {
    "color": "#3e87e3"
  },
  "hljs-template-variable": {
    "color": "#3e87e3"
  },
  "hljs-attribute": {
    "color": "#cda869"
  },
  "hljs-meta": {
    "color": "#8996a8"
  },
  "hljs-formula": {
    "backgroundColor": "#0e2231",
    "color": "#f8f8f8",
    "fontStyle": "italic"
  },
  "hljs-addition": {
    "backgroundColor": "#253b22",
    "color": "#f8f8f8"
  },
  "hljs-deletion": {
    "backgroundColor": "#420e09",
    "color": "#f8f8f8"
  },
  "hljs-selector-class": {
    "color": "#9b703f"
  },
  "hljs-selector-id": {
    "color": "#8b98ab"
  },
  "hljs-emphasis": {
    "fontStyle": "italic"
  },
  "hljs-strong": {
    "fontWeight": "bold"
  }
};
