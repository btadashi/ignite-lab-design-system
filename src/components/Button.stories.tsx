/**Meta e StoryObj ajudam no intellisense do editor de código */
import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Create account',
  },
  argTypes: {},
} as Meta<ButtonProps>;

/**Precisamos exportar, pelo menos, uma variante (como Default ou Primary).
 * Nesse caso, podemos exportar apenas um objeto vazio */
export const Default: StoryObj<ButtonProps> = {};
