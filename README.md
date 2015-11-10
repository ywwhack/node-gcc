#node-gcc

##Install
```
npm install -g node-gcc
```

##Usage
when compile a C project without IDE, we may need add xxx.c one by one like this:
```
gcc main.c a.c b.c xxx.c...
```

node-gcc just a tool for convenience to add this annoying xxx.c, you just need point out the main file:
```
node-gcc compile main.c
```

