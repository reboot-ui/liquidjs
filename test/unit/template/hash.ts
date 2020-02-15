import * as chai from 'chai'
import { toThenable } from '../../../src/util/async'
import { Hash } from '../../../src/template/tag/hash'
import { Context } from '../../../src/context/context'

const expect = chai.expect

describe('Hash', function () {
  describe('colon as assignment', async function () {
    it('should parse variable', async function () {
      const hash = await toThenable(Hash.create('num:foo', new Context({ foo: 3 })))
      expect(hash.num).to.equal(3)

      const hash2 = await toThenable(Hash.create('num:foo', new Context({})))
      expect(hash2.num).to.equal(undefined)
    })
    it('should parse literals', async function () {
      const hash = await toThenable(Hash.create('num:3', new Context()))
      expect(hash.num).to.equal(3)
    })
  })

  describe('equality sign as assignment', async function () {
    it('should parse variable', async function () {
      const hash = await toThenable(Hash.create('num=foo', new Context({ foo: 3 })))
      expect(hash.num).to.equal(3)

      const hash2 = await toThenable(Hash.create('num=foo', new Context({})))
      expect(hash2.num).to.equal(undefined)
    })
    it('should parse literals', async function () {
      const hash = await toThenable(Hash.create('num=3', new Context()))
      expect(hash.num).to.equal(3)
    })
  })
})
