import { expect, it } from 'vitest'
import { parseNlx } from '../../src/commands'

const agent = 'bun'
function _(arg: string, expected: string) {
  return () => {
    expect(
      parseNlx(agent, arg.split(' ').filter(Boolean)),
    ).toBe(
      expected,
    )
  }
}

it('single uninstall', _('esbuild', 'bunx esbuild'))
it('multiple', _('esbuild --version', 'bunx esbuild --version'))
