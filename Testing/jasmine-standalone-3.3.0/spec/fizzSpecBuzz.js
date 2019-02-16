it('should return "1" for 1', () => {
    expect( checkFizzBuzz(1) ).toEqual('1');
  } )
  
  it('should return "2" for 2',  () => {
    expect( checkFizzBuzz(2) ).toEqual('2');
  } ) 
  
  it('should return "fizz" for 3',  () => {
    expect( checkFizzBuzz(3) ).toEqual('fizz');
  } ) 
  
  it('should return "buzz" for 5',  () => {
    expect( checkFizzBuzz(5) ).toEqual('buzz');
  } ) 
  
  it('should return "fizzbuzz" for 15',  () => {
    expect( checkFizzBuzz(15) ).toEqual('fizzbuzz');
  } ) 
  
  it("input should be a number", ()=>{
    expect(()=>{ checkFizzBuzz('bananas'); } ).toThrow(new Error("Input must be a number"));
  });