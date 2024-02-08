let names=["madhu","rani","pooja"]
let capitalizedNames=names.map((name)=>{
    return name.toUpperCase();
});
console.log(capitalizedNames);

s=input()
i=1
c=0
c1=0
while i<16:
  c1=c1+1
  if c1%2==0 and s[i-1]=="0":
    c=c+1
  i=i+1
if c>=8:
  print("yes")
else:
  print("no")
