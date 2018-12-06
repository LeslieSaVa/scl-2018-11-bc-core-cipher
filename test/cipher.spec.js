describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', ()=>{
      assert.equal(cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"),"HIJKLMNOPQRSTUVWXYZABCDEFG");
    });
    it('debería retornar "KROD PXQGR"  para "HOLA MUNDO" con offset 55', ()=>{
      assert.equal(cipher.encode(55,"HOLA MUNDO"),"KROD PXQGR");
    });
    it('debería retornar "krod pxqgr"  para "hola mundo" con offset 55', ()=>{
      assert.equal(cipher.encode(55,"hola mundo"),"krod pxqgr");
      });
    it('debería retornar "ÑERHY"  para "ÑANDU" con offset 4', ()=>{
      assert.equal(cipher.encode(4,"ÑANDU"),"ÑERHY");
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33',()=>{
      assert.equal(cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG"),"ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });
    it('debería retornar "HOLA MUNDO" para "KROD PXQGR" con offset 55',()=>{
      assert.equal(cipher.decode(55,"KROD PXQGR"),"HOLA MUNDO");
    });
    it('debería retornar "hola mundo" para "krod pxqgr" con offset 55',()=>{
      assert.equal(cipher.decode(55,"krod pxqgr"),"hola mundo");
    });
  });

});
