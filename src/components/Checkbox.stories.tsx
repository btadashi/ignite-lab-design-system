/**Meta e StoryObj ajudam no intellisense do editor de código */
import { Meta, StoryObj } from '@storybook/react';
import { Checkbox, CheckboxProps } from './Checkbox';
import { Text } from './Text';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {},
  argTypes: {},
  decorators: [
    Story => {
      return (
        <div className="flex items-center gap-2">
          {Story()}
          <Text size="sm">Lembrar-me de mim durante 30 dias</Text>
        </div>
      );
    },
  ],
} as Meta<CheckboxProps>;

/**Precisamos exportar, pelo menos, uma variante (como Default ou Primary).
 * Nesse caso, podemos exportar apenas um objeto vazio */
export const Default: StoryObj<CheckboxProps> = {};
