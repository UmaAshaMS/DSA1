const obj = {a:1, b:2, c:3, bark : function(){console.log('Dog')}}
console.log(obj['a'])
console.log(obj.b)

delete obj.c
console.log(obj)

obj.bark()