## **ctf_crypto_0x000-substitution_cipher**
```python
#!/usr/bin/env/ python3
# -*- coding: utf-8 -*-
## 
#  @file ctf_crypto_0x000_substitution_cipher.py
#  @brief Substitution Cipher
#  
#  @author LengSword
#  @email 1030588973@qq.com
#  @version 0.0.1
#  @date 2018/08/16
#  @license MIT


class SC_Crypto(object):
    
    def encrypt(ciphertext):
        result = ""
        for pos, char in enumerate(ciphertext):
            char = chr(ord(char) + pos)
            result += char
        return result
    
    def decrypt(ciphertext):
        result = ""
        for pos, char in enumerate(ciphertext):
            char = chr(ord(char) - pos)
            result += char
        return result


if __name__ == '__main__':
    r = SC_Crypto.encrypt("123")
    print(r)
    r = SC_Crypto.decrypt("d5d<::7?")
    print(r)
```