'use client';

import { skills } from '@/lib/placeholder-data';
import { useTheme } from 'next-themes';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <Card className="bg-background/80 backdrop-blur-sm">
        <CardHeader className="p-4">
          <CardTitle className="text-base font-headline">{label}</CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <p className="text-sm text-muted-foreground">{data.description}</p>
          <p className="text-lg font-bold text-primary mt-2">{data.level}%</p>
        </CardContent>
      </Card>
    );
  }
  return null;
};

export function SkillsChart() {
  const { theme } = useTheme();
  const primaryColor = 'hsl(var(--primary))';
  const mutedColor = 'hsl(var(--muted-foreground) / 0.3)';

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={skills}
        margin={{
          top: 5,
          right: 30,
          left: -10,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke={mutedColor} />
        <XAxis
          dataKey="name"
          stroke={mutedColor}
          fontSize={12}
          tickLine={false}
          axisLine={false}
          interval={0}
          angle={-45}
          textAnchor="end"
          height={80}
        />
        <YAxis stroke={mutedColor} fontSize={12} tickLine={false} axisLine={false} />
        <Tooltip
          content={<CustomTooltip />}
          cursor={{ fill: 'hsl(var(--primary) / 0.1)' }}
        />
        <Bar dataKey="level" radius={[4, 4, 0, 0]}>
          {skills.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={primaryColor} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
