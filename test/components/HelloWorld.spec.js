import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import HelloWorld from '@/components/HelloWorld.vue';

describe('test', () => {
  it('shows hello', () => {
    const wrapper = mount(HelloWorld, {
      props: {
        msg: 'hello',
      },
    });
    expect(wrapper.text()).toMatch('hello');
  });
});
