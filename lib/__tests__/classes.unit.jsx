import classes from '../util/classes';

describe('classes', () => {
    it('测试0个参数', () => {
        const result = classes();
        expect(result).toEqual('');
    })

    it('测试1个参数', () => {
        const result = classes('a');
        expect(result).toEqual('a');
    })

    it('测试2个参数', () => {
        const result = classes('a', 'b');
        expect(result).toEqual('a b');
    })

    it('测试2个参数, undefined', () => {
        const result = classes('a', undefined);
        expect(result).toEqual('a');
    })

    it('测试多个参数', () => {
        const result = classes('a', '我', undefined, '');
        expect(result).toEqual('a 我');
    })
})