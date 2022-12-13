import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Btn } from "./Btn";

export default {
    title: 'Example/Btn',
    component: Btn
} as ComponentMeta<typeof Btn>

const Template: ComponentStory<typeof Btn> = (args) => <Btn {...args} />;

export const Size = Template.bind({});
Size.args = {
    size: 'large',
    label: 'Hi',
};

export const Primary = Template.bind({});
Primary.args = { 
    primary: true,
    label: 'Hello',
}
