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

export const initialCodeString1 = `  <solver-interface dimensions="">

    <!-- Data fields that are exchanged between the solvers -->
    <data:(type) name="(string)"/>
    <data:(type) name="(string)"/>`;
export const initialCodeString12 = `
    <!-- A common mesh that uses these data fields -->`;
export const initialCodeString2 = `    <mesh name="(string)">
      <use-data name="(string)"/>
      <use-data name="(string)"/>
    </mesh>

    <mesh name="(string)">
      <use-data name="(string)"/>
      <use-data name="(string)"/>
    </mesh>`
export const initialCodeString23 = `
    <!-- Represents each solver using preCICE. In a coupled simulation, two participants have to be
         defined. The name of the participant has to match the name given on construction of the
         precice::SolverInterface object used by the participant. -->
 `
export const initialCodeString3 = `    <participant name="">
      <!-- Makes the named mesh available to the participant. Mesh is provided by the solver directly. -->
      <use-mesh name="" (Provider)/>
      <use-mesh name="" (Provider)/>
      <!-- Define input/output of the solver.  -->
      <write-data name="" mesh=""/>
      <read-data  name="" mesh=""/>
      <mapping:nearest-neighbor direction="write" from="" to="" constraint="" timing="initial"/>
      <mapping:nearest-neighbor direction="read"  from="" to="" constraint="" timing="initial"/>
    </participant>`
export const initialCodeString34 = ` `
export const initialCodeString4 = `    <participant name="">
      <use-mesh name="" (Provider)"/>
      <write-data name="" mesh=""/>
      <read-data  name=""      mesh=""/>
    </participant>`
export const initialCodeString45 = `
    <!-- Communication method, use TCP/IP sockets, change network to "ib0" on SuperMUC -->`
export const initialCodeString5 = `    <m2n:sockets from="" to="" distribution-type="" exchange-directory="../"/>`
export const initialCodeString56 = ` `;
export const initialCodeString6 = `    <coupling-scheme:(scheme)>
      <participants first="" second=""/>
      <max-time value=""/>
      <timestep-length value=""/>
      <max-iterations value=""/>
      <exchange data=""      mesh="" from="" to="" />
      <exchange data=""      mesh="" from="" to="" />
      <relative-convergence-measure data="" mesh="" limit=""/>
      <relative-convergence-measure data="" mesh="" limit=""/>
      <extrapolation-order value="2"/>
      <post-processing:aitken>
	<!-- PostProc always done on the second participant -->
        <data name="" mesh=""/>
        <initial-relaxation value=""/>
      </post-processing:aitken>
    </coupling-scheme:(scheme)>`
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
