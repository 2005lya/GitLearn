f = open("code.txt", "w");
for i in range(0, 999999):
    s = str(i)
    s = s.zfill(6)
    s = s + '\n'
    f.write(s)
f.close()
