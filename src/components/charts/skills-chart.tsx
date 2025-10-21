'use client';

import { useTheme } from 'next-themes';
import { Group } from '@visx/group';
import { Arc } from '@visx/shape';
import { Text } from '@visx/text';
import { scaleLinear } from '@visx/scale';
import { useMemo } from 'react';

const width = 150;
const height = 150;
const margin = { top: 10, right: 10, bottom: 10, left: 10 };

const centerX = width / 2;
const centerY = height / 2;
const innerRadius = width / 2 - 20;
const outerRadius = width / 2 - 10;
const startAngle = -Math.PI / 2 - Math.PI / 4;
const endAngle = Math.PI / 2 + Math.PI / 4;

type Props = {
  value: number;
  width?: number;
  height?: number;
};

export function SkillsChart({ value, width: propsWidth = width, height: propsHeight = height }: Props) {
  const { theme } = useTheme();

  const primaryColor = useMemo(() => `hsl(var(--primary))`, [theme]);
  const mutedColor = useMemo(() => `hsl(var(--border))`, [theme]);

  const valueScale = scaleLinear<number>({
    domain: [0, 100],
    range: [startAngle, endAngle],
  });

  const angle = valueScale(value);

  return (
    <svg width={propsWidth} height={propsHeight}>
      <Group top={centerY + margin.top} left={centerX + margin.left}>
        {/* Background Arc */}
        <Arc
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={mutedColor}
          cornerRadius={3}
        />

        {/* Foreground Arc for the value */}
        <Arc
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={angle}
          fill={primaryColor}
          cornerRadius={3}
        />

        {/* Text in the center */}
        <Text
          x={0}
          y={0}
          textAnchor="middle"
          verticalAnchor="middle"
          fontSize={32}
          fontWeight="bold"
          fill={primaryColor}
          className="font-headline text-glow"
        >
          {`${value}%`}
        </Text>
      </Group>
    </svg>
  );
}
