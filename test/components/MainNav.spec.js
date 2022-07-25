import MainNav from '@/components/MainNav.vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

describe('MainNav', () => {
  it('顯示網站名稱', () => {
    const wrapper = mount(MainNav)
    expect(wrapper.text()).toContain('Doodle Careers')
  })

  it('顯示導覽選單', () => {
    const wrapper = mount(MainNav)
    const navMenuItems = wrapper.findAll('[data-test="nav-items"]')
    const navMenuTexts = navMenuItems.map((el) => el.text())
    expect(navMenuTexts).toEqual([
      'Teams',
      'Locations',
      'Benefits',
      'Jobs',
      'Students',
    ])
  })
})
