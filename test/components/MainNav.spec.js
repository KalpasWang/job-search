import MainNav from '@/components/MainNav.vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

describe('MainNav', () => {
  it('顯示網站名稱', () => {
    const wrapper = mount(MainNav)
    expect(wrapper.text()).toContain('Doodle Careers')
  })
})
