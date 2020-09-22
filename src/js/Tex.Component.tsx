import React from 'react';
import TeX from '@matejmazur/react-katex';

export const $: React.FC<{}> = props => (
    <TeX>{String.raw`${props.children}`}</TeX>
);

export const $$: React.FC<{}> = props => (
    <TeX block>{String.raw`\begin{aligned}${props.children}\end{aligned}`}</TeX>
);