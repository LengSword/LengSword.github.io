## **ctf_crypto_0x002-crc32**
```python
#!/usr/bin/env/ python3
# -*- coding: utf-8 -*-
## 
#  @file ctf_crypto_0x002-crc32.py
#  @brief crc32 crack(password is the 8 bits numbers)
#  
#  @author LengSword
#  @email 1030588973@qq.com
#  @version 0.0.1
#  @date 2018/08/20
#  @license MIT
import binascii

def crackcrc32():
    tar_crc = 0xBACAB29E
    
    r = range(48, 57 + 1) # ASCII code - 1234567890
    for a in r:
        for b in r:
            for c in r:
                for d in r:
                    for e in r:
                        for f in r:
                            for g in r:
                                for h in r:
                                    txt = chr(a)+chr(b)+chr(c)+chr(d)+chr(e)+chr(f)+chr(g)+chr(h)
                                    crc = binascii.crc32(txt.encode())
                                    if crc == tar_crc: # CMP 8 bit numbers with tar_crc
                                        print("password:%s" % txt)
                                        return

if __name__ == '__main__':
    crackcrc32()
```