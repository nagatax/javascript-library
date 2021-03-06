const ValidatorCommon = require('../../src/js/Validator/Common');

// load jasmine module
require('jasmine-es6');

describe('Commonクラスのテスト', () => {
  /** {Validator.Common} */
  const sut = new ValidatorCommon();

  /**
   * 初期化処理
   */
  beforeEach(() => {
    // pass
  });

  /**
   * 事後処理
   */
  afterEach(() => {
    // pass
  });

  describe('isContainString関数のテスト', () => {
    it('OK Pattern pre', () => {
      expect(sut.isContainString('javascript', 'java')).toEqual(true);
    });
    it('OK Pattern middle', () => {
      expect(sut.isContainString('javascript', 'vasc')).toEqual(true);
    });
    it('OK Pattern post', () => {
      expect(sut.isContainString('javascript', 'script')).toEqual(true);
    });
    it('NG Pattern', () => {
      expect(sut.isContainString('javascript', 'bad string')).toEqual(false);
    });
  });
});
